import { useReducer, useEffect } from "react";
import { CartView } from "../Components/CartView";
import { CatalogView } from "../Components/CatalogView";
import { ItemsReducer } from "../Reducer/ItemsReducer";
import { products } from "../Data/products";
import { addProductCart, deleteProductCart, updateQuantityProductCart } from "../Reducer/itemsActions";

const inititalCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];


export const CartApp = () => {

    const [cartItems, dispatch] = useReducer(ItemsReducer, inititalCartItems);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id);

        if (hasItem) {

            dispatch(
                {
                    type: updateQuantityProductCart,
                    payload: product,
                }
            );

        } else {

            dispatch(
                {
                    type: addProductCart,
                    payload: product,
                }
            );

        }

    }

    const handlerDeleteProduct = (id) => {
        dispatch(
            {
                type: deleteProductCart,
                payload: id,
            }
        );
    }

    return (
        <>

            <div className="container">
                <h3 className="my-4">CartAPP</h3>
                <CatalogView handler={handlerAddProductCart} />

                {cartItems?.length <= 0 || (
                    <div className="my-4 w-50">
                        <CartView items={cartItems}
                            handlerDelete={handlerDeleteProduct} />
                    </div>
                )}

            </div>
        </>)
}
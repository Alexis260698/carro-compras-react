import { ItemsReducer } from "../Reducer/ItemsReducer";
import { products } from "../Data/products";
import { addProductCart, deleteProductCart, updateQuantityProductCart } from "../Reducer/itemsActions";
import { useReducer, useEffect } from "react";

const inititalCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemCarts = () => {

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

    return{
        cartItems,
        handlerAddProductCart,
        handlerDeleteProduct,
        
    }

}
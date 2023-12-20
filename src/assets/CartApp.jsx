import { useState } from "react";
import { CartView } from "../Components/CartView";
import { CatalogView } from "../Components/CatalogView";

const inititalCartItems = [
    // {
    //     product: {
    //     },
    //     quantity: 0,
    //     total: 0
    // }
];


export const CartApp = () => {



    const [cartItems, setCartItems] = useState(inititalCartItems);

    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id);

        if (hasItem) {

            setCartItems([
                ...cartItems.filter((i) => i.product.id !== product.id),
                {
                    product,
                    quantity: hasItem.quantity + 1,
                }
            ])
        } else {
            setCartItems([
                ...cartItems,
                {
                    product,
                    quantity: 1,
                    total: product.price * 1
                }
            ]);
        }

    }

    const handlerDeleteProduct = (id) => {
        setCartItems([
            ...cartItems.filter((i) => i.product.id !== id),
        ])
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
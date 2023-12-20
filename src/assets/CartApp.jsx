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

    return (
        <>

            <div className="container">
                <h3>CartAPP</h3>
                <CatalogView handler={handlerAddProductCart} />

                <div className="my-4 w-50">
                    <CartView items={cartItems} />
                </div>

            </div>
        </>)
}
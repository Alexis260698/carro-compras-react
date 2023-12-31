import { useItemCarts } from "../hooks/useItemsCart";
import { NavBar } from "../Components/NavBar";
import { CartRoutes } from "../Routes/CartRoutes";



export const CartApp = () => {

    const { cartItems, handlerAddProductCart, handlerDeleteProduct } = useItemCarts();


    return (
        <>
            <NavBar></NavBar>
            <div className="container">
                <h3 className="my-4">CartAPP</h3>

                <CartRoutes
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProduct={handlerDeleteProduct}
                    cartItems={cartItems}
                    />
            </div>
        </>)
}
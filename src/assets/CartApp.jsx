import { CartView } from "../Components/CartView";
import { CatalogView } from "../Components/CatalogView";
import { useItemCarts } from "../hooks/useItemsCart";



export const CartApp = () => {

    const { cartItems, handlerAddProductCart, handlerDeleteProduct } = useItemCarts();


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
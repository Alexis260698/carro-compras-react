import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "../Components/CartView";
import { CatalogView } from "../Components/CatalogView";
import { useItemCarts } from "../hooks/useItemsCart";



export const CartApp = () => {

    const { cartItems, handlerAddProductCart, handlerDeleteProduct } = useItemCarts();


    return (
        <>

            <div className="container">
                <h3 className="my-4">CartAPP</h3>

                <Routes>
                    <Route path="catalog" element={<CatalogView handler={handlerAddProductCart} />} />
                    
                    <Route path="cart" element={(
                        cartItems?.length <= 0 ?
                        <div className="alert alert-warning">No hay elementos en el carro</div> :
                        (
                            <div className="my-4 w-50">
                                <CartView items={cartItems}
                                    handlerDelete={handlerDeleteProduct} />
                            </div>
                        )
                    )} />

                    <Route path="/" element= { <Navigate to={'/catalog'}  /> } />

                </Routes>
            </div>
        </>)
}
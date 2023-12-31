import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "../Components/CartView";
import { CatalogView } from "../Components/CatalogView";

export const CartRoutes = ( {handlerAddProductCart, handlerDeleteProduct, cartItems } ) => {
    return (
        <>
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

                <Route path="/" element={<Navigate to={'/catalog'} />} />

            </Routes>
        </>
    )
}
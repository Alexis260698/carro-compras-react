import { CartView } from "../Components/CartView";
import { CatalogView } from "../Components/CatalogView";

export const CardApp = () => {


    return (
        <>

            <div className="container">
                <h3>CardAPP</h3>
                <CatalogView />

                <div className="my-4 w-50">
                    <CartView/>
                </div>

            </div>
        </>)
}
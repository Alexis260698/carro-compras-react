import { useEffect, useState } from "react";
import { getProducts } from "../Services/ProductService";
import { ProductCardView } from "./ProductCardView";


export const CatalogView = ({ handler }) => {

    const [products, setProducts] = useState([]);


    useEffect(
        () => {
            setProducts(getProducts());
        }, [])


    return (
        <>

            <div className="row">
                {products.map(item => (
                    <div className="col-4 my-2"
                        key={item.id}>
                        <ProductCardView
                            handler={handler}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}

                        />
                    </div>
                ))}

            </div>

        </>
    )
}
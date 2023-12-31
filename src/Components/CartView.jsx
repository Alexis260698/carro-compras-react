import { useEffect, useState } from "react"
import { calculateTotal } from "../Services/ProductService";
import { useNavigate } from "react-router-dom";


export const CartView = ({ items, handlerDelete }) => {

    const navigate = useNavigate();
    const [total, setTotal] =useState(0);

    useEffect(() => {
        setTotal(calculateTotal(items));
    }, [items])


    const onDeleteItem = (id) =>{
        handlerDelete(id)
    }

    const onCatalog = () =>{
        navigate('/catalog');
    }

    return (
        <>
            <h3>Carro de compras</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity * item.product.price}</td>
                            <td><button className="btn btn-danger"
                            onClick= {() => onDeleteItem(item.product.id)}>
                                Eliminar </button></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">total</td>
                        <td colSpan="2" className="text-start fw-bold">{total}</td>
                    </tr>
                </tfoot>
            </table>
            <button className="btn btn-primary" 
            onClick={onCatalog}
            >Seguir Comprando</button>
        </>
    )
}



export const CartView = () => {
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
                    <tr>
                        <td>nombre</td>
                        <td>Precio</td>
                        <td>Cantidad</td>
                        <td>total</td>
                        <td>Eliminar</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">total</td>
                        <td colSpan="2" className="text-start fw-bold">12345</td>
                    </tr>
                </tfoot>
            </table>

        </>
    )
}

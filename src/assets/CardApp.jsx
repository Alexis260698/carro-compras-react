export const CardApp = () => {
    return (
        <>
    
        <div className="container">
        <h3>CardAPP</h3>
            <div className="row">
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico</h5>
                            <p className="card-text"> Teclado Mecanico con luces RGB</p>
                            <p className="card-text"> $1000</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico</h5>
                            <p className="card-text"> Teclado Mecanico con luces RGB</p>
                            <p className="card-text"> $1000</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico</h5>
                            <p className="card-text"> Teclado Mecanico con luces RGB</p>
                            <p className="card-text"> $1000</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico</h5>
                            <p className="card-text"> Teclado Mecanico con luces RGB</p>
                            <p className="card-text"> $1000</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico</h5>
                            <p className="card-text"> Teclado Mecanico con luces RGB</p>
                            <p className="card-text"> $1000</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico</h5>
                            <p className="card-text"> Teclado Mecanico con luces RGB</p>
                            <p className="card-text"> $1000</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-4 w-50">
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
                            <td colSpan="2"  className="text-start fw-bold">12345</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
        </>)
}
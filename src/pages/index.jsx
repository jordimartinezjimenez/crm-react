import { useLoaderData } from "react-router-dom"
import { obtenerClientes } from '../data/clientes'
import Cliente from "../components/Cliente"

export function loader() {
    const clientes = obtenerClientes()
    return clientes
}

const index = () => {

    const clientes = useLoaderData()

    return (
        <>
            <h1 className="font-black text-4xl">Clientes</h1>
            <p className="mt-3">Administra tus clientes</p>

            {clientes.length ? (
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-teal-800 text-white">
                        <tr>
                            <th className="p-2">Clientes</th>
                            <th className="p-2">Contacto</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map(cliente => (
                            <Cliente
                                cliente={cliente}
                                key={cliente.id}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center mt-10"> No Hay Clientes Aún</p>
            )}
        </>
    )
}

export default index
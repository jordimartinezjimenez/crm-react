import { useLoaderData } from "react-router-dom"
import Cliente from "../components/Cliente"

export function loader() {
    const clientes = [
        {
            id: 1,
            nombre: 'Juan',
            telefono: 111111111,
            email: 'juan@juan.com',
            empresa: 'Codigo con Juan'
        },
        {
            id: 2,
            nombre: 'Karen',
            telefono: 222222222,
            email: 'karen@juan.com',
            empresa: 'Codigo con Juan'
        },
        {
            id: 3,
            nombre: 'Josue',
            telefono: 333333333,
            email: 'josue@juan.com',
            empresa: 'Codigo con Juan'
        },
        {
            id: 4,
            nombre: 'Miguel',
            telefono: 444444444,
            email: 'miguel@juan.com',
            empresa: 'Codigo con Juan'
        },
        {
            id: 5,
            nombre: 'Pedro',
            telefono: 555555555,
            email: 'pedro@juan.com',
            empresa: 'Codigo con Juan'
        }
    ]
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
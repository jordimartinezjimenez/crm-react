import { useNavigate } from 'react-router-dom'
import { Form, redirect } from 'react-router-dom'
import { eliminarCliente } from "../data/clientes"

export async function action({ params }) {
    eliminarCliente(params.clienteId)
    return redirect('/')
}

const Cliente = ({ cliente }) => {

    const navigate = useNavigate()
    const { id, nombre, telefono, email, empresa } = cliente

    return (
        <tr className="border-b">
            <td className="p-3 text-center space-y-1">
                <p className="text-2xl text-gray-800">{nombre}</p>
                <p>{empresa}</p>
            </td>
            <td className="p-3 text-center">
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                <p className="text-gray-600"><span className="text-gray-800 font-bold">Telefono: </span>{telefono}</p>
            </td>
            <td className="p-3">
                <div className='flex  justify-center items-center gap-3'>
                    <button type="button" className="text-teal-600 hover:text-teal-700 uppercase font-bold text-xs" onClick={() => navigate(`/clientes/${id}/editar`)}>Editar</button>
                    <Form
                        method='post'
                        action={`/clientes/${id}/eliminar`}
                        onSubmit={(e) => { !confirm('¿Deseas eliminar este registro?') && e.preventDefault() }}
                    >
                        <button type="submit" className="text-red-600 hover:text-red-700 uppercase font-bold text-xs">Eliminar</button>
                    </Form>
                </div>
            </td>
        </tr>
    )
}

export default Cliente
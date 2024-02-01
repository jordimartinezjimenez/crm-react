const Cliente = ({ cliente }) => {

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
            <td className="p-3 flex gap-3 justify-center">
                <button type="button" className="text-teal-600 hover:text-teal-700 uppercase font-bold text-xs">Editar</button>
                <button type="button" className="text-red-600 hover:text-red-700 uppercase font-bold text-xs">Eliminar</button>
            </td>
        </tr>
    )
}

export default Cliente
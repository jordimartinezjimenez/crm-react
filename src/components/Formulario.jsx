const Formulario = ({ cliente }) => {

    return (
        <>
            <div className="mb-4">
                <label htmlFor="nombre" className="text-gray-800">Nombre:</label>
                <input type="text" name="nombre" id="nombre" placeholder="Nombre del Cliente" defaultValue={cliente?.nombre} className="mt-2 block w-full p-3 bg-gray-50" />
            </div>
            <div className="mb-4">
                <label htmlFor="empresa" className="text-gray-800">Empresa:</label>
                <input type="text" name="empresa" id="empresa" placeholder="Empresa del Cliente" defaultValue={cliente?.empresa} className="mt-2 block w-full p-3 bg-gray-50" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="text-gray-800">Email:</label>
                <input type="email" name="email" id="email" placeholder="Email del Cliente" defaultValue={cliente?.email} className="mt-2 block w-full p-3 bg-gray-50" />
            </div>
            <div className="mb-4">
                <label htmlFor="telefono" className="text-gray-800">Telefono:</label>
                <input type="tel" name="telefono" id="telefono" placeholder="Telefono del Cliente" defaultValue={cliente?.telefono} className="mt-2 block w-full p-3 bg-gray-50" />
            </div>
            <div className="mb-4">
                <label htmlFor="notas" className="text-gray-800">Notas:</label>
                <textarea as="textarea" type="text" name="notas" id="notas" placeholder="Notas del Cliente" defaultValue={cliente?.notas} className="mt-2 block w-full p-3 bg-gray-50 align-self" />
            </div>
        </>
    )
}

export default Formulario
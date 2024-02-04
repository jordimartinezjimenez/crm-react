import { useNavigate, Form, useActionData } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function action({ request }) {
    const formData = await request.formData()

    // console.log(formData.get('nombre'))
    // console.log(...formData)
    const datos = Object.fromEntries(formData)

    const email = formData.get('email')

    // Validación
    const errores = []
    if (Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios')
    }

    let regexEmail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if (email.length > 0 && !regexEmail.test(email)) {
        errores.push('El Email no es válido')
    }

    // Retornar datos si hay errores
    if (Object.keys(errores).length) {
        return errores
    }

    return []
}

const NuevoCliente = () => {

    const errores = useActionData()
    const navigate = useNavigate()

    return (
        <>
            <h1 className="font-black text-4xl">Nuevo Cliente</h1>
            <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>

            <div className="flex justify-end">
                <button
                    className="bg-teal-800 text-white px-3 py-1 font-bold uppercase rounded-sm"
                    onClick={() => navigate(-1)}>Volver</button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form method="post" noValidate>
                    <Formulario />
                    <input type="submit" className="mt-5 w-full bg-teal-800 p-3 uppercase font-bold text-white text-lg" value="Registrar cliente" />
                </Form>
            </div>
        </>
    );
}

export default NuevoCliente;
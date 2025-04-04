import { FunctionalComponent } from "preact/src/index.d.ts";


const Form:FunctionalComponent = () => {
    return (
        <div>
            <form method="GET" action="/">
                <input type="text" name="phone" placeholder="Telefono" required/>
                <button type="submit"> Enviar telefono</button>
            </form>
        </div>
    )
}

export default Form;
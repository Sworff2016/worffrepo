import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="columna contacto">
                <h2>Complete el siguiente formulario</h2>
                <form action=" " method=" " className="formulario">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name='nombre' />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name='email' />
                    </p>
                    <p>
                        <label>Teléfono</label>
                        <input type="text" name='telefono' />
                    </p>
                    <p>
                        <label for>Comentario</label>
                        <textarea name="mensaje"></textarea>
                    </p>
                    <p className="centrar"><input type="submit" value="Enviar" /></p>
                </form>
            </div>
            <div className="columna datos">
                <h2>Otras vias de contacto</h2>
                <p>Tambien para contactarse con nosotros usando los siguientes medios:</p>
                <ul>
                    <li>Teléfono: 4578-7894</li>
                    <li>Email: contacto@transportesX.com.ar</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Skype:</li>
                </ul>
            </div>
        </main>
    );
}
export default ContactoPage;
/* import Button from 'react-bootstrap/Button'; */
import '../App.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const ButtonTickets = () => {

        const showSwal = () => {
            withReactContent(Swal).fire({
                title:
                    <div className='ticket__popup'>
                        <p className='ticket__prices'>
                            Valor Entrada: $5.000 <br />
                            Valor Rental: $25.000 {"(Réplica, Chaleco, Máscara, Balines)"}
                        </p>
                        <p className='ticket__details'>
                            Datos Transferencia:<br />
                            Nombre: Carlos Ortiz<br />
                            Rut: 11436632-3<br />
                            Banco: Scotiabank<br />
                            Tipo Cuenta: Corriente<br />
                            Número: 988549622<br />
                        </p><br />
                        <i className='ticket__info'>Enviar comprobante por correo {'(losmaitenesairsoft@gmail.com)'} o al Whatsapp {'(+56932665359)'} indicando detalle de la compra.</i>
                    </div>
            })
        }

        return (
            <div className="button__container">
                <button /* variant="info" size="lg" */ className='button__tickets' onClick={showSwal}>Compra tus entradas aquí</button>
            </div>
        )
}

    export default ButtonTickets
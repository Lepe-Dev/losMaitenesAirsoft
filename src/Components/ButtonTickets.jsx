import Button from 'react-bootstrap/Button';
import '../App.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const ButtonTickets = () => {

        const showSwal = () => {
            withReactContent(Swal).fire({
                title: <i className='button__tickets__font__size'>here goes the tickets info here goes the tickets info here goes the tickets info here goes the tickets info here goes the tickets info here goes the tickets info here goes the tickets info here goes the tickets info here goes the tickets info here goes the tickets info here goes the tickets info here goes the tickets info here goes the tickets info here goes the tickets info here goes the tickets info here goes the tickets info</i>,

            })
        }

        return (
            <div className="button__container">
                <Button variant="info" size="lg" className='button__tickets' onClick={showSwal}>Comprar entradas</Button>
            </div>
        )
}

    export default ButtonTickets
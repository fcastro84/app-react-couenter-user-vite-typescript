
import { useForm } from "../hooks/useForm"
import { FormData } from "../interfaces/form-data-interface"



export default function Formulario2() {

    const { formulario, handleChange, city, zip } = useForm<Partial<FormData>>({
        city: '',
        zip: ''
    });


    // const [formulario, setFormulario] = useState({
    //     email: '',
    //     nombre: ''
    // });

    // const handleChange = ( { target }: ChangeEvent<HTMLInputElement> ) => {
    //     const { name, value } = target;

    //     setFormulario({
    //         ...formulario,
    //         [ name ]: value
    //     });
    // }


  return (
    <form autoComplete="off">
        <div className="mb-3">
            <label className="form-label">City:</label>
            <input type="text" 
                   className="form-control"
                   name="city" 
                   value={city}
                   onChange={ handleChange }
                />
        </div>
        <div className="mb-3">
            <label className="form-label">Zip:</label>
            <input type="text" 
                   className="form-control"
                   name="zip"
                   value={zip}
                   onChange={ handleChange }
                />
        </div>
      
      <pre>
        {
            JSON.stringify(formulario)
        }
      </pre>
    </form>
  )
}

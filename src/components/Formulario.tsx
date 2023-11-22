
import { useForm } from "../hooks/useForm"
import { FormData } from "../interfaces/form-data-interface"



export default function Formulario() {

    const { formulario, handleChange, email, nombre, edad } = useForm<Partial<FormData>>({
        email: '',
        nombre: '',
        edad: 0 
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
            <label className="form-label">Email:</label>
            <input type="email" 
                   className="form-control"
                   name="email" 
                   value={email}
                   onChange={ handleChange }
                />
        </div>
        <div className="mb-3">
            <label className="form-label">Name:</label>
            <input type="text" 
                   className="form-control"
                   name="nombre"
                   value={nombre}
                   onChange={ handleChange }
                />
        </div>

        <div className="mb-3">
            <label className="form-label">Age:</label>
            <input type="number" 
                   className="form-control"
                   name="edad"
                   value={edad}
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

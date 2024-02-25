import { useState } from "react"
import ButtonSubmit from "./ButtonSubmit";

function MyForm() {
    //model do form
    const [formularioRegistro, setFormularioRegistroState] = useState({
        nome:'',
        age: '',
        email: '',

    });

    //aqui são passados os valores do input de acordo com o nome que damos a ele
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormularioRegistroState(prevState => ({
          ...prevState,
          [name]: value,
        }));
    };
    
    //validação formulário// não precisa do model como argumento
    const isFormularioValido = () => {
        if (formularioRegistro.nome != null && formularioRegistro.age >= 18){   
            return true;
            
        }else {
            return false;
        }
     
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formularioRegistro);
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="nome"
                id="name" value={formularioRegistro.nome}
                onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="age">Idade:</label>
                <input type="number" name="age"
                id="age" value={formularioRegistro.age}
                onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">E-mail:</label>
                <input type="text" name="email"
                id="email" value={formularioRegistro.email}
                onChange={handleChange}/>
            </div>
            <div>
                {isFormularioValido() && <ButtonSubmit label={"conclude"}/>}
            </div>
        </form>
    )
}

export default MyForm;
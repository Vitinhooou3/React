import { useState } from "react"

function MyForm() {
    //model do form
    const [formularioRegistro, setFormularioRegistroState] = useState({
        nome:'',
        age: 0,
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
        event.preventDefault(); // Prevents form from causing a page refresh
        console.log(formularioRegistro); // Logs the current state to the console
        // You can add more logic here to handle form submission, like sending data to an API
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
                {isFormularioValido() && <button type="submit"> concluir</button>}
            </div>
        </form>
    )
}

export default MyForm;
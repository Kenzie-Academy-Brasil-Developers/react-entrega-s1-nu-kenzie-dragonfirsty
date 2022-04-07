import { useState } from "react";
import './index.css';

export function FormCadastro({ListTransactions,setListTransactions}){

    const [description, setDescription] = useState("");
    const [value, setValue] = useState(1);
    const [type, setType] = useState("entrada");

    
    function createData(event){

        event.preventDefault()

        let list = {description,value,type}

        setListTransactions([...ListTransactions,list])

    }

    return(

        <form onSubmit={createData} className="Form--cadastro">
            <label className="Form--label--Descrição">
                <p className="Form--Descrição--nome">Descrição</p>
                <input 
                name="descrição"
                placeholder="adicione uma descrição"
                value={description}
                onChange={(event) => setDescription(event.target.value)} 
                />
                <p className="Form--Descrição--Ex">Ex: Compra de roupas</p>
            </label>    
            
            <div className="Form--cadastro--labels">
                <label className="Form--label--valor">
                    Valor
                    <input
                    name="valor" 
                    placeholder="1   &#36;" 
                    type="text"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    />
                </label>
            
                <label className="Form--label--tipoDeValor">Tipo de valor
                    <select name="TipoValor" onChange={(event) => setType(event.target.value)} value={type}>
                        <option value="entrada" >entrada</option>
                        <option value="saida">saida</option> 
                    </select>
                </label>       
            </div>

            <button type="submit" className="Form--cadastro--button">Inserir valor</button>    

        </form>


    )






}

import './App.css';
import { useState } from "react";
import logo from "./components/images/Nu_Kenzie.svg";
import {FormCadastro} from "./components/Form";
import List from "./components/List";
import {TotalValue} from "./components/TotalValue"


function App() {

  const [ListTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }
  ])

      return (
        <div className="App">
          <main className="App-main">
            
            <header className='App--header'>
              
              <img src={logo}/>

              <button className='App--header__btn'>Inicio</button>

            </header>
            
            <section className='App--main--content'>

              <section className='App--main--cadastro'>  
                <div className='App--content--cadastro'>
                <FormCadastro ListTransactions={ListTransactions} setListTransactions={setListTransactions} />
                </div>

                <div className='App--content--totalValue'>
                  <TotalValue ListTransactions={ListTransactions}/>
                </div>
              </section>
              <div className='App--content--List'>
                <List ListTransactions={ListTransactions}/>
              </div>

            </section>
            
          </main>

        </div>
      );


  }


  


export default App;

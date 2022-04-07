import { Card } from "../Card";
import './index.css';

export default function List({ ListTransactions }) {

    
  return (
    <ul className="List--ul">
      <li className="List--header">
        <h3 className="List-Resume">Resumo financeiro</h3>
        <div className="List-buttons">
          <button>Todos</button>
          <button>Entradas</button>
          <button>Despesas</button>
        </div>
      </li>
      {ListTransactions.map((transaction,index) => (
        <Card transaction={transaction} key={index} />
        
      ))}
    </ul>
  );
}

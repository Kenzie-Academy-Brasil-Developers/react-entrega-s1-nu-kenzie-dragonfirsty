import './index.css';

export function Card({transaction}){

    function borderColor(){

        if(transaction.type === 'entrada'){

            return "Card--li--entrada"

        }
        else{

            return "Card--li--saida"

        }

    }

    
    return(

        <li className={borderColor()}>
            <div className='Card--li--div'>
                <h3 className="Card--description">{transaction.description}</h3>
                <p className="Card--value">{transaction.value}</p>
                <button className="Card--btn">X</button>
            </div>
            <p className="Card--type">{transaction.type}</p>
        </li>

    )

}
import './index.css';

export function TotalValue({ListTransactions}){

    let totalPrice = ListTransactions.reduce(
    
        (previousValue, currentValue) => previousValue + currentValue.value,0
                
    )

    return(

        <div className='totalPrice'>
            <div className='totalPrice--totalValue'>
                <h3 className='totalPrice--textValue'>Valor total:</h3>
                <h3 className='totalPrice--value'>{totalPrice}</h3>
            </div>
            <p className='totalPrice--ex'>O valor se refere ao saldo</p>
        </div>
    )

}
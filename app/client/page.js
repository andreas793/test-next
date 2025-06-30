'use client'
import {useState} from "react";

const ClientPage = () => {

    const [count, setCount] = useState(0);

    console.log('client components');

    return(
        <div>
            <h1 className='text-7xl'>Client Page</h1>
            <button onClick={()=> {setCount(count - 1)}}>Уменьшить</button>
            <h2>{count}</h2>
            <button onClick={()=>{setCount(count+1)}}>Увеличить</button>
        </div>
    )
}

export default ClientPage;
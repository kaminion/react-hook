import React, {useEffect, useState} from 'react';

const UseEffection = ()=>
{
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);


    const sayHello = ()=>console.log('Hello')

    //component will update / did mount 역할도 수행
    useEffect(()=>{
        sayHello();
    }, [number]);

    return (
        <div>
            <h1>useEffection</h1>
            <button onClick={()=>setNumber(number + 1)} value={number}>{number}</button>
            <button onClick={()=>setAnumber(aNumber + 1)} value={aNumber}>{aNumber}</button>
        </div>
    )
}

export default UseEffection;
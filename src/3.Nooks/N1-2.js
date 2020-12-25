import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// hook과 class component의 차이점을 알아보자

const useInput = (initialValue, validator) => 
{
    const [value, setValue] = useState(initialValue);
    const onChange = event =>
    {
        const {target : {value}} = event;
        let willUpdate = true;
        
        // validator의 타입이 function 일 경우
        if(typeof validator === "function"){
            willUpdate = validator(value);
        }

        if(willUpdate){
            setValue(value);
        }

    }
    return {value, onChange};    
}

const UseInputComp = ()=>
{
    const maxLen = value => value.length <= 10 ;
    const name = useInput("Mr.", maxLen);

    return(
        <div className="App">
            <h1>Hello</h1>
            {/* value={name.value}  속성값 가능 */}
            <input placeholder="Name" {...name} />
        </div>
    )
}

export default UseInputComp;
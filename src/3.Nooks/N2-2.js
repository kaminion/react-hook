import React, {useState, useEffect, useRef} from 'react';

// useClick
const useClick = (onClick)=> {
    const element = useRef();
    useEffect(()=>{
        //component didupdate, did mount 
        if(element.current){
            element.current.addEventListener('click', onClick);
        }
        // useEffect willUnMount, 마운트 되었을 때 실행 X
        return () => {
            if(element.current){
                element.current.removeEventListener('click', onClick);
            }
        }
    }, []); // 마운드 될 때 한번만 실행할 것

    if(typeof onClick !== "function") return ;
    
    return element;
}


const UseClickComp = ()=> 
{
    // useRef는 component 선택할 수 있는 방법, === document.getElementByID()
    // const input = useRef();
    // setTimeout(()=>input.current?.focus(), 5000)
    
    const sayHello = ()=>console.log('say Hello')
    const title = useClick(sayHello)

    return (
        <div>
            <h1 ref={title}>hi</h1>
            {/** 모든 컴포넌트가 ref prop을 갖고있음 element는 current에 담김 */}
            {/* <input ref={input} placeholder="la" /> */}
        </div>
    )
}

export default UseClickComp;
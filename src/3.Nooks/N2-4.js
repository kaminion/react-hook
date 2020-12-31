import React, {useEffect} from 'react';

// 탭을 벗어날 때 실행되는 function

const useBeforeLeave = (onBefore)=>
{
    useEffect(()=>{
        document.addEventListener('mouseleave', handle);
        return () => document.removeEventListener('mouseleave', handle);
    }, []);

    if(typeof onBefore !== "function"){
        return;
    }


    const handle = (event) =>
    {
        const { clientY } = event;
        if(clientY <= 0) onBefore(); // 마우스가 탭쪽으로(위) 향했을때만
    }


}

const UsePageLeaveComp = ()=>
{
    const begForLife = () => console.log("please dont leave");

    useBeforeLeave(begForLife);


    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
}


export default UsePageLeaveComp;
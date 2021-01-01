import React, {useEffect, useRef, useState} from 'react';

// useFadeIn

const useFadeIn = (duration = 1, delay = 0)=>
{
    const element = useRef();
    useEffect(() => {
        if(element.current){
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1; 
        }
    }, []);
    if(typeof duration !== "number" || typeof delay !== "number") return;

    return {ref: element, style:{opacity : 0}};
};

// useNetwork navigator가 online이나 offline인걸 알수있음
// js의 navigator 객체를 말함. 웹에서 사용가능 연결된 경우 onLine으로 boolean 반환 
const useNetwork = onChange =>
{
    const [status, setStatus] = useState(navigator.onLine);

    const handleChange = ()=>{
        if(typeof onChange === "function"){
            onChange(navigator.onLine)
        }
        setStatus(navigator.onLine);
    }

    useEffect(()=>
    {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange); 
        }
    }, []);

    return status;
}

const UseFadeInComp = ()=>
{
    const fadeInH1 = useFadeIn(1, 2);
    const fadeInP = useFadeIn(5, 10);

    const handleNetworkChange = (online) =>
    {
        console.log(online ? "Online" : "Offline");
    }
    const onLine = useNetwork(handleNetworkChange);

    return (
        <div>
            <h1 {...fadeInH1}>{onLine ? "OnLine": "Offline"}</h1>
            <p {...fadeInP}>lorem ipsum lalalala</p>
        </div>
    );
}

export default UseFadeInComp;
import React, { useEffect, useRef, useState } from 'react';

const useScroll = () =>
{
    const [state, setState] = useState({
        x:0,
        y:0
    });

    const onScroll = () =>
    {
        setState({y:window.scrollY, x:window.scrollX})
    }

    useEffect(()=>{
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return state;
}

const useFullscreen = (callback) =>
{
    const element = useRef();
    const triggerFull = () => {
        if(element.current){
            // 전체화면으로 만들어줌 (앨범처럼)
            element.current.requestFullscreen();
            if(callback && typeof callback === "function") callback(true);

            // 웹호환성
            /** 일반적인 웹브라우저 (구글 크롬)
             * if(element.current.requestFullscreen) 
             *  element.current.requestFullscreen();
            // 모질라(파이어폭스)
            else if(element.current.mozRequestFullScreen)
            element.current.mozRequestFullScreen()
            // 웹킷(오페라)
            else if(element.current.webkitRequestFullScreen)
            element.current.webkitRequestFullScreen()
            // 마이크로 소프트(엣지 등..)
            else if(element.current.msRequestFullScreen)
            element.current.msRequestFullScreen()
             */

        }
    }
    const exitFull = () =>
    {
        document.exitFullscreen();
        if(callback && typeof callback === "function") callback(false);

            // 웹호환성
            /** 일반적인 웹브라우저 (구글 크롬)
             * if(document.exitFullscreen) 
             *  document.exitFullscreen();
            // 모질라(파이어폭스)
            else if(document.mozCancelFullScreen)
            document.mozCancelFullScreen();
            // 웹킷(오페라)
            else if(document.webkitExitFullScreen)
            document.webkitExitFullScreen();
            // 마이크로 소프트(엣지 등..)
            else if(document.msExitFullscreen)
            document.msExitFullScreen();
             */
    }

    return {element, triggerFull, exitFull};
}

const UseScrollComp = ()=>
{
    const {y} = useScroll();
    const onFulls = (isFull) => {
        console.log(isFull ? "isFull!" : "isSmall");
    }
    const {element, triggerFull, exitFull} = useFullscreen(onFulls);

    return (
        <div style={{height:"1000vh",}}>
            <div ref={element}>
                <h1 style={{position:"fixed", 
                color:y > 100 ? "red" : "blue"}}>Hello</h1>
                <img ref={element} src="http://akns-images.eonline.com/eol_images/Entire_Site/2014127/rs_634x1024-140227123248-634.Chris-Pine-Shirtless-New-Zealand-Set.jl.022714.jpg?fit=inside%7C900:auto&output-quality=100"/>
                <button onClick={exitFull}>exit fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make fullscreen</button>
        </div>
    );
}

export default UseScrollComp;
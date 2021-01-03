import React from 'react';

// 훅이 아니어도 사용가능
// 함수형 프로그래밍
const useNotification = (title, options) =>
{
    if(!("Notification" in window)){
        return;
    }

    const fireNotification = ()=>
    {
        if(Notification.permission !== 'granted'){
            // notification.requestPermssion은 비동기임
            Notification.requestPermission().then(permission =>{
                if(permission === "granted") new Notification(title, options);
                else return;
            });
        }else{
            new Notification(title, options);
        }
    };

    return fireNotification;
}

const UseNotiComp = ()=>
{
    const triggerNotif = useNotification("Hello Noti!", {body:"message body"});

    return (
        <div>
            <button onClick={triggerNotif}>Notification</button>
            Hello!
        </div>
    )
}


export default UseNotiComp;
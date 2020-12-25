import React, {useEffect, useState} from 'react';

// useTitle

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector('title');
        htmlTitle.innerText = title;
    };
    // title 변경 시 마다 바뀜, dependency 안걸어주면 함수 호출시에도 useEffect 호출안함.
    useEffect(updateTitle, [title]);

    return setTitle;
};

const UseTitleComp = ()=>
{
    const titleUpdater = useTitle('Loading...');
    setTimeout(()=>titleUpdater("Home"), 5000);

    return (
        <div>
            <div>Hi</div>
        </div>
    )
}



export default UseTitleComp
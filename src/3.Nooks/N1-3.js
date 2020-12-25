import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const content = [
    {
        tab:"Section 1",
        content: "I'm the Content of Section 1"
    },
    {
        tab:"Section 2",
        content: "I'm the Content of Section 2"
    }
];

const useTabs = (initialTab, allTabs) => {

    // hook은 항상 scope 최상단에 위치해야한다.
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    if(!allTabs || !Array.isArray(allTabs)) return;

    
    return {
        currentItem : allTabs[currentIndex],
        changeItem : setCurrentIndex
    };
}

const UseTabsComp = ()=>
{
    const {currentItem, changeItem} = useTabs(0, content);

    return(
        <div className="App">
            {content.map((section, index) => 
                <button onClick={()=>changeItem(index)}>{section.tab}</button>    
            )}
            <div>
                {currentItem.content}
            </div>
        </div>
    )
}

export default UseTabsComp;
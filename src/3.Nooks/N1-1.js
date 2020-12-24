import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// hook과 class component의 차이점을 알아보자

const Introduction = ()=>
{
    const [item, setItem] = useState(1);
    const incrementItem = ()=>setItem(item + 1);
    const decrementItem = ()=>setItem(item - 1);

    return(
        <div className="App">
            <h1>Hello CodeSandbox {item}</h1>
            <h2>Start editing to see some magic happen!</h2>
            <button onClick={incrementItem}>Increment</button>
            <button onClick={decrementItem}>Decrement</button>
        </div>
    )
}

class IntroductionUgly extends React.Component
{
    state = {
        item : 1
    }

    render(){
        const { item } = this.state;


        return (
            <div className="App">
                <h1>Hello CodeSandbox {item}</h1>
                <h2>Start editing to see some magic happen!</h2>
                <button onClick={this.incrementItem}>Increment</button>
                <button onClick={this.decrementItem}>Decrement</button>
            </div>
        );
    }

    incrementItem = ()=> {
        this.setState(state => {
            return {
                item:state.item + 1
            }
        })
    }

    decrementItem = ()=> {
        this.setState(state => {
            return {
                item:state.item - 1
            }
        })
    }

}

export default IntroductionUgly
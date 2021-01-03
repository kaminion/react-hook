import React from 'react';
import ReactDOM from 'react-dom';

const UseAxiosComp = ()=>
{
    const {
        loading,
        data,
        error,
        refetch
    } = useAxios({url:"https://yts.am/api/v2/list_movies.json"});

    console.log(`Loading : ${loading},\n
    Data: ${data},\n
    Error: ${error}\n
    ${Date.now()}
    `);

    return (
        <div>
            <h1>{data && data.status}</h1>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>refetch</button>
        </div>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <UseAxiosComp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

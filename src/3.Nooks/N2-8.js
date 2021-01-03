import React from 'react';
import useAxios from './useComp/useAxios';

const useAxiosComp = ()=>
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


export default useAxiosComp;
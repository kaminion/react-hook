import React from 'react';

import {useConfirm} from './useComp/useConfirm';

//usePreventLeave
const usePreventLeave = (onLeaving) =>
{
    const listener = (event) =>
    {
        event.preventDefault();
        event.returnValue = ""; // 이것도 넣어줘야함
    } 

    // beforeunload 윈도우 닫힐 때 감지
    const enablePrevent = ()=> window.addEventListener('beforeunload', listener);
    const disablePrevent = ()=> window.removeEventListener('beforeunload', listener);

    return {enablePrevent, disablePrevent};
}


const UseConfirmComp = () => {
    // const deleteWorld = () => console.log('Deleting the world');
    // const abort = () => console.log("Aborted");
    // const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);

    const { enablePrevent, disablePrevent } = usePreventLeave();

    return (
        <div>
            {/* <button onClick={confirmDelete}>Delete World</button> */}
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
        </div>
    );
}

export default UseConfirmComp
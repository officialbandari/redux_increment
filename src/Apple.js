import React from 'react';
import { useSelector } from 'react-redux'
//import numberReducer from './reducers/index'

const Apple = () => {
    const myState = useSelector((state) => state.numberReducer)
    return (
        <div>
            {myState}
        </div>
    );
};

export default Apple;
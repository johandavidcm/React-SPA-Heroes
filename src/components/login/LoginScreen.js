import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
    const { dispatch }  = useContext(AuthContext);

    const handleClick = () => {
        
        dispatch({
            type: types.login,
            payload: {
                name: 'Johan David'
            }
        });
        const lastPath = localStorage.getItem('lastPath') || '/';
        history.replace(lastPath);
        // {
        //     name: 'Johan David'
        // }
        
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={ handleClick }
            >
                Login
            </button>
        </div>
    )
}

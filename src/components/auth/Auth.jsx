import React, {useContext, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useForm} from "../../hooks/useForm";
import {ActionsContext} from "../../contexts/ActionsContext";

const loginState = {
    username: '',
    password: ''
};

const registerState = {
    username: '',
    password1: '',
    password2: ''
};

function Auth() {
    const actions = useContext(ActionsContext);
    const loc = useLocation();
    const initialState = loc.pathname === '/login' ? loginState : registerState;
    const [values, handleChange, handleSubmit, handleReset, setValues] = useForm(initialState, doSubmit);

    useEffect(() => {
        if (loc.pathname === '/login') {
            setValues(loginState);
        } else {
            setValues(registerState);
        }
    }, [loc.pathname]);

    function doSubmit() {
        if (loc.pathname === '/login') {
            actions.auth.login(values);
        } else {
            actions.auth.register(values);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {Object.keys(values).map((key, i) => (
                    <div key={i} className={'nes-field'}>
                        <label
                            htmlFor={key}>{key === 'username' ? 'Username' : key === 'password2' ? 'Confirm Password' : 'Password'}</label>
                        <input type={key === 'username' ? 'text' : 'password'} id={key} name={key} value={values[key]}
                               onChange={handleChange}/>
                    </div>
                ))}
                <button type="button" onClick={handleReset} className="nes-btn">Reset</button>
                <button type="submit" className="nes-btn is-primary">{loc.pathname === '/login' ? 'Login' : 'Register'}</button>
            </form>
        </div>
    )
}

export default Auth

import React, {useContext, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useForm} from "../../hooks/useForm";
import {ActionsContext} from "../../contexts/ActionsContext";
import AuthForm from "./AuthForm";

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
        loc.pathname === '/login' ? actions.auth.login(values) : actions.auth.register(values);
    }

    return (
        <AuthForm handleChange={handleChange} values={values} handleReset={handleReset} handleSubmit={handleSubmit}
                  pathname={loc.pathname}/>
    )
}

export default Auth

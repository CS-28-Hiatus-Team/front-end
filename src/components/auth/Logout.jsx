import React, {useContext, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {ActionsContext} from "../../contexts/ActionsContext";

function Logout() {
    const actions = useContext(ActionsContext);

    useEffect(() => {
        actions.auth.logout();
    }, [])

    return <Redirect to='/login' />
}

export default Logout
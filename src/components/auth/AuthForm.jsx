import React from 'react';

function AuthForm({values, handleSubmit, handleChange, handleReset, pathname}) {
    return (
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
            <button type="submit" className="nes-btn is-primary">{pathname === '/login' ? 'Login' : 'Register'}</button>
        </form>
    )
}


export default AuthForm

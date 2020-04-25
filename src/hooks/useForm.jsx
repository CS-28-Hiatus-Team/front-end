import {useState} from 'react';

export const useForm = (initialState, cb) => {
    const [values, setValues] = useState(initialState);

    const handleChange = ({target: {name, value}}) => setValues({...values, [name]: value});

    const handleSubmit = e => {
        e.preventDefault();
        cb();
    };

    const handleReset = () => setValues(initialState);

    return [values, handleChange, handleSubmit, handleReset, setValues]
};

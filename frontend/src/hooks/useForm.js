import {useState} from "react";

const useForm = () => {
    const [errors, setErrors] = useState(null);
    const [message, setMessage] = useState('');

    const renderFieldError = (field) => {
        if(errors && errors.hasOwnProperty(field)) {
            return errors
        }
    }
}
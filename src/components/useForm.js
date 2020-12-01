import { useState } from "react";
import moment from "moment";

const useForm = (initialFieldValues) => {

    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
        const {name, value} = e.target
        console.log(`${name} : ${value}`)
        setValues({
            ...values,
            [name]:value

        })
    }

    const handleInputChangeDate = (name, date) => {
        date = moment(date).format("YYYY-MM-DD")
        setValues({
            ...values,
            [name]:date

        })
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        handleInputChangeDate
    };
}

export default useForm;
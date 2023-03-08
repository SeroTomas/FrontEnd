
const onlyText = /^[^0-9]*$/
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const regexPassword = /^(?!.*\s)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
const mayus = /^[A-Z]+$/


export const validations = (property, value, errors, setErrors) =>{
    
    if(property == "name"){
        if(!onlyText.test(value)){
            return setErrors({...errors, [property]: "No se permiten numeros"})
        }
        if(value.length < 3 || value.length > 30){
            return setErrors({...errors, [property]: "Debe agregar un nombre entre 3 y 30 caracteres"})
        }
        return setErrors({...errors, [property]: ""})
        // if(!name){errors.name = "Ingrese un nombre"}
    }
    if(property == "email"){
        return(
            !regexEmail.test(value) ?
                setErrors({...errors, [property]: "Ingrese un email valido"}) :
                setErrors({...errors, [property]: ""})
        )
        // if(email.length < 0){errors.email = "Ingrese un email"}
    }
    if(property == "nickName"){
        return(
            (value.length < 3 || value.length > 10) ?
                setErrors({...errors, [property]: "Debe agregar un nombre de entre tres y diez caracteres" }) :
                setErrors({...errors, [property]: "" })
        )
    }
    if(property == "password"){
        return(
            (!regexPassword.test(value)) ?
                setErrors({...errors, [property]: "password debe estar entre 8 y 20 caracteres, sin espacios al menos una mayúscula y un número" }) :
                setErrors({...errors, [property]: "" })
            // if(password.length <= 0 || password.length < 8){errors.password = "debe contener minimo ocho catacteres"}
        )
    }
}


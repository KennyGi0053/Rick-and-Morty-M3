

const validation = (userData) => {
    const errors = {};
    if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(userData.email)){
        errors.email = 'El Email ingresado no es válido';
    }
    if (!userData.email){
        errors.email = 'Debe ingresar un email';
    }
    if (userData.email.length > 35){
        errors.email = 'El email no debe superar 35 caracteres'
    }
    if (!/.*\d+.*/.test(userData.password)){
    errors.password = 'La contraseña debe tener al menos un número'
    }
    if (userData.password.length < 6 || userData.password.length >10){
        errors.password = 'La contraseña debe tener entre 6 a 10 caracteres';
    }


    return errors;
}




export default validation;
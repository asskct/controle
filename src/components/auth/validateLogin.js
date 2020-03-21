export default function validate(values) {
    let errors = {}
    if(!values.email) {
        errors.email = "Email é requerido"        
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email é inválido."
    }

    if(!values.password) {
        errors.password = "A senha é requerida."
    } else if(values.password.length < 8) {
        errors.password = "A senha deve ter no mínico 8 caracteres."
    }

    return errors
}
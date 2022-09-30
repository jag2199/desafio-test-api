export default class UsersDTO {
    constructor({ nombre, pwd }) {
        this.nombre = nombre
        this.contraseña = pwd
    }
}

export function activarUsersDTO(param) {
    if (Array.isArray(param)) {
        return param.map(
            (item) => new UsersDTO(item.nombre, item.pwd)
        )
    } else if (param) {
        return new UsersDTO(param.nombre, param.pwd)
    }
}
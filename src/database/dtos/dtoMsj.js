export default class MsjDTO {
    constructor({ text, author, fecha }) {
        this.texto = text
        this.autor = author
        this.fecha = fecha
    }
}

export function activarMsjDTO(param) {
    if (Array.isArray(param)) {
        return param.map(
            (item) => new MsjDTO(item.text, item.author, item.fecha)
        )
    } else if (param) {
        return new MsjDTO(param.text, param.author, param.fecha)
    }
}
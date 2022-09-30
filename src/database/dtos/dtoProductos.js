export default class ProductoDTO {
    constructor({ title, price, fecha }) {
        this.titulo = title
        this.precio = price
        this.fecha = fecha
    }
}

export function activarProductoDTO(param) {
    if (Array.isArray(param)) {
        return param.map(
            (item) => new ProductoDTO(item.title, item.price, item.fecha)
        )
    } else if (param) {
        return new ProductoDTO(param.title, param.price, param.fecha)
    }
}
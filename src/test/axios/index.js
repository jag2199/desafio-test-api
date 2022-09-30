import axios from "axios"

const getProducts = async () => {
    try {
        const products = await axios.get("http://localhost:8080/")
        console.log(products.data)
    } catch (error) {
        console.log(error)
    }
}

const postProduct = async (data) => {
    try {
        await axios.post("http://localhost:8080/", {
            titulo: data.titulo,
            precio: data.precio,
            descripcion: data.descripcion,
            codigo: data.codigo,
        })
    } catch (error) {
        console.log(error)
    }
}
const updateProduct = async (id, data) => {
    try {
        await axios.post(`http://localhost:8080/update?id=${id}`, {
            titulo: data.titulo,
            precio: data.precio,
            descripcion: data.descripcion,
            codigo: data.codigo,
        })
    } catch (error) {
        console.log(error)
    }
}
const deleteProduct = async (id) => {
    try {
        const product = await axios.get(
            `http://localhost:8080/delete?id=${id}`
        )
        console.log(product.data)
    } catch (error) {
        console.log(error)
    }
}
export { getProducts, postProduct, updateProduct, deleteProduct }
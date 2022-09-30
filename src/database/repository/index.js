getFecha = () => {
    const date = new Date()
    const fecha = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} a las ${date.getHours()}:${date.getMinutes()}hs`
    return fecha
}

export async function all(coleccion) {
    return await coleccion.find()
}

export async function findById(coleccion, id) {
    return await coleccion.findOne({ id: id })
}

export async function findByName(coleccion, name) {
    return await coleccion.findOne({ nombre: name })
}

export async function create(coleccion, obj) {
    const all = await coleccion.find()
    obj["id"] = all.length ? ((all[all.length - 1].id) + 1) : 1
    obj.timestamp = getFecha()
    const newObj = await coleccion.create(obj)
    return newObj
}

export async function updateById(coleccion, id, obj) {
    obj.timestamp = this.getFecha()
    const newObj = await coleccion.findByIdAndUpdate(id, obj)
    return newObj
}

export async function deleteById(coleccion, id) {
    return await coleccion.findByIdAndDelete(id)
}

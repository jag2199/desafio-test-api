import getRandom from "../../utils/getRandom"

const getApi = (req, res) => {
    const cant = req.query.cant || 100000000
    const nums = getRandom(cant)
    res.send(nums)
}

export default getApi
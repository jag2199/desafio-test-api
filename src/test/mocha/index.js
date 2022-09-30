import chai from "chai"
const assert = chai.assert
const expect = chai.expect
import request from "supertest"

describe("Funcionalidad de los metodos de productos", () => {
    it("comprobar metodo GET /", async () => {
        let response = await request.get("/")
        expect(response.status).to.eql(200)
    })

    it("comprobar metodo POST /", async () => {
        let product = {
            titulo: "prodPost",
            precio: "667",
            descripcion: "prueba supertest",
            codigo: "cod999",
        }
        let response = await request.post("/").send(product)
        expect(response.status).to.eql(302)
    })
    it("comprobar metodo PUT /update", async () => {
        let product = {
            titulo: "prodUpdate",
            precio: "337",
            descripcion: "prueba supertest",
            codigo: "cod229",
        }
        let idProduct = "63221cf29473c5801cd4bc24";
        let response = await request
            .post(`/update?id=${idProduct}`)
            .send(product);
        expect(response.status).to.eql(302)
    })

    it("comprobar metodo DELETE /delete", async () => {

        let idProduct = '63221cf29473c5801cd4bc24'
        let response = await request.get(`/delete?id=${idProduct}`)
        expect(response.status).to.eql(200)
    })

})

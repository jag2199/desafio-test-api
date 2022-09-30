import passport from "passport"
import "../passport/local.js"

const getLogin = (req, res) => {
    res.render("login")
}

const postLogin = () => passport.authenticate(("login"), {
    failureRedirect: "/errorLogin",
    successRedirect: "/"
})

export { getLogin, postLogin }
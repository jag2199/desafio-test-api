import passport from "passport"
import "../passport/local.js"

const getRegister = (req, res) => {
    res.render("register")
}

const postRegister = () => passport.authenticate(("register"), {
    failureRedirect: "/errorRegister",
    successRedirect: "/login"
})

export { getRegister, postRegister }


export default function isAuth(req, res, next) {
    if (req.isAuthenticated()) {
        logger.info(`Sesión iniciada por ${req.user.nombre} correctamente`)
        next()
    }
    else {
        logger.error(`Error: nombre o contraseña incorrecto`)
        res.redirect("/login")
    }
}
const jwt = require("jsonwebtoken");
const db = require("../helpers/dbConfig");

const key = process.env.SECRET || "gigapetBuild";

module.exports = {
    authenticate,
    generateToken
};

function generateToken(user) {
    const payload = {
        id: user.id,
        username: user.username
    };

    const options = {
        expiresIn: "100d"
    };

    return jwt.sign(payload, key, options);
}

function authenticate(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, key, async (err, decoded) => {
            if (err) {
                return res.status(401).json(err);
            } else {
                req.decoded = decoded;
                console.log(decoded)
                req.user = await db("parents").where({ id: req.decoded.id });
                next();
            }
        });
    } else {
        return res.status(501).json({
            error: "No token provided, must be set on the Authorization Header"
        });
    }
}

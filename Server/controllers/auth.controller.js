const db = require("../models");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const nodemailer = require('nodemailer');
const config = require("../config/auth.config");
const User = db.user;
const Role = db.roles;


const Op = db.Sequelize.Op;


async function someAsyncOperation(rules) {
    let roleId;

    if (rules) {
        if (rules[0] === "admin") {
            roleId = 2;
        } else if (rules[0] === "superadmin") {
            roleId = 3;
        } else if (rules[0] === "modarator") {
            roleId = 4;
        } else {
            roleId = 1;
        }
    }
    return roleId
}


exports.singUp = async (req, res) => {
    const body = req.body;
    try {
        const data = await User.findOne({
            where: {
                [Op.or]: [
                    { username: req.body.username },
                    { email: req.body.email },
                ],
            },
        })

        if (data) {
            return res.status(204).send({
                success: true,
                message: "User Already exist",
            })
        }

        let roleId = 1;

        if (req.body.rules) {
            roleId = await someAsyncOperation(req.body.rules)
        }

        await User.create({
            username: req.body.username,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            roleId: roleId,
            image_url: req.body.image_url
        });



        res.status(200).send({
            success: true,
            message: "Registration Successfull",
        })

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }

}


exports.singIn = async (req, res) => {
    try {
        const data = await User.findOne({
            where: {
                [Op.or]: [
                    { username: req.body.username },
                    { email: req.body.username },
                ],
            },
        })

        if (!data) {
            return res.status(404).send({ success: false, message: "User Not found." });
        }



        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            data.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }


        console.log(config.secret)

        const token = jwt.sign({ id: data.id }, config.secret, {
            algorithm: 'HS256',
            allowInsecureKeySizes: true,
            expiresIn: 86400, // 24 hours
        });


        // const token = jwt.sign({ userId: user.id, email: user.email }, 'your-secret-key', {
        //         expiresIn: '1h', // Set the expiration time for the token
        // });    


        res.status(200).send({
            success: true,
            message: "Login Successfully",
            id: req.userId,
            accessToken: token,
        })

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }

}


exports.getUsers = async (req, res) => {
    try {
        const data = await User.findOne({
            where: {
                id: req.userId
            }
        })

        res.status(200).send({
            success: true,
            items: data,
        })

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }

}


// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_email_password',
    },
});

// Function to send reset password email
const sendResetPasswordEmail = async (email, resetToken) => {
    const mailOptions = {
        from: 'your_email@gmail.com',
        to: email,
        subject: 'Reset Password',
        text: `Click the following link to reset your password: http://yourwebsite.com/reset-password?token=${resetToken}`,
    };

    await transporter.sendMail(mailOptions);
};


exports.forgetPassword = async (req, res) => {
    const body = req.body;
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email,
            },
        })

        if (!user) {
            return res.status(204).send({
                success: false,
                message: "User Not found",
            })
        }

        // Generate a reset token
        const resetToken = jwt.sign({ id: user.id }, config.secret, {
            algorithm: 'HS256',
            allowInsecureKeySizes: true,
            expiresIn: 180, // 24 hours
        });

        const link = `http://localhost:8050/reset/password/${user.id}/${resetToken}`;

        res.status(200).send({
            success: true,
            link: link,
        })

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }

}


exports.resetPassword = async (req, res) => {
    try {
        const token = req.params.resetToken;
        if (!token) {
            return res.status(401).json({ message: 'Token not provided' });
        }

        jwt.verify(token, config.secret, async (err, decoded) => {

            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }

            const user = await User.findByPk(decoded.id);

            res.render("ResetPassword", { email: user.email })
        });


    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

exports.FinulResetPassword = async (req, res) => {
    try {
        const token = req.params.resetToken;
        console.log(req.body.password);

        if (!token) {
            return res.status(401).json({ message: 'Token not provided' });
        }

        jwt.verify(token, config.secret, async (err, decoded) => {

            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }

            const user = await User.findByPk(decoded.id);

            const values = {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                username: user.username,
                email: user.email,
                password: bcrypt.hashSync(req.body.password, 8),
                roleId: user.roleId,
                image_url: user.image_url
            }

            await User.update(values, {
                where: {
                    id: user.id
                }
            })

            res.status(200).send({
                success: true,
                message: "Password Change Successfull",
            })
        });


    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

import Users from "../models/user";
import bcrypt from 'bcrypt'

const authController = {
    register: async (req, res) => {
        try {
            const { fullname, username, email, password } = req.body

            const passwordHash = await bcrypt.hash(password, 12)

            let newUser = new Users({
                fullname: fullname,
                username: username,
                email: email,
                password: passwordHash
            })
            res.cookie('refreshtoken', refreshToken, {
                httpOnly: true,
                path: '/api/refresh_token',
                maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
            })
            await newUser.save((err, user) => {
                if (err) {
                    return res.status(500).send(err)
                }

                return res.status(200).send({
                    message: 'Register Success!',
                    accessToken,
                    user: {
                        ...newUser._doc,
                        password: ''
                    }
                })
            })

            
        } catch (err) {
            return res.status(500).json({message: err.message})
        }
    } 

}


export default authController
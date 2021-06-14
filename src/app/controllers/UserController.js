import User from '../models/User';

class UserController {
    async store(req, res) {
        const UserExists = await User.findOne({
            where: { email: req.body.email },
        });

        if (UserExists) {
            return res.status(400).json({ error: 'Usuário ja existe!' });
        }

        const { id, name, email } = await User.create(req.body); // retorna apenas o essencial
        return res.json({
            id,
            name,
            email,
        });
    }
}

export default new UserController();

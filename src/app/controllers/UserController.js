import * as Yup from 'yup';
import User from '../models/User';

class UserController {
    async store(req, res) {
        const schema = Yup.object().shape({
            // for validation
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Falha ao validar!' });
        }

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

    async update(req, res) {
        const { email, oldPassword } = req.body;

        const user = await User.findByPk(req.userId); // busca pelo user baseado no ID (pk)

        if (String(user.email) !== email) {
            const UserExists = await User.findOne({
                where: { email },
            });

            if (UserExists) {
                return res.status(400).json({ error: 'Usuário ja existe!' });
            }
        }
        if (oldPassword && !(await user.checkPassword(oldPassword))) {
            // só faz o update se ele passar a senha antiga
            return res.status(401).json({ error: 'Senha incorreta' });
        }

        const { id, name } = await user.update(req.body);
        return res.json({
            id,
            name,
            email,
        });
    }
}

export default new UserController();

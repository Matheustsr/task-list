import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import User from '../models/User';

class SessionController {
    async store(req, res) {
        return res.json({ ok: true });
    }
}
export default new SessionController();

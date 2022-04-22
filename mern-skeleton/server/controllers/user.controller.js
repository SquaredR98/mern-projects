import User from '../models/user.model';
import extend from 'lodash';
import errorHandler from '../helpers/dbErrorHandler';

const create = (req, res, next) => {
    const user = new User(req.body);
    try {
        await user.save();
        return res.status(200).json({
            message: "Successfully signed up..."
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
};

const list = (req, res) => {};

const userById = (req, res, next, id) => {};

const read = (req, res) => {};

const update = (req, res, next) => {};

const remove = (req, res, next) => {};

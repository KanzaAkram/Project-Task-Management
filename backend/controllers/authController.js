import User from '../models/User.js';

const signup = async (req, res) => {
    const userData = req.body;
    try {
        const newUser = await User.create(userData);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const login = async (req, res) => {
    // Implement login functionality here
};

const logout = async (req, res) => {
    // Implement logout functionality here
};

export {
    signup,
    login,
    logout,
};

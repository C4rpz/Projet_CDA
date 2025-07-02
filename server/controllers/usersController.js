const prisma = require("../db/prisma.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || 'votre_secret_ultra_long';

const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.users.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma.users.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const user = await prisma.users.findUnique({
            where: {
                email,
            },
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createUser = async (req, res) => {
    const { firstName, lastName, email, phone_number, city } = req.body;
    let { password } = req.body;
    try {
        password = await hashPassword(password);
        const newUser = await prisma.users.create({
            data: {
                firstName,
                lastName,
                email,
                phone_number,
                city,
                password,
            },
        });
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone_number, city, password } = req.body;
    try {
        const updatedUser = await prisma.users.update({
            where: {
                id: parseInt(id),
            },
            data: {
                name,
                email,
                phone_number,
                city,
                password,
            },
        });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await prisma.users.delete({
            where: {
                id: parseInt(id),
            },
        });
        res.json(deletedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const checkUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.users.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid password" });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email, is_admin: user.is_admin },
            SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            token,
            user: { id: user.id, email: user.email, is_admin: user.is_admin }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    checkUser,
    getUserByEmail,
};

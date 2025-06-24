const prisma = require("../db/prisma.js");

const getAllCarts = async (req, res) => {
	try {
		const carts = await prisma.carts.findMany();
		res.json(carts);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const getCartById = async (req, res) => {
	const { id } = req.params;
	try {
		const cart = await prisma.carts.findUnique({
			where: {
				id: parseInt(id),
			},
		});
		res.json(cart);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const createCart = async (req, res) => {
	const { user_id, quantity, total_price } = req.body;
	try {
		const newCart = await prisma.carts.create({
			data: {
				user_id,
				quantity,
				total_price,
			},
		});
		res.json(newCart);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const deleteCart = async (req, res) => {
	const { id } = req.params;
	try {
		const deletedCart = await prisma.carts.delete({
			where: {
				id: parseInt(id),
			},
		});
		res.json(deletedCart);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = { getAllCarts, getCartById, createCart, deleteCart };

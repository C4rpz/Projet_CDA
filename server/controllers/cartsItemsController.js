const prisma = require("../db/prisma.js");

const getAllCartsItems = async (req, res) => {
	try {
		const cartsItems = await prisma.cartsItems.findMany();
		res.json(cartsItems);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const getCartItemsById = async (req, res) => {
	const { id } = req.params;
	try {
		const cartItems = await prisma.cartsItems.findUnique({
			where: {
				id: parseInt(id),
			},
		});
		res.json(cartItems);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const createCartItems = async (req, res) => {
	const { cart_id, animal_id } = req.body;
	try {
		const newCartItems = await prisma.cartsItems.create({
			data: {
				cart_id,
				animal_id,
			},
		});
		res.json(newCartItems);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const deleteCartItems = async (req, res) => {
	const { id } = req.params;
	try {
		const deletedCartItems = await prisma.cartsItems.delete({
			where: {
				id: parseInt(id),
			},
		});
		res.json(deletedCartItems);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	getAllCartsItems,
	getCartItemsById,
	createCartItems,
	deleteCartItems,
};

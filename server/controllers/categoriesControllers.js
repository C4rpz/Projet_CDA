const prisma = require("../db/prisma.js");

const getAllCategories = async (req, res) => {
	try {
		const categories = await prisma.categories.findMany();
		res.json(categories);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const getCategoryById = async (req, res) => {
	const { id } = req.params;
	try {
		const category = await prisma.categories.findUnique({
			where: {
				id: parseInt(id),
			},
		});
		res.json(category);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const createCategory = async (req, res) => {
	const { name } = req.body;
	try {
		const newAnimal = await prisma.categories.create({
			data: {
				name,
			},
		});
		res.json(newAnimal);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = { createCategory, getAllCategories, getCategoryById };

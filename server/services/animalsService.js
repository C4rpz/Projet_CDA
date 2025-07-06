import prisma from "../db/prisma.js";

export const getAllAnimals = async (req, res) => {
	try {
		const animals = await prisma.animals.findMany();
		res.json(animals);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getAnimalById = async (req, res) => {
	const animalId = Number(req.params.id);
	if (isNaN(animalId)) return res.status(400).json({ error: "Invalid id" });

	try {
		const animal = await prisma.animals.findUnique({
			where: { id: animalId },
		});
		if (!animal) return res.status(404).json({ error: "Animal not found" });
		res.json(animal);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const createAnimal = async (req, res) => {
	const { name, user_id, category_id, age, description, breed, price } =
		req.body;
	try {
		const newAnimal = await prisma.animals.create({
			data: {
				name,
				user: { connect: { id: user_id } },
				category: { connect: { id: category_id } },
				age,
				description,
				breed,
				price,
			},
		});
		res.status(201).json(newAnimal);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const updateAnimal = async (req, res) => {
	const animalId = Number(req.params.id);
	if (isNaN(animalId)) return res.status(400).json({ error: "Invalid id" });

	const { name, user_id, category_id, age, description, breed, price } =
		req.body;

	try {
		const updatedAnimal = await prisma.animals.update({
			where: { id: animalId },
			data: {
				name,
				age,
				description,
				breed,
				price,
				user: user_id ? { connect: { id: user_id } } : undefined,
				category: category_id
					? { connect: { id: category_id } }
					: undefined,
			},
		});
		res.json(updatedAnimal);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const deleteAnimal = async (req, res) => {
	const animalId = Number(req.params.id);
	if (isNaN(animalId)) return res.status(400).json({ error: "Invalid id" });

	try {
		const deletedAnimal = await prisma.animals.delete({
			where: { id: animalId },
		});
		res.json(deletedAnimal);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const fourLast = async (req, res) => {
	const limit = parseInt(req.query.limit) || 4;
	const order = req.query.order === "asc" ? "asc" : "desc";

	try {
		const animals = await prisma.animals.findMany({
			take: limit,
			orderBy: { created_at: order },
		});
		res.json(animals);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

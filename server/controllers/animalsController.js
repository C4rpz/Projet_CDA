const prisma = require("../db/prisma.js");

const getAllAnimals = async (req, res) => {
  try {
    const animals = await prisma.animals.findMany();
    res.json(animals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAnimalById = async (req, res) => {
  const { id } = req.params;
  try {
    const animal = await prisma.animals.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    res.json(animal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAnimal = async (req, res) => {
	const { name, user_id, category_id, age, description, breed, price } =
		req.body;
	try {
		const newAnimal = await prisma.animals.create({
			data: {
				name,
				user: {
					connect: { id: user_id }, // Lien avec l'utilisateur existant via son ID
				},
				category: {
					connect: { id: category_id }, // Lien avec l'utilisateur existant via son ID
				},
				age,
				description,
				breed,
				price,
			},
		});
		res.json(newAnimal);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const updateAnimal = async (req, res) => {
  const { id } = req.params;
  const { name, owner_id, category_id, age, description, breed, price } =
    req.body;
  try {
    const updatedAnimal = await prisma.animals.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        owner_id,
        category_id,
        age,
        description,
        breed,
        price,
      },
    });
    res.json(updatedAnimal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAnimal = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAnimal = await prisma.animals.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json(deletedAnimal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const fourLast = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10; // Défaut à 10 si non fourni
  const order = req.query.order === "desc" ? "desc" : "asc"; // Par défaut ascendant

  const animals = await prisma.animals.findMany({
    take: limit,
    orderBy: {
      created_at: order, // Trie par la date de création
    },
  });

  res.json(animals);
};

module.exports = {
  getAllAnimals,
  getAnimalById,
  createAnimal,
  updateAnimal,
  deleteAnimal,
  fourLast,
};

import prisma from "../db/prisma.js";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await prisma.categories.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCategoryById = async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid id" });

  try {
    const category = await prisma.categories.findUnique({
      where: { id },
    });
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = await prisma.categories.create({
      data: { name },
    });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

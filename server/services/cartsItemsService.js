import prisma from "../db/prisma.js";

export const getAllCartsItems = async (req, res) => {
  try {
    const cartsItems = await prisma.cartsItems.findMany();
    res.json(cartsItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCartItemsById = async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid id" });

  try {
    const cartItems = await prisma.cartsItems.findUnique({
      where: { id },
    });
    if (!cartItems) return res.status(404).json({ error: "Cart items not found" });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCartItems = async (req, res) => {
  const { cart_id, animal_id } = req.body;
  try {
    const newCartItems = await prisma.cartsItems.create({
      data: {
        cart_id,
        animal_id,
      },
    });
    res.status(201).json(newCartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCartItems = async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid id" });

  try {
    const deletedCartItems = await prisma.cartsItems.delete({
      where: { id },
    });
    res.json(deletedCartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

import prisma from "../db/prisma.js";

export const getAllCarts = async (req, res) => {
  try {
    const carts = await prisma.carts.findMany();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCartById = async (req, res) => {
  const cartId = Number(req.params.id);
  if (isNaN(cartId)) return res.status(400).json({ error: "Invalid id" });

  try {
    const cart = await prisma.carts.findUnique({
      where: { id: cartId },
    });
    if (!cart) return res.status(404).json({ error: "Cart not found" });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCart = async (req, res) => {
  const { user_id, quantity, total_price } = req.body;
  try {
    const newCart = await prisma.carts.create({
      data: {
        user_id,
        quantity,
        total_price,
      },
    });
    res.status(201).json(newCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCart = async (req, res) => {
  const cartId = Number(req.params.id);
  if (isNaN(cartId)) return res.status(400).json({ error: "Invalid id" });

  try {
    const deletedCart = await prisma.carts.delete({
      where: { id: cartId },
    });
    res.json(deletedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

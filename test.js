import bcrypt from "bcrypt";

const hashPassword = async (password) => {
	return await bcrypt.hash(password, 10);
};

const checkPassword = async (password, hashedPassword) => {
	return await bcrypt.compare(password, hashedPassword);
};

const test = async () => {
	const password = "test";
	const hashedPassword = await hashPassword(password);

	const isMatch = await checkPassword(password, hashedPassword);
	console.log(isMatch);
};

test();

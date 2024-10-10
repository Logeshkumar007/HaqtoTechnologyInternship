import usermodel from './usermodel.js';

export const getuser = async (req, res) => {
  try {
    const users = await usermodel.getUser();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
};
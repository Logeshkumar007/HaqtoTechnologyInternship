import con from '../config/mysqlconnection.js';

const UserModel = {
  getUser: async () => {
    try {
      const [rows] = await con.promise().query("SELECT * FROM user");
      return rows;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
};

export default UserModel;

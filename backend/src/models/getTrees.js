import db from '../db/index';

export const getTrees = async (userId) => {
  const findUserById = async () => {
    try {
      let result = await db.query(
        'SELECT trees FROM user_data WHERE user_id = $1',
        [userId]
      );
      if (!result.rows[0]) {
        result = await createUser();
        return result;
      }
      return result.rows[0];
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const createUser = async () => {
    try {
      const result = await db.query(
        'INSERT INTO user_data (user_id, trees) VALUES ($1, $2) RETURNING trees',
        [userId, '[]']
      );
      return result.rows[0];
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  try {
    const userData = await findUserById();

    if (userData.trees) {
      return userData.trees;
    } else {
      throw new Error('Something went wrong when getting the data.');
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

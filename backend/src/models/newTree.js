import db from '../db/index';

export const updateTrees = async (userId, newTree) => {
  const familyTrees = JSON.stringify(newTree);
  const insertNewTree = async () => {
    try {
      let result = await db.query(
        'UPDATE user_data SET trees = $1 WHERE user_id = $2 RETURNING trees',
        [familyTrees, userId]
      );
      console.log(familyTrees);
      return result.rows[0];
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  try {
    const userData = await insertNewTree();

    if (!userData.trees) {
      throw new Error('Noe gikk galt...');
    }
    return userData.trees;
  } catch (err) {
    console.log(err);
    return err;
  }
};

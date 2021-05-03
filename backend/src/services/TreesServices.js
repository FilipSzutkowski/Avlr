import { getTrees } from '../models/getTrees';
import { updateTrees } from '../models/newTree';

// let parent1 = {
//   id: 1,
//   regNr: 'Parent 1',
//   gender: 'male',
//   parents: [],
//   siblings: [],
//   spouses: [],
//   children: [{ id: 3, type: 'blood' }],
// };
// let parent2 = {
//   id: 2,
//   regNr: 'Parent 2',
//   gender: 'female',
//   parents: [],
//   siblings: [],
//   spouses: [],
//   children: [{ id: 3, type: 'blood' }],
// };
// let child = {
//   id: 3,
//   regNr: 'Parent 3',
//   gender: 'male',
//   parents: [
//     { id: 1, type: 'blood' },
//     { id: 2, type: 'blood' },
//   ],
//   siblings: [],
//   spouses: [],
//   children: [],
// };
// let familyTrees = [
//   { id: 0, name: 'noe', race: 'XDDD', treeData: [parent1, parent2, child] },
// ];

export default class TreesService {
  async GetTrees(userId) {
    const familyTrees = await getTrees(userId);
    return familyTrees;
  }
  async NewTree(userId, newTree) {
    const familyTrees = await getTrees(userId);
    const newFamilyTrees = [
      ...familyTrees,
      { id: familyTrees.length + 1, ...newTree, treeData: [] },
    ];
    const newTrees = await updateTrees(userId, newFamilyTrees);

    return newTrees;
  }
  async NewIndividual(newIndividual, treeId, userId) {
    const familyTrees = await getTrees(userId);
    const oldTreeIndex = familyTrees.findIndex((tree) => tree.id == treeId);
    const oldTree = { ...familyTrees[oldTreeIndex] };
    const oldTreeTreeData = oldTree.treeData;
    let parents =
      newIndividual.parents.length > 0 ? newIndividual.parents : null;
    if (parents) {
      const parentsIndexes = parents.map((parent) => {
        return oldTreeTreeData.findIndex(
          (individual) => individual.id == parent.id
        );
      });

      parents = parentsIndexes;
    }
    familyTrees[oldTreeIndex] = {
      ...oldTree,
      treeData: [
        ...oldTreeTreeData,
        { id: parseInt(oldTreeTreeData.length + 1), ...newIndividual },
      ],
    };
    const newTrees = await updateTrees(userId, familyTrees);

    return newTrees;
  }
}

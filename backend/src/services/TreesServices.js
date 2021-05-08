import { getTrees } from '../models/getTrees';
import { updateTrees } from '../models/newTree';

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
    const newIndividualId = parseInt(oldTreeTreeData.length + 1);
    const parents =
      newIndividual.parents.length > 0 ? newIndividual.parents : null;
    if (parents) {
      const parentsIndexes = parents.map((parent) => {
        return oldTreeTreeData.findIndex(
          (individual) => individual.id == parent.id
        );
      });

      parentsIndexes.forEach((e, i) => {
        oldTreeTreeData[e].children = [
          ...oldTreeTreeData[e].children,
          { id: newIndividualId, type: 'blood' },
        ];

        if (i === 0) {
          oldTreeTreeData[e].spouses = [
            ...oldTreeTreeData[e].spouses,
            { ...parents[1] },
          ];
          return;
        }

        oldTreeTreeData[e].spouses = [
          ...oldTreeTreeData[e].spouses,
          { ...parents[0] },
        ];
      });
    }

    console.log(`parents: ${parents}`);
    familyTrees[oldTreeIndex] = {
      ...oldTree,
      treeData: [
        ...oldTreeTreeData,
        {
          id: newIndividualId,
          race: oldTree.race,
          ...newIndividual,
        },
      ],
    };
    const newTrees = await updateTrees(userId, familyTrees);

    return newTrees;
  }

  async DeleteTree(treeIndex, userId) {
    const familyTrees = await getTrees(userId);
    const filteredTrees = familyTrees.filter((tree, index) => {
      return index !== parseInt(treeIndex);
    });
    console.log(filteredTrees);
    const newTrees = await updateTrees(userId, filteredTrees);
    return newTrees;
  }

  async EditTree(familyTree, treeIndex, userId) {
    const familyTrees = await getTrees(userId);
    const oldTreeData = familyTrees[treeIndex].treeData;
    const newTree = { ...familyTree, treeData: oldTreeData };
    familyTrees[treeIndex] = newTree;

    const newTrees = await updateTrees(userId, familyTrees);
    return newTrees;
  }
}

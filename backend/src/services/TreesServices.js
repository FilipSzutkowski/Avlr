import { getTrees } from '../models/getTrees';
import { updateTrees } from '../models/newTree';

export default class TreesService {
  async GetTrees(userId) {
    const familyTrees = await getTrees(userId);
    return familyTrees;
  }
  async NewTree(userId, newTree) {
    const familyTrees = await getTrees(userId);
    const lastElementID = familyTrees[familyTrees.length - 1]?.id ?? 0;
    const newFamilyTrees = [
      ...familyTrees,
      { id: parseInt(lastElementID) + 1, ...newTree, treeData: [] },
    ];
    const newTrees = await updateTrees(userId, newFamilyTrees);

    return newTrees;
  }
  async NewIndividual(newIndividual, treeId, userId) {
    const familyTrees = await getTrees(userId);
    const oldTreeIndex = familyTrees.findIndex((tree) => tree.id == treeId);
    const oldTree = { ...familyTrees[oldTreeIndex] };
    let oldTreeTreeData = oldTree.treeData;
    const newIndividualId =
      parseInt(oldTreeTreeData[oldTreeTreeData.length - 1]?.id ?? 0) + 1;
    const parents =
      newIndividual.parents.length > 0 ? newIndividual.parents : null;
    if (parents) {
      oldTreeTreeData = this.insertBloodlineData(
        oldTreeTreeData,
        newIndividual,
        newIndividualId
      );
    }

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
    console.log(newIndividual);

    return newTrees;
  }

  async DeleteTree(treeIndex, userId) {
    const familyTrees = await getTrees(userId);
    const filteredTrees = familyTrees.filter((tree, index) => {
      return index !== parseInt(treeIndex);
    });
    const newTrees = await updateTrees(userId, filteredTrees);
    return newTrees;
  }

  async DeleteIndivid(treeIndex, individIndex, userId) {
    const familyTrees = await getTrees(userId);
    const treeData = familyTrees[treeIndex].treeData;
    const { id } = treeData[individIndex];
    const toDeleteID = parseInt(id);
    const treeDataWithoutIndivid = treeData.filter(
      (individ) => individ.id !== toDeleteID
    );

    const filteredTreeData = treeDataWithoutIndivid.map((individ) => {
      const filteredChildren = individ.children.filter(
        (child) => child.id !== toDeleteID
      );
      const filteredSpouses = individ.spouses.filter(
        (spouse) => spouse.id !== toDeleteID
      );
      const filteredParents = individ.parents.filter(
        (parent) => parent.id !== toDeleteID
      );

      return {
        ...individ,
        children: filteredChildren,
        spouses: filteredSpouses,
        parents: filteredParents,
      };
    });

    familyTrees[treeIndex].treeData = filteredTreeData;

    const newTrees = updateTrees(userId, familyTrees);
    return newTrees;
  }

  async EditTree(familyTree, treeIndex, userId) {
    const familyTrees = await getTrees(userId);
    const { id, treeData } = familyTrees[treeIndex];
    const newTreeData = treeData.map((individ) => {
      return { ...individ, race: familyTree.race };
    });

    const newTree = { id, ...familyTree, treeData: newTreeData };
    familyTrees[treeIndex] = newTree;
    const newTrees = await updateTrees(userId, familyTrees);
    return newTrees;
  }

  async EditIndividual(newIndividual, individIndex, treeIndex, userId) {
    const familyTrees = await getTrees(userId);
    const { id, parents, siblings, spouses, children, race } = familyTrees[
      treeIndex
    ].treeData[individIndex];
    const newIndividualToSave = {
      ...newIndividual,
      id: id,
      race,
      parents: parents,
      siblings: siblings,
      spouses: spouses,
      children: children,
    };
    familyTrees[treeIndex].treeData[individIndex] = newIndividualToSave;

    const newTrees = await updateTrees(userId, familyTrees);
    return newTrees;
  }

  insertBloodlineData(treeData, individual, individID) {
    const parents = individual.parents;
    const parentsIndexes = parents.map((parent) => {
      return treeData.findIndex((individual) => individual.id == parent.id);
    });

    parentsIndexes.forEach((e, i) => {
      treeData[e].children = [
        ...treeData[e].children,
        { id: individID, type: 'blood' },
      ];

      if (i === 0) {
        treeData[e].spouses = [
          ...treeData[e].spouses,
          { ...parents[1], type: 'divorced' },
        ];
        return;
      }

      treeData[e].spouses = [
        ...treeData[e].spouses,
        { ...parents[0], type: 'divorced' },
      ];
    });

    return treeData;
  }
}

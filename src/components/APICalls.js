const boilerPlate = async (objToPost, method, url) => {
  const config = {
    method: method,
    body: JSON.stringify(objToPost),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await fetch(url, config);
    const result = await res.json();
    if (!res.ok) {
      throw new Error(`kode: ${res.status}`);
    }
    return result;
  } catch (e) {
    return e;
  }
};

export const POSTnewFamilyTree = async (newFamilyTree) => {
  const result = await boilerPlate({ tree: newFamilyTree }, 'POST', '/newTree');
  return result;
};

export const POSTnewIndividual = async (newIndividual, treeId) => {
  const result = await boilerPlate(
    { individual: newIndividual, id: treeId },
    'POST',
    '/newIndividual'
  );

  return result;
};

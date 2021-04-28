const boilerPlate = async (objToPost, method, url, accessToken) => {
  try {
    const config =
      method !== 'GET'
        ? {
            method: method,
            body: JSON.stringify(objToPost),
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          }
        : {
            method: method,
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          };
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

export const POSTnewFamilyTree = async (newFamilyTree, accessToken) => {
  const result = await boilerPlate(
    { tree: newFamilyTree },
    'POST',
    '/newTree',
    accessToken
  );
  return result;
};

export const POSTnewIndividual = async (newIndividual, treeId, accessToken) => {
  const result = await boilerPlate(
    { individual: newIndividual, id: treeId },
    'POST',
    '/newIndividual',
    accessToken
  );
  return result;
};

export const GETtrees = async (accessToken) => {
  const result = await boilerPlate(null, 'GET', '/getFamilytrees', accessToken);
  return result;
};

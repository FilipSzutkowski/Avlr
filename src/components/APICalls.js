const boilerPlate = async (objToPost, method, url, accessToken, userID) => {
  try {
    const config =
      method !== 'GET'
        ? {
            method: method,
            body: JSON.stringify(objToPost),
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
              UserID: userID,
            },
          }
        : {
            method: method,
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
              UserID: userID,
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

export const POSTnewFamilyTree = async (newFamilyTree, accessToken, userID) => {
  const result = await boilerPlate(
    { tree: newFamilyTree },
    'POST',
    '/newTree',
    accessToken,
    userID
  );
  return result;
};

export const POSTnewIndividual = async (
  newIndividual,
  treeId,
  accessToken,
  userID
) => {
  const result = await boilerPlate(
    { individual: newIndividual, id: treeId },
    'POST',
    '/newIndividual',
    accessToken,
    userID
  );
  return result;
};

export const GETtrees = async (accessToken, userID) => {
  const result = await boilerPlate(
    null,
    'GET',
    '/getFamilytrees',
    accessToken,
    userID
  );
  return result;
};

export const DELETEtree = async (treeIndex, accessToken, userID) => {
  const result = await boilerPlate(
    { treeIndex: treeIndex },
    'DELETE',
    '/deleteTree',
    accessToken,
    userID
  );
  return result;
};

export const DELETEindividual = async (
  treeIndex,
  individIndex,
  accessToken,
  userID
) => {
  const result = await boilerPlate(
    {
      treeIndex: treeIndex,
      individIndex: individIndex,
    },
    'DELETE',
    '/deleteIndividual',
    accessToken,
    userID
  );

  return result;
};

export const EDITtree = async (
  newFamilyTree,
  treeIndex,
  accessToken,
  userID
) => {
  const result = await boilerPlate(
    { treeIndex: treeIndex, tree: newFamilyTree },
    'POST',
    '/editTree',
    accessToken,
    userID
  );
  return result;
};

export const EDITIndivid = async (
  newIndividual,
  individIndex,
  treeIndex,
  accessToken,
  userID
) => {
  const result = await boilerPlate(
    {
      treeIndex: treeIndex,
      editedIndividual: newIndividual,
      individIndex: individIndex,
    },
    'POST',
    '/editIndivid',
    accessToken,
    userID
  );
  return result;
};

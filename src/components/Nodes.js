const nodesTree = [
  {
    id: 'dyTpfj6sr',
    merke: '0612',
    kind: 'Dvergvedder',
    birthday: '12 Mai 2008',
    gender: 'male',
    spouses: [],
    siblings: [],
    parents: [],
    children: [
      {
        id: 'ahfR5lR2s',
        type: 'blood',
      },
      {
        id: 'aoF9dn5Ew',
        type: 'blood',
      },
    ],
  },
  {
    id: 'ahfR5lR2s',
    merke: '24.3.95',
    kind: 'Dvergvedder',
    birthday: '12 Mai 2009',
    gender: 'female',
    spouses: [],
    siblings: [],
    parents: [
      {
        id: 'dyTpfj6sr',
        type: 'blood',
      },
    ],
    children: [],
  },
  {
    id: 'aoF9dn5Ew',
    gender: 'male',
    merke: '01222',
    kind: 'Dvergvedder',
    birthday: '30 Mai 2009',
    spouses: [],
    siblings: [],
    parents: [
      {
        id: 'dyTpfj6sr',
        type: 'blood',
      },
    ],
    children: [],
  },
];

export default nodesTree;

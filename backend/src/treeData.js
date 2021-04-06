const nodesTree = [
  {
    id: 'HkqEDLvxE',
    earmark: '0612',
    regNr: '221112',
    gender: 'male',
    birthday: '05.05.2008',
    race: 'dvergvedder',
    color: 'viltgrå',
    parents: [
      {
        id: '011jVS4rb',
        type: 'blood',
      },
      {
        id: 'PXACjDxmR',
        type: 'blood',
      },
    ],
    siblings: [],
    spouses: [],
    children: [],
  },
  {
    id: '011jVS4rb',
    earmark: '0612',
    regNr: '221112',
    gender: 'male',
    birthday: '05.05.2008',
    race: 'dvergvedder',
    color: 'viltgrå',
    parents: [],
    siblings: [],
    spouses: [
      {
        id: 'PXACjDxmR',
        type: 'married',
      },
    ],
    children: [
      {
        id: 'HkqEDLvxE',
        type: 'blood',
      },
    ],
  },
  {
    id: 'PXACjDxmR',
    earmark: '0612',
    regNr: '221112',
    gender: 'male',
    birthday: '05.05.2008',
    race: 'dvergvedder',
    color: 'viltgrå',
    parents: [],
    siblings: [],
    spouses: [
      {
        id: '011jVS4rb',
        type: 'married',
      },
    ],
    children: [
      {
        id: 'HkqEDLvxE',
        type: 'blood',
      },
    ],
  },
];

export default nodesTree;

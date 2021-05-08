import { useState } from 'react';

export const useForm = (initialValue) => {
  const [formData, setFormData] = useState(initialValue);
  const [parents, setParents] = useState({
    mother: { id: '' },
    father: { id: '' },
  });
  const handleChange = (e) => {
    const target = e.target;
    const { value, name } = target;

    if (name === 'father' || name === 'mother') {
      let parentArray = [];
      let parent = {};
      if (name === 'mother') {
        parent = { id: parseInt(value), type: 'blood' };
        parentArray = [parent, parents.father];
        setParents({ ...parents, mother: parent });
      }

      if (name === 'father') {
        parent = { id: parseInt(value), type: 'blood' };
        parentArray = [parent, parents.mother];
        setParents({ ...parents, father: parent });
      }

      const filteredArray = parentArray.filter((parent) => parent.id !== '');

      setFormData({
        ...formData,
        parents: filteredArray,
      });
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return [formData, handleChange];
};

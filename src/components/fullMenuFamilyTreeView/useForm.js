import { useState } from 'react';

export const useForm = (initialValue) => {
  const [formData, setFormData] = useState(initialValue);
  const handleChange = (e) => {
    const target = e.target;
    const { value, name } = target;

    if (name === 'father' || name === 'mother') {
      setFormData({
        ...formData,
        parents: [...formData.parents, { id: parseInt(value), type: 'blood' }],
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

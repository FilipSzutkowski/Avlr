import { useState } from 'react';

export const useForm = (initialValue) => {
  const [formData, setFormData] = useState(initialValue);
  const handleChange = (e) => {
    const target = e.target;
    const { value, name } = target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return [formData, handleChange];
};

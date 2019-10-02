import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  let value = JSON.parse(localStorage.getItem(key));
  if (!value) value = initialValue;
  const [storedValue, setStoredValue] = useState(value);

  const setValue = value => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

export default useLocalStorage;



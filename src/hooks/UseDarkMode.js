import { useState } from 'react';
import useLocalStorage from "./UseLocalStorage";




export default function useDarkMode(key,initialValue) {

    const [storedValue, setValue] = useLocalStorage(key,initialValue);
    const [darkMode,setDarkMode] = useState(storedValue)
  
    const setDarkmodeUpdate = (value) => {
      setDarkMode(value);
      document.body.classList.toggle('dark-mode');
  
      setValue(value);
    }
  
  
    return [darkMode, setDarkmodeUpdate]
  }




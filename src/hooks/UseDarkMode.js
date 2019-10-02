import useLocalStorage from "./UseLocalStorage";




function useDarkMode(key,initialValue) {

    const [storedValue, setValue] = useLocalStorage(key,initialValue);
    const [darkMode,setDarkMode] = useState(storedValue)
  
    const setDarkmodeModified = (value) => {
      setDarkMode(value);
      document.body.classList.toggle('dark-mode');
  
      setValue(value);
    }
  
  
    return [darkMode, setDarkmodeModified]
  }



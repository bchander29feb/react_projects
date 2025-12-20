import { useEffect, useState } from "react"

const useDebounce =  (searchValue, delay) => {
const [debounceValue, setDebouncevalue] = useState(searchValue)

  useEffect(() => {
  
    const timer = setTimeout(() => {
        setDebouncevalue(searchValue)
    }, delay);

    return () => clearTimeout(timer)

  },[searchValue, delay])

  return debounceValue



}

export default useDebounce
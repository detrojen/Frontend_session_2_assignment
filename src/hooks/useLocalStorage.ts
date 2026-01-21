import { useEffect, useState } from "react"

function loadData<T>(key:string, defaultvalue:T){
    const data = localStorage.getItem(key)
    if (!data) {
        if (typeof(defaultvalue) == "string"){
            localStorage.setItem(key,defaultvalue)
        }
        else{
            localStorage.setItem(key, JSON.stringify(defaultvalue))
        }
        return defaultvalue
    }
    try{
        return JSON.parse(data)
    }catch{
        return data
    }
}
export function useLocalStorage<T>(key:string, defaultvalue:T) {
    const [data, setData] = useState<T>(loadData(key,defaultvalue))
    const updateLocalStorageData = (data:T) => {
        
        if (typeof(data) == "string"){
            localStorage.setItem(key,data)
        }
        else{
            localStorage.setItem(key, JSON.stringify(data))
        }
        
        setData(data)
    }
    
    return {data, updateLocalStorageData}
}
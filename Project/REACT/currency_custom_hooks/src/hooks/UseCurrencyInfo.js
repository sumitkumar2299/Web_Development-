import { useEffect,useState } from "react";


function UseCurrencyInfo(currency){
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(``)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
    },[currency])
    
    console.log(data);
    return data
}
export default UseCurrencyInfo;
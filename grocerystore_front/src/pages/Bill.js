import { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
export function Bill()
{
    const [amount,setAmount] = useState(0);
    function handleSubmit(e)
    {
        console.log("previous amount = "+amount);
        e.preventDefault();
        /*fetch("http://localhost:8080/walmart/calculate/"+amount)
        .then(res=>res.json())
        .then(result=>setAmount(result))
        .catch((error) => console.log(error));
        ;*/
        /*const ans = await axios.get("http://localhost:8080/walmart/calculate/"+amount);
        setAmount(ans);
        console.log("final amount is"+amount);*/
        const url = `http://localhost:8080/walmart/calculate/${amount}`;
        fetch(url).then((res)=>res.json()).then(result=>{setAmount(result);console.log("final = "+result)});
        
    }
    return(
        <div>
            <label for="amount">Enter number of units</label>
            <input id="amount" type="number" onChange={(e)=>setAmount(e.target.value)}></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
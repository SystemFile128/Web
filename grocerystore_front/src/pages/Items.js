import { useState } from "react";
import axios from "axios";
export function Items()
{
    const[Id,setId] = useState(0);
    const[itemDetails,setItemdetails] = useState();
            /*function handlesubmit(e)
            {
                e.preventDefault();
                fetch("http://localhost:8080/walmart/getbyID/"+Id).then(res=>res.json()).then(result=>setItemdetails(result));
            }*/
            async function handlesubmit(e)
            {
                e.preventDefault();
                const ans = await axios.get("http://localhost:8080/walmart/getbyID/"+Id);
                setItemdetails(ans.data);
                console.log(itemDetails);

            }
            
    return(
        <div>
            
            <label>Enter id of item </label>
            <input type="number" onChange={(e)=>setId(e.target.value)}/>
            <button onClick={handlesubmit}>Submit</button>
            {
                itemDetails && 
               <div>
                <p>{itemDetails.item_name}</p>
                <br/>
                <p>{itemDetails.item_type}</p>
               </div>
            }
        </div>);
        
}
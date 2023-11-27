import axios from "axios";
import { useEffect, useState } from "react";
export function AllItems()
{
    const [items,setitems] = useState([]);
    async function handleclick()
    {
        
            const ans= await axios.get("http://localhost:8080/walmart/getall");
            setitems(ans.data);
           console.log(items);
           
    }
    const list = items.map((item)=><li key={"item"}>{item.item_name}</li>)
    return(
        <div>
            <button onClick={handleclick}>Show</button>
            <ul>
                {list}
            </ul>
        </div>
    )
}
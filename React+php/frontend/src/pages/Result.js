import { useState } from "react"
import axios from 'axios';
export function Result()
{
    const [name,setName] = useState('');
    const [rollno,setRollno] = useState('');
    const [marks1,setMarks1] = useState(0);
    const [marks2,setMarks2] = useState(0);
    const [marks3,setMarks3] = useState(0);
    const [marks4,setMarks4] = useState(0);
    async function handleSubmit(e)
    {
        e.preventDefault();
        const url = "http://localhost/Web_bs/React+PHP/calculate.php";
        let fdata = new FormData();
        fdata.append('name',name);
        fdata.append('rollno',rollno);
        fdata.append('marks1',marks1);
        fdata.append('marks2',marks2);
        fdata.append('marks3',marks3);
        fdata.append('marks4',marks4);
        /*fetch(url,{
            method:"POST",
            body:fdata,
        });*/
        await axios.post(url,fdata).then(response=>alert(response.data)).catch(error=>alert(error));
    }
    return(
        <div>
            <div>
            <h1>Result</h1>
            <label for="name">Name </label>
            <input id="name" onChange={(e)=>setName(e.target.value)} type="text" /> <br />
            <label for="RollNo">Roll No  </label>
            <input id="RollNo" onChange={(e)=>setRollno(e.target.value)} type="number" />
            <br />
            <label for="marks1">Subject 1 </label>
            <input id="marks1" onChange={(e)=>setMarks1(e.target.value)} type="number" />
            <br />
            <label for="marks2">Subject 2 </label>
            <input id="marks2" onChange={(e)=>setMarks2(e.target.value)} type="number" />
            <br />
            <label for="marks3">Subject 3 </label>
            <input id="marks3" onChange={(e)=>setMarks3(e.target.value)} type="number" />
            <br />
            <label for="marks4">Subject 4 </label>
            <input id="marks4" onChange={(e)=>setMarks4(e.target.value)} type="number" />
            <br />
            <input type="submit" onClick={handleSubmit} ></input>

            </div>
            <a href="calculate.php">Result</a>
        </div>
    )
}
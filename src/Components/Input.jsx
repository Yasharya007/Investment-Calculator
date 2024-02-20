
import { inputdata } from "../util/data";
export default function Input({Labelheading,type,change}){
    function changevalue(e){
        inputdata[type]=e.target.value;
        change();
    }
    
    return(
        <p>
            <label>{Labelheading}</label>
            <input type="number" value={inputdata[type]} onChange={changevalue}/>
        </p>
    )
}
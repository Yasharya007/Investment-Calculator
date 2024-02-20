import Input from "./Input"
import { useState } from "react"
import { inputdata } from "../util/data";
import { calculateInvestmentResults } from "../util/investment";
import Output from "./Output";
export default function(){
    const[data,caldata]=useState([]);
    function inputchange(){
        caldata(()=>{
            const result=calculateInvestmentResults(inputdata);
            return result;
        });
    }
    console.log(data);
    return(
        <>
        <section id="user-input" >
            <div className="input-group">
                <Input Labelheading="INITIAL INVESTMENT" type="initialInvestment" change={inputchange}/>
                <Input Labelheading="ANNUAL INVESTMENT" type="annualInvestment" change={inputchange}/>
            </div>
            <div className="input-group">
                <Input Labelheading="EXPECTED RETURN" type="expectedReturn" change={inputchange}/>
                <Input Labelheading="DURATION" type="duration" change={inputchange}/>
            </div>
        </section>
        <Output data={data}/>
        </>
        
    )
}
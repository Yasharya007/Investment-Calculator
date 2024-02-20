import { inputdata } from "../util/data"
import { formatter } from "../util/investment"
export default function Output({data}){
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((obj,ind)=>(
                        <tr key={ind}>
                            <th>{obj.year}</th>
                            <th>{formatter.format(obj.valueEndOfYear)}</th>
                            <th>{formatter.format(obj.interest)}</th>
                            <th>{formatter.format(obj.totalInterest)}</th>
                            <th>{formatter.format(Number(obj.year*obj.annualInvestment)+Number(inputdata.initialInvestment))}</th>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
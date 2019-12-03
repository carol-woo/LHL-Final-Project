import React, { useState, useEffect } from "react"
import { BarChart, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import "../styles/monthlyview.css";


export default function MonthlyView(){

const [graphData1, setGraphData1] = useState([]);
const [graphData2, setGraphData2] = useState([]);

useEffect(() => {
  axios.get('api/monthly-view')
  .then((res) => {
    console.log('The front dailyTotal', res.data);
    console.log('The front average', res.data);
    const graphData1 = res.data.dailyTotalTransactions.map(t1 => ({
      "name": t1.day,
      "Average amount spent per day": t1.total,
      "Average daily budget": res.data.average
    }))
    const graphData2 = res.data.totalCategorySpentMonth.map(t2 => ({
      "name": t2.name,
      "total": t2.total,
      "monthlyBudget": t2.category_budget
    }))
    setGraphData1(graphData1)
    setGraphData2(graphData2)
    console.log("GRAPH DATA1", graphData1)
    // console.log("GRAPH DATA2", graphData2)
  })
}, [])



  return(
    <div className="monthly_view_main">
    <LineChart width={900} height={600} data={graphData1}
    margin={{ top: 5, right: 5, left: 20, bottom: 5 }} >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" padding={{ left: 30, right: 30 }}/>
    <YAxis type="number" domain={[0, 2500]}/>
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="Average daily budget" stroke="#3809e3" />
    <Line type="monotone" dataKey="Average amount spent per day" stroke="#d109e3" />
  </LineChart>

<BarChart width={900} height={600} data={graphData2}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis type="number" domain={[0, 12000]}/>
  <Tooltip />
  <Legend />
  <Bar dataKey="total" fill="#3809e3" />
  <Bar dataKey="monthlyBudget" fill="#d109e3" />
</BarChart>
</div>

  )
}


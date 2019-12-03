import React, { useState, useEffect } from "react"
import { BarChart, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios';


export default function MonthlyView(){

const [graphData1, setGraphData1] = useState([]);
const [graphData2, setGraphData2] = useState([]);

useEffect(() => {
  axios.get('api/monthly-View')
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
    console.log("GRAPH DATA2", graphData2)
  })
}, [])



  return(
    <div>
    <LineChart width={730} height={300} data={graphData1}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis type="number" domain={[0, 2500]}/>
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="Average daily budget" stroke="#8884d8" />
    <Line type="monotone" dataKey="Average amount spent per day" stroke="#82ca9d" />
  </LineChart>

<BarChart width={1400} height={250} data={graphData2}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="total" fill="#8884d8" />
  <Bar dataKey="monthlyBudget" fill="#82ca9d" />
</BarChart>
</div>

  )
}


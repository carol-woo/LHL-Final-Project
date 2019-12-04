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
    const graphData1 = res.data.dailyTotalTransactions.map(t1 => ({
      "name": t1.day,
      "Amount spent per day": t1.total,
      "Average daily budget": res.data.average
    }))
    const graphData2 = res.data.totalCategorySpentMonth.map(t2 => ({
      "name": t2.name,
      "total": t2.total,
      "monthlyBudget": t2.category_budget
    }))
    setGraphData1(graphData1)
    setGraphData2(graphData2)
  })
}, [])



  return(
    <div className="monthly_view_main">
      <div className="monthly_category_banner">
        <img className="piggybank" src={require("../styles/Images/graph.jpg")} />
        <h3 className="h3_monthly_category">sneak peek at your monthly progress? View the graphs to track your progress!</h3>
      </div>
      <LineChart width={900} height={500} data={graphData1}
      margin={{ top: 5, right: 5, left: 20, bottom: 5 }} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }}/>
        <YAxis type="number" domain={[0, 1000]}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Average daily budget" stroke="#F27EA1" />
        <Line type="monotone" dataKey="Amount spent per day" stroke="#61C7C9" />
      </LineChart>

      <BarChart width={900} height={600} data={graphData2}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 1500]}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#F27EA1" />
        <Bar dataKey="monthlyBudget" fill="#61C7C9" />
      </BarChart>
</div>

  )
}


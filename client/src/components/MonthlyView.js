import React, { useState, useEffect } from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios';


export default function MonthlyView(){

const [graphData, setGraphData] = useState([])

useEffect(() => {

  axios.get('api/monthly-view')
  .then((res) => {
    console.log('The front dailyTotal', res.data);
    console.log('The front average', res.data);
    // setGraphData(res.data)
    // setGraphData({
    //   "Day name": res.data.dailyTotalTransactions.rows[i].day,
    //   "Total transactions/Day": res.data.dailyTotalTransactions.rows
    // })
    const graphData = res.data.dailyTotalTransactions.map(t => ({
      "name": t.day,
      "Average daily budget": res.data.average,
      "Average amount spent per day": t.total
    }))
    setGraphData(graphData)
  })
}, [])


  return(

    <LineChart width={730} height={550} data={graphData}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="Average daily budget" stroke="#8884d8" />
    <Line type="monotone" dataKey="Average amount spent per day" stroke="#82ca9d" />
  </LineChart>

  )
}


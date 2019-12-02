import React, { useState, useEffect } from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios';

// export default function MonthlyView(){
//   return(
//     <div>
//       oh snap i am MonthlyView
//     </div>
//   )
// }

export default function MonthlyView(){

const [graphData, setGraphData] = useState([])

useEffect(() => {
  axios.get('api/monthly-view')
  .then((res) => {
    console.log('The front end', res.data)
    setGraphData(res.data)
  })
}, [])

// Change data to graph data after fixing routes
  const data = [
    {
      "name": "Day 1",
      "Average amount spent per day": 4000,
      "Average daily budget": 2000
    },
    {
      "name": "Day 2",
      "Average amount spent per day": 3000,
      "Average daily budget": 2000
    },
    {
      "name": "Day 3",
      "Average amount spent per day": 2000,
      "Average daily budget": 2000
    },
    {
      "name": "Day 3",
      "Average amount spent per day": 2780,
      "Average daily budget": 2000
    },
    {
      "name": "Day 4",
      "Average amount spent per day": 1890,
      "Average daily budget": 2000
    },
    {
      "name": "Day 5",
      "Average amount spent per day": 2390,
      "Average daily budget": 2000
    },
    {
      "name": "Day 6",
      "Average amount spent per day": 3490,
      "Average daily budget": 2000
    }
  ]
  return(
    <LineChart width={730} height={250} data={data}
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

// export default function MonthlyView(){

//   const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
//   return(
//     <BarChart width={600} height={300} data={data}>
//     <XAxis dataKey="name" stroke="#8884d8" />
//     <YAxis />
//     <Tooltip />
//     <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//     <Bar type="monotone" dataKey="uv" fill="#8884d8" barSize={30} />
//   </BarChart>
//   )
// }
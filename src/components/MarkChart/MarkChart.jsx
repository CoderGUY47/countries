import React, { use } from 'react'
import { BarChart, Bar, XAxis, YAxis } from 'recharts'

const MarkChart = ({markPromise}) => {
    //ei 2 line e axios er kaj
    const marksDataResponse = use(markPromise)
    const marksData = marksDataResponse.data
    console.log(marksData)

    //data processing for chart
    const markChartData = marksData.map(studemtData => {
        const student = {
            id: studemtData.id,
            name: studemtData.name,
            math: studemtData.math,
            english: studemtData.english,
            science: studemtData.science,
            history: studemtData.history
        }
        return student
    })
    console.log(markChartData)
    
    return (
    <div className="flex flex-col justify-center items-center w-[90%] space-y-6">
        <BarChart width={1200} height={500} data={markChartData}>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Bar dataKey="math" fill="#8884d8"></Bar>
            <Bar dataKey="english" fill="#82ca9d"></Bar>
            <Bar dataKey="science" fill="#ffc658"></Bar>
        </BarChart>
    </div>
  )
}

export default MarkChart
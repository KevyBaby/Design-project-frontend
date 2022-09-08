import React, {useState} from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2'
import {Database} from "../Api/Database"
import "./LineChart.css"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const BarChart = () => {

    var labels = [1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

    return <Line
        className="graph-style"
        options={{
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Raw Speed',
                },
            },
        }} 
        data={{
            labels,
            datasets: [
                {
                    label: Database[0]?.vehicleInfo?.vehicleModel,
                    data: Database[0]?.analytics?.rawspeed,
                    borderColor: 'blue',  
                    backgroundColor: 'blue',
                },
                {
                    label: Database[1]?.vehicleInfo?.vehicleModel,
                    data: Database[1]?.analytics?.rawspeed,
                    borderColor: 'red',
                    backgroundColor: 'red',
                },
                {
                    label: Database[2]?.vehicleInfo?.vehicleModel,
                    data: Database[2]?.analytics?.rawspeed,
                    borderColor: 'green',
                    backgroundColor: 'green',
                },
            ],
        }} 
    />
}
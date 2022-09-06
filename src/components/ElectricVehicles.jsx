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
import { Line } from 'react-chartjs-2';
import userOne from "../data/response1.json";
import userTwo from "../data/response3.json";
import { User } from "../data/UserPersonalDetails";
import {data as energyData} from "../data/energy";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
var label = [];
var datapoints = [];
var datapointsTwo = [];

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Energy Consumption',
        },
    },
};

const labels = []
labels.push(energyData.Date)
console.log(labels)

export const data = {
    labels,
    datasets: [
        {
            label: User[0].personalInfo.eamil,
            data: [],
            borderColor: 'rgb(255, 99, 132)',  
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: User[2].personalInfo.eamil,
            data: [],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export const ElectricVehicleEnergyConsumption = () => {
    return <Line className="graph-style" options={options} data={data} />
}
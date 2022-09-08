import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
//import faker from 'faker';
import "./LineChart.css"
import {Database} from "../Api/Database";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const labels = ["1","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];

export function LineChart() {

  return <Line className="graph-style" 
        options={{
            responsive: true,
            plugins: {
                legend: {
                    position: 'top' ,
                },
                title: {
                    display: true,
                    text: 'Displacement',
                },
            },
        }} 
        data={{
            labels,
            datasets: [
                {
                    label: Database[0]?.vehicleInfo?.vehicleModel,
                    data: Database[0]?.analytics?.Displacement,
                    backgroundColor: 'blue',
                    borderColor: 'blue'
                },
                {
                    label: Database[1]?.vehicleInfo?.vehicleModel,
                    data: Database[1]?.analytics?.Displacement,
                    backgroundColor: 'red',
                    borderColor: 'red'
                },
                {
                    label: Database[2]?.vehicleInfo?.vehicleModel,
                    data: Database[2]?.analytics?.Displacement,
                    backgroundColor: 'green',
                    borderColor: 'green'
                }
            ],
        }} 
    />;
}
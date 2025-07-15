"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const doughnutChart = () => {
  return <Doughnut data={[]} />

export default doughnutChart
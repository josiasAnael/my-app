import React from "react";
import { Line } from '@ant-design/charts'

export const Dashboard = () => {

    const data=[
        {pdf: "pendiente1", porcentaje: 80},
        {pdf: "pendiente2", porcentaje: 80},
        {pdf: "Realizado3", porcentaje: 100},
        {pdf: "pendiente4", porcentaje: 80},
        {pdf: "pendiente5", porcentaje: 10},
        {pdf: "pendiente6", porcentaje: 100},
    
    ]

    const Configuration ={
        data,
        title: {
            visible: true,
            text: 'Porcentaje de avance de los proyectos'
        },
        xField: 'pdf',

        yField: 'porcentaje',
        
        color: ['#1890ff', '#f50'],
        responsive: true,
        point:{
            visible: true,
            size: 10,
            shape: 'diamond',
            style: {
                fill: '#fff',
                stroke: '#00bfff',
                lineWidth: 2
            }
        }
    }


    return(
        <form action="#" className="p-3 form">
        
            <br>
            </br>
            
            <Line {...Configuration} />
        </form>

);
    
};

export default Dashboard;


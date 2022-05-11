import React, { useEffect, useState } from "react";
import { Line } from '@ant-design/charts'

import { useDocument } from "../../context/documentcontext";

export const Dashboard = () => {
  
    
    const { documentDash , loading} = useDocument('1');

    const Configuration ={
        data:documentDash ,
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
            {loading ? <h1>Cargando...</h1> : <Line {...Configuration} />}
        </form>

);
    
};

export default Dashboard;


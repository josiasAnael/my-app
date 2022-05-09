import React, { useEffect, useState } from "react";
import { Line } from '@ant-design/charts'

import { useParams } from "react-router-dom";
import { useDocument } from "../../context/documentcontext";

export const Dashboard = () => {
    
    let { id } = useParams();
    const { document, loading,setId } = useDocument(id);
    console.log('document', document)

    const data=[
        {pdf: "studentidentity", porcentaje: 80},
        {pdf: "witnessidentityone", porcentaje: 80},
        {pdf: "witnessidentitytwo", porcentaje: 100},
        {pdf: "collegetitle", porcentaje: 80},
        {pdf: "acceptanceletter", porcentaje: 10},
        {pdf: "fileopening", porcentaje: 100},
        {pdf: "residentialrecord", porcentaje: 100},    
        {pdf: "practicalrequest", porcentaje: 100},
        {pdf: "revicionControl", porcentaje: 100},
        {pdf: "monographguide", porcentaje: 100},
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


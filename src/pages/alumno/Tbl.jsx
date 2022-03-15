import 'jquery';
import '../../assets/bootstrap/jquery-3.5.1'
import React, {Component} from "react";

import 'datatables.net-dt/css/jquery.dataTables.min.css'

export class Tbl extends React.Component{
    componentDidMount(){
        $(document).ready(function () {
            $('#example').DataTable();
        });
    }
    render(){
        return(
        <>
        <div className="MainDiv">
                <div className="container">

                    <table id="example" className="display">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>$320,800</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                    </tfoot>
                    </table>
                </div>
            </div>

        </>     
        )       
    }

}
import React from "react";

import "../HomePage/Homepage.css"
import DropFileInput from '../../components/file_drop/'

import { Split, Line } from '../../components/Layout/styles/Split';

export const HomePage = () => {
    return(
        <form action="#" className="p-3 form">
            <div className="container" style={{textAlignLast:'center'}}>
                <div className="abs-center">
                    <div className="row justify-content-center">
                            
                            <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                                <div className="form-group">
                                        <div className="box">
                                            <label className="header">Primer pdf</label>
                                            <DropFileInput onFileChange={(files) => onFileChange(files)}/>
                                        </div>
                                        <Line/> 
                                        <button  type="button" className="btn btn-primary">Primer pdf</button>
                                </div>
                            </div>
                            
                            <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                                <div className="form-group">
                                    <div className="box">
                                            <label className="header">Primer pdf</label>
                                            <DropFileInput onFileChange={(files) => onFileChange(files)}/>
                                    </div>
                                    <div>
                                        <Line/>
                                        <button  type="button" className="btn btn-primary">Segundo pdf</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                                <div className="form-group">
                                    <div className="box">
                                            <label className="header">Primer pdf</label>
                                            <DropFileInput onFileChange={(files) => onFileChange(files)}/>
                                    </div>
                                    
                                    <div>
                                        <Line/>
                                        <button  type="button" className="btn btn-primary">Tercer pdf</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                                <div className="form-group">
                                    <div className="box">
                                            <label className="header">Primer pdf</label>
                                            <DropFileInput onFileChange={(files) => onFileChange(files)}/>
                                    </div>
                                    
                                    <div>
                                        <Line/>
                                        <button  type="button" className="btn btn-primary">Tercer pdf</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                                <div className="form-group">
                                    <div className="box">
                                            <label className="header">Primer pdf</label>
                                            <DropFileInput onFileChange={(files) => onFileChange(files)}/>
                                    </div>
                                    
                                    <div>
                                        <Line/>
                                        <button  type="button" className="btn btn-primary">Tercer pdf</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                                <div className="form-group">
                                    <div className="box">
                                            <label className="header">Primer pdf</label>
                                            <DropFileInput onFileChange={(files) => onFileChange(files)}/>
                                    </div>
                                    
                                    <div>
                                        <Line/>
                                        <button  type="button" className="btn btn-primary">Tercer pdf</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                                <div className="form-group">
                                    <div className="box">
                                            <label className="header">Primer pdf</label>
                                            <DropFileInput onFileChange={(files) => onFileChange(files)}/>
                                    </div>
                                    
                                    <div>
                                        <Line/>
                                        <button  type="button" className="btn btn-primary">Tercer pdf</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                                <div className="form-group">
                                    <div className="box">
                                            <label className="header">Primer pdf</label>
                                            <DropFileInput onFileChange={(files) => onFileChange(files)}/>
                                    </div>
                                    
                                    <div>
                                        <Line/>
                                        <button  type="button" className="btn btn-primary">Tercer pdf</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-xl-3  align-self-center">
                                <div className="form-group">
                                    <div className="box">
                                            <label className="header">Primer pdf</label>
                                            <DropFileInput onFileChange={(files) => onFileChange(files)}/>
                                    </div>
                                    <div>
                                        <Line/>
                                        <button  type="button" className="btn btn-primary">Tercer pdf</button>
                                    </div>
                                </div>
                            </div>


                            <div className="col-12 col-sm-6 col-md-4 col-xl-3 align-self-center">
                                <div className="form-group">
                                    <div className="box">
                                            <label className="header">Primer pdf</label>
                                            <DropFileInput onFileChange={(files) => onFileChange(files)}/>
                                    </div>
                                    <div>
                                        <Line/>
                                        <button  type="button" className="btn btn-primary">Tercer pdf</button>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="container"  style={{textAlignLast:'center'}}>
                                <div className="row col-auto justify-content-center">
                                    <button type="button" className="btn btn-success"><h3> ENVIAR </h3> </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>      
        </form>
    );
    
};

export default HomePage;

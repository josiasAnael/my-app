
import './drop-file-input.css';


import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ImageConfig } from './config/ImageConfig'; 
import uploadImg from '../../assets/cloud-upload-regular-240.png';


export const DropFileInput = props => {
    var [statusDrag,setstatusDrag]= useState("dragover");

    const [fileList, setFileList] = useState([]);


    const onDragEnter = () => setstatusDrag('dragover');

    const onDragLeave = () => setstatusDrag('');

    const onDrop = () => setstatusDrag('');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        
        var fileInput = document.getElementById('file');
        var filePath = fileInput.value;
        var allowedExtensions = /(.pdf)$/i;
        if(!allowedExtensions.exec(filePath)){
            alert('Please upload file having extensions .pdf only.');
            fileInput.value = '';
            return false;
        }else{
                if(newFile){
                    const updatedList = [...fileList, newFile];
                    
                    if(updatedList.length<=1){
                        setFileList(updatedList);
                        props.onFileChange(updatedList);
                    }else{
                console.log("Solo puede subir un pdf");
                }
            }
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    return (
        <>
            <div
                className={`drop-file-input ${statusDrag}`}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop-file-input__label">
                    <img src={uploadImg} alt="" />
                    <p>Arrastra y suelta tus archivos aquí</p>
                </div>
                <input type="file" id="file" onChange={onFileDrop} accept="application/pdf"/>
                
                
            </div>
            {
            
                (fileList.length > 0 && fileList.length <= 1) ? (
                    <div className="drop-file-preview">
                        <p className="drop-file-preview__title">
                            Listo para subir
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                    
                                    <div className="drop-file-preview__item__info">
                                        <p>{item.name}</p>
                                        <p>{item.size}B</p>
                                    </div>
                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>

                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}


export default DropFileInput;

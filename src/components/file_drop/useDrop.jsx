import { useState, useEffect } from "react";
import http from "../../services/serviceHttp";
const { Get ,uploadFileUpdate} = http;
export const useDrop = (onFileChange,data,isUploaded,name) => {
  const [canUpload, setcanUpload] = useState(true);
  const [sending, setsending] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [dataDocument, setdataDocument] = useState(data);
  const [Url, setUrl] = useState("");

  const sendFile = async () => {
    setsending(true);
    const formData = new FormData();
    formData.append("file", fileList[0]);
    formData.append("name", name);
    const { fileId } = dataDocument;
    uploadFileUpdate(`/upload/${fileId}`,formData).then((res) => {
      setdataDocument(res);
      setFileList([]);
    });
  }

  useEffect(() => {
    if (isUploaded) {
      setcanUpload(false);
      setsending(true);
      const { fileId, status } = dataDocument;
      Get("/url?fileId=" + fileId).then((res) => {
        setUrl(res);
      });
      if (status === "Deprecated" ) {
        setcanUpload(true);
      }
      if (status === "Pending") {
        setsending(false);
      }
    }
  }, [dataDocument]);

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);

    onFileChange(updatedList,isUploaded);
  };

  const onFileDrop = (e) => {
    const newFile = e.target.files[e.target.files.length - 1];
    console.log('data', newFile)
    var fileInput = newFile;
    var filePath = fileInput.name;
    var allowedExtensions = /(.pdf)$/i;
    if (!allowedExtensions.exec(filePath)) {
      alert("Por favor, seleccione un archivo de tipo pdf");
      return false;
    } else {
      if (newFile) {
        const updatedList = [...fileList, newFile];
        if (updatedList.length <= 1) {
          setFileList(updatedList);
          onFileChange(updatedList,isUploaded);
        } else {
          alert("Solo puede subir un pdf");
        }
      }
    }
  };
  const [statusDrag, setstatusDrag] = useState("");
  const onDragEnter = () => setstatusDrag("dragover");

  const onDragLeave = () => setstatusDrag("");

  const onDrop = () => setstatusDrag("");

  return { canUpload, sending, dataDocument,fileList, Url, fileRemove, onFileDrop,
    statusDrag, onDragEnter, onDragLeave, onDrop,setsending,sendFile };
};

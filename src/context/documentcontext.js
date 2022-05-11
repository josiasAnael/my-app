import { useEffect, useState } from "react";
import useSWR from "swr/immutable";
import { getDocument } from "../services/documenService";

export const useDocument = (data = "1") => {
  
  const [id, setId] = useState(data);
  const [document, setDocument] = useState([]);
  const [documentDash, setDocumentDash] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetcher = async () => {
    try {
      setLoading(true);
      const data = await getDocument(`/documents/${id}`);
      setDocument(data);
      console.log(data);
      setLoading(false);
      documentproceses(data);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetcher();
    
  }, [id]);


  const documentproceses =(temp)=>{
    console.log('DASH',document);    
    if(temp){
     let data =  temp.reduce((prev, next)=>{
        return [
          ...prev,
          {
            pdf: datos[next.name],
            porcentaje: getStatus(next.status),
          }
        ]
      },[])
      console.log(data);
      setDocumentDash(data);
    }
  }
  const getStatus = (status) => {
    switch (status) {
      case "Pending":
        return 25;
      case "Approved":
        return 100;
      case "Deprecated":
        return 0;
      default:
        return 50;
    }
  }
  return {
    loading,
    error,
    document,
    documentDash,
    setId,
  };
};
const datos = {
  fileopening: "DATOS PARA APERTURAR EXPEDIENTE",
  residentialrecord: "FICHA DE INFORMACION REFERENCIAL",
  practicalrequest: "SOLICITUD PARA REALIZAR PRÁCTICA",
  revicionControl: "CONTROL DE REVISION",
  monographguide: "LA MONOGRAFÍA",
  studentidentity: "IDENTIDAD PERSONAL",
  witnessidentityone: "IDENTIDAD DEL PRIMER TESTIGO",
  witnessidentitytwo: "IDENTIDAD DEL SEGUNDO TESTIGO",
  collegetitle: "COPIA DE TITULO DE COLEGIO",
  acceptanceletter: "CARTA DE ACEPTACION DE PRÁCTICA",
};
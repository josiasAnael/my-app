import { useEffect, useState } from "react";
import useSWR from "swr/immutable";
import { getDocument } from "../services/documenService";

export const useDocument = (data = "1") => {
  
  const [id, setId] = useState(data);
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetcher = async () => {
    try {
      setLoading(true);
      const documents = await getDocument(`/documents/${id}`);
      setDocument(documents);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetcher();
  }, [id]);

  return {
    loading,
    error,
    document,
    setId,
  };
};

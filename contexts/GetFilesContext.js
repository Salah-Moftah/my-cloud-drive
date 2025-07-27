"use client";
import { createContext, useContext, useEffect, useState } from "react";

const GetFilesContext = createContext();

export const GetFilesProvider = ({ children }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFiles = async () => {
    const res = await fetch("/api/file");
    const data = await res.json();
    setFiles(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const refreshFiles = () => fetchFiles();

  return (
    <GetFilesContext.Provider value={{ files, setFiles, loading, refreshFiles }}>
      {children}
    </GetFilesContext.Provider>
  );
};

export const useFiles = () => useContext(GetFilesContext);

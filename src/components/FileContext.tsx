"use client";

import React, { createContext, useContext, useState} from 'react';

interface FileProviderProps {
    children: React.ReactNode;
}

interface FileContextType {
    fileName: string | null;
    setFileName: React.Dispatch<React.SetStateAction<string | null>>;
    file: File | null;
    setFile: (file: File) => void;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

export const useFile = (): FileContextType => {
    const context = useContext(FileContext);
    if (!context) {
      throw new Error('useFile must be used within a FileProvider');
    }
    return context;
  };

export const FileProvider: React.FC<FileProviderProps> = ({ children }) => {
    const [fileName, setFileName] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    
    return(
        <FileContext.Provider value={{fileName, setFileName, file, setFile}}>
            {children}
        </FileContext.Provider>
    )
};

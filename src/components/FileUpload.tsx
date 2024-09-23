"use client";

import React, { useState, useRef } from 'react';
import styles from '../styles/FileUpload.module.css'; // Importando o CSS Module

const FileUpload: React.FC = () => {
  const [fileInfo, setFileInfo] = useState<string | null>(null);
  const dropAreaRef = useRef<HTMLDivElement>(null);

  const preventDefaults = (e: React.DragEvent | React.ChangeEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = () => {
    if (dropAreaRef.current) {
      dropAreaRef.current.classList.add(styles.highlight); // Aplicando estilo CSS module
    }
  };

  const handleDragLeave = () => {
    if (dropAreaRef.current) {
      dropAreaRef.current.classList.remove(styles.highlight); // Removendo estilo CSS module
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    preventDefaults(e);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = (files: FileList) => {
    const file = files[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileInfo(`Arquivo PDF carregado: ${file.name}`);
      };
      reader.readAsDataURL(file);
    } else {
      setFileInfo("Por favor, selecione um arquivo PDF.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.headerTitle}>Selecione seu arquivo PDF <span>📄</span></h2>
      <div
        id={styles['drop-area']}
        ref={dropAreaRef}
        className={styles.dropArea} // Aplicando estilos usando CSS module
        onDragEnter={handleDragEnter}
        onDragOver={preventDefaults}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className={styles.pdfIcon}></div>
        <p className={styles.paragraph}>Arraste e solte um arquivo PDF aqui</p>
        <input
          type="file"
          id="fileElem"
          accept="application/pdf"
          onChange={(e) => handleFiles(e.target.files!)}
          className={styles.fileInput}
        />
        <label className={styles.button} htmlFor="fileElem">
          Selecionar arquivo
        </label>
      </div>
      <div id="file-info">{fileInfo && <p>{fileInfo}</p>}</div>
    </div>
  );
};

export default FileUpload;

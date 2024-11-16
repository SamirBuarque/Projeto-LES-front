"use client";

const API_URL = "http://localhost:8081/api/file";
import React, { useState } from "react";
import styles from "../styles/PdfTools.module.css"; // Importando o CSS Module
import {
  downloadFile,
  downloadSummaryFile,
  translateFile,
} from "@/utils/api";
import { useFile } from "@/components/FileContext";

const PdfTools: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const { fileName, file } = useFile();


  const handleDownload = async () => {
    if (fileName) {
      if (selectedOption === "generateSummary") {
        downloadSummaryFile(fileName);
      } else if (selectedOption === "translateText") {
        translateFile(file, selectedLanguage);
      } else {
        downloadFile(fileName);
      }
    } else {
      alert("Nenhum arquivo disponível para download");
    }
  };
  

  return (
    <div className={styles.container}>
      <h1>Ferramentas para o seu PDF</h1>

      <div className={styles.pdfOptionsSection}>
        <div className={styles.pdfGroup}>
          <div className={styles.pdfIcon}>{/* Ícone do PDF */}</div>

        </div>

        <div className={styles.optionsGroup}>

        <div className={styles.dropdown}>
            <select
              className={styles.selectDropdown}
              value={selectedOption}
              onChange={(e) => {
                setSelectedOption(e.target.value)
              }}
            >
              <option value="">Selecione um serviço</option>
              <option value="generateSummary">Gerar resumo</option>
              <option value="translateText">Traduzir texto</option>
              
            </select>
          </div>

          {selectedOption === "translateText" && (
            <div className={styles.dropdown}>
            <select
              className={styles.selectDropdown}
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="">Selecione uma linguagem</option>
              <option value="en">Inglês</option>
              <option value="es">Espanhol</option>
              <option value="fr">Francês</option>
              <option value="de">Alemão</option>
              <option value="pt">Português (Brasil)</option>
            </select>
          </div>
          )}

        </div>
      </div>

      <button className={styles.confirmButton} onClick={handleDownload}>
        Baixar arquivo
      </button>
    </div>
  );
};

export default PdfTools;

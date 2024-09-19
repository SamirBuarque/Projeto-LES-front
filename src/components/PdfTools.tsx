"use client";

import React, { useState } from 'react';
import styles from '../styles/PdfTools.module.css'; // Importando o CSS Module

const PdfTools: React.FC = () => {
  const [generateSummary, setGenerateSummary] = useState(true);
  const [translateText, setTranslateText] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleConfirm = () => {
    console.log({
      generateSummary,
      translateText,
      selectedLanguage
    });
  };

  return (
    <div className={styles.container}>
      <h1>Ferramentas para o seu PDF</h1>

      <div className={styles.pdfOptionsSection}>
        <div className={styles.pdfGroup}>
          <div className={styles.pdfIcon}>
            {/* Ícone do PDF */}
          </div>

          <div className={styles.tools}>
            <label>
              <input
                type="checkbox"
                checked={generateSummary}
                onChange={() => setGenerateSummary(!generateSummary)}
              /> 
              <strong>Gerar resumo</strong>
            </label>
          </div>
        </div>

        <div className={styles.optionsGroup}>
          <div className={styles.dropdown}>
            <select className={styles.selectDropdown}
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="">Selecione uma linguagem</option>
              <option value="en">Inglês</option>
              <option value="es">Espanhol</option>
              <option value="fr">Francês</option>
              <option value="de">Alemão</option>
              <option value="pt-br">Português (Brasil)</option>
            </select>
          </div>

          <div className={styles.tools}>
            <label>
              <input
                type="checkbox"
                checked={translateText}
                onChange={() => setTranslateText(!translateText)}
              /> 
              <strong>Traduzir texto</strong>
            </label>
          </div>
        </div>
      </div>

      <button className={styles.confirmButton} onClick={handleConfirm}>
        Confirmar
      </button>
    </div>
  );
};

export default PdfTools;

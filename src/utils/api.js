const API_URL = "http://localhost:8081/api/file";

export const uploadFile = async (file, ratio=0.2) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("ratio", ratio);

  const response = await fetch(`${API_URL}/uploadFile`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Erro ao fazer o upload do arquivo");
  }

  return response.json();
};

export const translateFile = async (file, language) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("language", language);

    const response = await fetch(`${API_URL}/translateFile`, {
      method: "POST",
      body: formData,
    });

    

    if (!response.ok) {
      throw new Error("Erro ao traduzir o arquivo");
    }

    const { translatedFile } = await response.json();
    console.log(`arquivo traduzido com sucesso para o idioma: ${language}`);
    return translatedFile;

  } catch (error) {
    console.log("Erro ao traduzir o arquivo.", error);
    throw error;
  }
};

export const downloadTranslatedFile = async (fileName) => {
  try {
    const response = await fetch(
      `${API_URL}/downloadTranslatedFile/${fileName}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("Erro ao baixar o arquivo traduzido");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `translated_${fileName}`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.log("Erro ao fazer o download do arquivo traduzido.", error);
    throw error;
  }
};

export const downloadSummaryFile = async (fileName) => {
  try {
    const response = await fetch(
      `${API_URL}/downloadSummary?fileName=${fileName}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Erro ao baixar o arquivo");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();

    link.remove();
  } catch (error) {
    console.log("Erro ao fazer o download do arquivo.", error);
    throw error;
  }
};

export const downloadFile = async (fileName) => {
  try {
    const response = await fetch(
      `${API_URL}/downloadFile/${fileName}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Erro ao baixar o arquivo");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();

    link.remove();
  } catch (error) {
    console.log("Erro ao fazer o download do arquivo.", error);
    throw error;
  }
};

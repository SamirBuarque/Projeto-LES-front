const API_URL = "http://localhost:8081/api/file";

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const responde = await fetch(`${API_URL}/uploadFile`, {
    method: "POST",
    body: formData,
  });

  if (!responde.ok) {
    throw new Error("Erro ao fazer o upload do arquivo");
  }

  return responde.json();
};

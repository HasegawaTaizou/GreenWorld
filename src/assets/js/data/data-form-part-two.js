export default function dataFormPartTwo(formData) {
  return {
    formData: {
      cep: formData.cep,
      logradouro: formData.logradouro,
      bairro: formData.bairro,
      complemento: formData.complemento,
      estado: formData.estado,
      cidade: formData.cidade,
    },
  };
}

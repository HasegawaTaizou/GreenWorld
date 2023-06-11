export default function dataPartThree(formData) {
  return {
    selectHaveExperience: formData.experiencia,
    inputReason: formData.motivo,
    formData: {
      nome_completo: formData.nome_completo,
      foto: formData.foto,
      data_nascimento: formData.data_nascimento,
      rg: formData.rg,
      cpf: formData.cpf,
      telefone: formData.telefone,
      email: formData.email,
      motivo: "",
      experiencia: "",
    },
  };
}

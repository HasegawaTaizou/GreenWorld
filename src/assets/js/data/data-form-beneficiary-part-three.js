import cleanInput from "../input/clean-input.js";
import cleanBirthDate from "../input/clean-birth-date.js";

export default function dataPartThree(formData) {
  return {
    // inputAmountResidents: formData.amountResidents,
    inputFamilyIncome: formData.renda,
    // selectTypeResidence: formData.typeResidence,
    // inputSquareMetersResidence: formData.squareMetersResidence,
    textareaComments: formData.observacao,
    formData: {
      nome_completo: formData.nome_completo,
      foto: formData.foto,
      data_nascimento: cleanBirthDate(formData.data_nascimento),
      rg: cleanInput(formData.rg),
      cpf: cleanInput(formData.cpf),
      telefone: cleanInput(formData.telefone),
      email: formData.email,
      cep: cleanInput(formData.cep),
      renda: "",
      observacao: "",
      id_especificacoes_moradia: "1",
    },
  };
}

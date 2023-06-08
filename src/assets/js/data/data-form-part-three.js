export default function dataPartThree(formData) {
  return {
    selectHaveExperience: formData.haveExperience,
    inputReason: formData.reason,
    formData: {
      userData: {
        photo: formData.photo,
        dateBirth: formData.dateBirth,
        rg: formData.rg,
        cpf: formData.cpf,
        phone: formData.phone,
        email: formData.email,
      },
      addressData: {
        cep: formData.cep,
        road: formData.road,
        neighborhood: formData.neighborhood,
        complement: formData.complement,
        state: formData.state,
        city: formData.city,
      },
      additionalData: {
        reason: "",
        haveExperience: "",
      },
    },
  };
}

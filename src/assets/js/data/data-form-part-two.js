export default function dataFormPartTwo(formData) {
  return {
    formData: {
      cep: formData.cep,
      road: formData.road,
      neighborhood: formData.neighborhood,
      complement: formData.complement,
      state: formData.state,
      city: formData.city,
    },
  };
}

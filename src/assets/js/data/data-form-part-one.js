export default function dataPartOne(formData) {
  return {
    isSelectedImage: formData.isSelectedImage,
    downloadURL: formData.photo,
    inputFullName: formData.fullName,
    inputDateBirth: formData.dateBirth,
    inputRg: formData.rg,
    inputCpf: formData.cpf,
    inputPhone: formData.phone,
    inputEmail: formData.email,
    formData: {
      photo: formData.photo,
      fullName: formData.fullName,
      dateBirth: formData.dateBirth,
      rg: formData.rg,
      cpf: formData.cpf,
      phone: formData.phone,
      email: formData.email,
    },
  };
}

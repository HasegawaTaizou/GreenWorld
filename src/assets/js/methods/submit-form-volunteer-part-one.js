import cleanInput from "../input/clean-input.js";
import validateFieldsVolunteerPartOne from "../validations/validation-fields-volunteer-part-one.js";

export default async function submitFormVolunteerPartOne() {
  this.formData.foto = this.downloadURL;
  this.formData.nome_completo = this.inputFullName;
  this.formData.data_nascimento = this.inputDateBirth;
  this.formData.rg = this.inputRg;
  this.formData.cpf = this.inputCpf;
  this.formData.limitacao_fisica = this.selectPhysicalLimitation;
  this.formData.telefone = this.inputPhone;
  this.formData.email = this.inputEmail;

  this.formData.cpf = cleanInput(this.formData.cpf)

  console.log(this.formData);

  this.v$.$touch();

  const isFormCorrect = await this.v$.$validate();

  const fields = [
    { key: "inputFullName", ref: "inputFullName" },
    { key: "inputDateBirth", ref: "inputDateBirth" },
    { key: "inputEmail", ref: "inputEmail" },
  ];

  if (isFormCorrect) {
    this.$store.commit("updateFormData", this.formData);
    this.$router.push("/volunteer-registration-part-two");
  } else {
    validateFieldsVolunteerPartOne(fields)
  }
}
export default function submitFormPartOne() {
  this.formData.foto = this.downloadURL;
  this.formData.nome_completo = this.inputFullName;
  this.formData.data_nascimento = this.inputDateBirth;
  this.formData.rg = this.inputRg;
  this.formData.cpf = this.inputCpf;
  this.formData.telefone = this.inputPhone;
  this.formData.email = this.inputEmail;
  
  
  console.log(this.formData);

  this.$store.commit("updateFormData", this.formData);
  this.$router.push("/volunteer-registration-part-two");
}
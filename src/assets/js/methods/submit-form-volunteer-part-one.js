export default function submitFormVolunteerPartOne() {
  this.formData.photo = this.downloadURL;
  this.formData.fullName = this.inputFullName;
  this.formData.dateBirth = this.inputDateBirth;
  this.formData.rg = this.inputRg;
  this.formData.cpf = this.inputCpf;
  this.formData.phone = this.inputPhone;
  this.formData.email = this.inputEmail;
  console.log(this.formData);

  this.$store.commit("updateFormData", this.formData);
  this.$router.push("/volunteer-registration-part-two");
}

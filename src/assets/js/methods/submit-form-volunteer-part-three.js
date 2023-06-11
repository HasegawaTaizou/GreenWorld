import postDataPartThree from "./post-data-part-three.js";

export default function submitFormVolunteerPartThree() {
  this.formData.motivo = this.inputReason;
  this.formData.experiencia = this.selectHaveExperience;
  this.$store.commit("updateFormData", this.formData);

  console.log("form 3: ", this.formData);

  postDataPartThree(this.formData);
}

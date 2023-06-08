import postData from "./post-data.js";

export default function submitFormVolunteerPartThree() {
  this.formData.additionalData.reason = this.inputReason;
  this.formData.additionalData.haveExperience = this.selectHaveExperience;
  this.$store.commit("updateFormData", this.formData);

  console.log("form 3: ", this.formData);

  postData(this.formData);
}

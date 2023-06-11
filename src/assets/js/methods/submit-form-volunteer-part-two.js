import postDataPartTwo from "./post-data-part-two.js";

export default function submitFormVolunteerPartTwo() {
  this.formData.cep = this.formData.cep.replace("-", "");
  
  console.log("formData 2: ", this.formData);
  this.$store.commit("updateFormData", this.formData);
  this.$router.push("/volunteer-registration-part-three");

  postDataPartTwo(this.formData);

}



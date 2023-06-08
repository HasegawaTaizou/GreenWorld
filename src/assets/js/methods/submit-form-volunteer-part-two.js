export default function submitFormVolunteerPartTwo() {
  console.log("formData 2: ", this.formData);
  this.$store.commit("updateFormData", this.formData);
  this.$router.push("/volunteer-registration-part-three");
}

import postDataPartThree from "./post-data-beneficiary-part-three.js";
import fieldsBeneficiaryPartThree from '../validations/fields/fields-beneficiary-part-three.js'

export default async function submitFormBeneficiaryPartThree() {
  this.formData.amountResidents = this.inputAmountResidents;
  this.formData.familyIncome = this.inputFamilyIncome;
  this.formData.typeResidence = this.selectTypeResidence;
  this.formData.squareMetersResidence = this.inputSquareMetersResidence;
  this.formData.comments = this.textareaComments;
  
  this.$store.commit("updateFormData", this.formData);
  console.log("form 3: ", this.formData);

  this.v$.$touch();

  const isFormCorrect = await this.v$.$validate();

  if (isFormCorrect) {
    //To show notification
    this.$store.state.showNotification = true

    this.$store.commit("updateFormData", this.formData);
    postDataPartThree(this.formData);
  } else {
    for (const field of fieldsBeneficiaryPartThree) {
      if (this.v$[field.key].$error) {
        this.$nextTick(() => {
          this.$refs[field.ref].focus();
        });
        break;
      }
    }
  }
}

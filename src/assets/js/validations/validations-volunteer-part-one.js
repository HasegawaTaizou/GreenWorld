import { required, email, minLength } from "@vuelidate/validators";

export default function validationsVolunteerPartOne() {
  return {
    inputFullName: { required },
    inputDateBirth: {
      required,
      minLength: minLength(10),
      validDate() {
        var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
        return regex.test(this.inputDateBirth);
      },
    },
    inputEmail: { required, email },
  };
}

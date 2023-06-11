"use strict";

export default function validateFieldsVolunteerPartOne(fields) {
  for (const field of fields) {
    if (this.v$[field.key].$error) {
      this.$nextTick(() => {
        this.$refs[field.ref].focus();
      });
      break;
    }
  }
}

export default function handleBeneficiaryClick(item) {
  this.$store.commit("updateBeneficiaryCpf", item.cpf);
  console.log(item.cpf);
}

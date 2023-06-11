import axios from "axios";

export default function postData(formData) {
  // Enviar dados para o servidor
  axios
    .post("http://127.0.0.1:8080/v4/green-world/inserir_voluntario", formData)
    .then((response) => {
      // Manipular a resposta do servidor
      console.log(response.data);

      // Redirecionar para a primeira tela do cadastro
      this.$router.push("/");
    })
    .catch((error) => {
      // Tratar erros na requisição
      console.error(error);
    });
}

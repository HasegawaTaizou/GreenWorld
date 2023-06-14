import axios from "axios";

export default function sendEmail(formData) {
  const emailData = {
    email_title: "Cadastro Realizado com sucesso!",
    user_email: formData.email,
    body_email: "Aguarde para sua ajuda ser analisada pelo administrador",
  };

  axios
    .post("http://127.0.0.1:8080/v1/green-world/send_email", emailData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

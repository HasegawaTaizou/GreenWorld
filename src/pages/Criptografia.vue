<template>
  <div>
    <h2>Registro</h2>
    <form @submit.prevent="register">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />
      <br />
      <label for="password">Senha:</label>
      <input type="password" id="password" v-model="password" required />
      <br />
      <button type="submit">Registrar</button>
    </form>

    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="loginEmail">Email:</label>
      <input type="email" id="loginEmail" v-model="loginEmail" required />
      <br />
      <label for="loginPassword">Senha:</label>
      <input type="password" id="loginPassword" v-model="loginPassword" required />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import bcrypt from "bcryptjs";

export default {
  name: "Criptografia",
  data() {
    return {
      email: "",
      password: "",
      loginEmail: "",
      loginPassword: "",
      hashedPassword: "" // Adicione esta linha
    };
  },
  methods: {
    register() {
      const password = this.password;
      console.log(password);
      
      const saltRounds = 10;
      this.hashedPassword = bcrypt.hashSync(password, saltRounds); // Atualize esta linha
      console.log(this.hashedPassword);
      
      // Envie o 'hashedPassword' para o backend para armazenamento
      // ...
    },
    login() {
      const password = this.loginPassword;
      // Recupere o 'hashedPassword' armazenado do seu backend
      const isPasswordMatch = bcrypt.compareSync(password, this.hashedPassword); // Atualize esta linha
      if (isPasswordMatch) {
        // Senha correta, faça o login
        console.log('senha correta');
        
        // ...
      } else {
        // Senha incorreta, exiba uma mensagem de erro
        console.log('senha incorreta');
        
        // ...
      }
    }
  }
};
</script>
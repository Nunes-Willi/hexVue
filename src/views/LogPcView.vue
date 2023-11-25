<template>
  <div class="all">
    <div class="container">
      <div class="form">
        <h1>Cadastro do participante</h1>
        <div class="inputs">
          <input v-model="nome" type="text" placeholder="Nome:" />
          <input v-model="idade" type="number" placeholder="Idade:" />
          <input v-model="email" type="email" placeholder="Email:" />
          <input v-model="cpf" type="number" placeholder="CPF" />
          <input v-model="senha" type="password" placeholder="Senha:" />
        </div>
        <button @click="cadastrar" class="register-button">Cadastrar</button>
      </div>
      <div class="image">
        <img
          src="../imagens/Group 12.png"
          alt="hex"
          style="height: 550px; width: 450px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nome: "",
      idade: null,
      email: "",
      cpf: "",
      senha: "",
    };
  },
  methods: {
    async cadastrar() {
      // Check if all fields are filled
      if (
        !this.nome ||
        !this.idade ||
        !this.email ||
        !this.senha ||
        !this.cpf
      ) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      // Make a POST request to your API to 00 the user
      try {
        await axios.post("/peoples/", {
          nome: this.nome,
          idade: this.idade,
          email: this.email,
          cpf: this.cpf,
          senha: this.senha,
        });
        // if (response.ok) {
        // Registration successful, navigate to the next screen
        this.$router.push("/evento");
      } catch (error) {
        alert("Erro no cadastro. Por favor, tente novamente.");
        console.error("Error:", error);
      }
    },
  },
};
</script>

<style scoped>
.all {
  background: linear-gradient(180deg, #224948 0%, #061010 100%);
  width: 100%;
  height: 100%;
  padding-bottom: 910px;
}
.container {
  /* background-color: red;  */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  width: 70%;
  margin: 250px;
  height: 550px;
}

.form {
  text-align: center;
  margin-top: 115px;
}

h1 {
  color: #fff;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.inputs {
  /* background-color: red; */
  display: flex;
  flex-direction: column;
}

input {
  width: 92%;
  margin: 15px;
  background-color: transparent;
  /* border-radius: 10px; */
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: solid white 1px;
  color: white;
}
.image {
  height: 10%;
}
</style>

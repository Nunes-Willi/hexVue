<template>
  <div class="tudo">
    <div class="login-container">
      <img src="@/imagens/Logo.png" alt="" class="img-logo" />
      <div class="login-form">
        <div class="form-container">
          <div class="form-section">
            <h2>Dados do Avaliador</h2>
            <form @submit.prevent="submitAvaliador">
              <label for="nome">Nome:</label>
              <input type="text" v-model="avaliador.nome" required />

              <label for="idade">Idade:</label>
              <input type="text" v-model="avaliador.idade" required />

              <label for="email">Email:</label>
              <input type="email" v-model="avaliador.email" required />

              <label for="cpf">CPF:</label>
              <input type="cpf" v-model="avaliador.cpf" required />

              <label for="empresa">Empresa:</label>
              <input type="empresa" v-model="avaliador.empresa" required />

              <label for="senha">Senha:</label>
              <input type="password" v-model="avaliador.senha" required />
            </form>
          </div>
        </div>
        <!-- Move the button outside of the form-section -->
        <router-link to="/eventosav" class="botao" @click="submitAvaliador"
          >Cadastrar</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      avaliador: {
        nome: "",
        idade: "",
        email: "",
        cpf: "",
        empresa: "",
        senha: "",
      },
      // empresa: {
      //   nome: "",
      //   cnpj: "",
      //   email: "",
      // },
    };
  },
  methods: {
    async submitAvaliador() {
      // Check if all fields are filled
      if (
        !this.nome ||
        !this.idade ||
        !this.email ||
        !this.senha ||
        !this.cpf ||
        !this.empresa
      ) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      // Make a POST request to your API to 00 the user
      try {
        await axios.post("/avaliadores/", {
          nome: this.nome,
          idade: this.idade,
          email: this.email,
          cpf: this.cpf,
          empresa: this.empresa,
          senha: this.senha,
        });
        // if (response.ok) {
        // Registration successful, navigate to the next screen
        this.$router.push("/eventoav");
      } catch (error) {
        alert("Erro no cadastro. Por favor, tente novamente.");
        console.error("Error:", error);
      }
    },
  },
};
</script>

<style scoped>
input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid 2px white;
  background-color: transparent;
  color: white;
  width: 600px;
}
.tudo {
  background: linear-gradient(180deg, #224948 0%, #061010 100%);
}
.login-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.img-logo {
  width: 450px;
  margin-bottom: 100px;
}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-section {
  display: flex;
  flex-direction: column;
  width: 500px;
}

h2 {
  color: #ffffff;
  font-weight: 500;
  font-size: 30px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #ffffff;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
}

.botao {
  background-color: #224948;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 50px;
  width: 100px;
  font-size: 25px;
  font-weight: 500;
  justify-content: center;
  text-align: center;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-section {
  display: flex;
  flex-direction: column;
  width: 500px;
}

.botao {
  margin-top: 20px; /* Add margin to separate the button from the form */
  background-color: #224948;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 50px;
  width: 150px; /* Adjust width as needed */
  font-size: 20px; /* Adjust font size as needed */
  font-weight: 500;
}
</style>

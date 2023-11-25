<template>
  <div class="tudo">
    <div class="login-container">
      <img src="@/imagens/Logo.png" alt="" class="img-logo" />
      <div class="login-form">
        <div class="form-section">
          <h2>Dados do Avaliador</h2>
          <form @submit.prevent="submitAvaliador">
            <label for="nome">Nome:</label>
            <input type="text" v-model="avaliador.nome" required />

            <label for="idade">Idade:</label>
            <input type="text" v-model="avaliador.idade" required />

            <label for="email">Email:</label>
            <input type="email" v-model="avaliador.email" required />

            <label for="senha">Senha:</label>
            <input type="password" v-model="avaliador.senha" required />
          </form>
        </div>

        <div class="form-section2">
          <h2>Dados da Empresa</h2>
          <form @submit.prevent="submitEmpresa">
            <label for="nomeEmpresa">Nome da Empresa:</label>
            <input type="text" v-model="empresa.nome" required />

            <label for="cnpj">CNPJ:</label>
            <input type="text" v-model="empresa.cnpj" required />

            <label for="emailEmpresa">Email da Empresa:</label>
            <input type="email" v-model="empresa.email" required />
            <router-link to="/eventosav" class="botao" @click="submit"
              >Cadastrar</router-link
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avaliador: {
        nome: "",
        idade: "",
        email: "",
        senha: "",
      },
      empresa: {
        nome: "",
        cnpj: "",
        email: "",
      },
    };
  },
  methods: {
    submitAvaliador() {
      console.log("Dados do Avaliador:", this.avaliador);
    },
    submitEmpresa() {
      console.log("Dados da Empresa:", this.empresa);
    },
    submit() {
      if (this.isAvaliadorValido && this.isEmpresaValida) {
        console.log("Ambos os formulários estão preenchidos.");
      } else {
        console.log("Preencha ambos os formulários.");
      }
    },
  },
  computed: {
    isAvaliadorValido() {
      return (
        this.avaliador.nome &&
        this.avaliador.idade &&
        this.avaliador.email &&
        this.avaliador.senha
      );
    },
    isEmpresaValida() {
      return this.empresa.nome && this.empresa.cnpj && this.empresa.email;
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
  flex-direction: row;
}

.form-section {
  display: flex;
  flex-direction: column;
  margin-right: 400px;
  margin-bottom: 300px;
  width: 500px;
}
.form-section2 {
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
}
</style>

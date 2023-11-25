<template>
  <div>
    <div class="header-image-container">
      <div class="background-image-overlay"></div>
      <img
        src="@/imagens/eifc.png"
        alt="Background Image"
        class="background-image"
      />
      <p class="corner-text data-text">Data 24 de dez</p>
      <p class="corner-text time-text">Horário 8:00</p>
      <p class="corner-text location-text">Local IFC - Campus Araquari</p>
      <h1 class="events-title-overlay">Hackathon IFC-Araquari 2023</h1>
    </div>
    <div class="base">
      <div class="main-wrapper">
        <main class="main-container">
          <h2>Formar Equipe</h2>
          <form class="team-form" @submit.prevent="formarEquipe">
            <label for="teamName">Nome do Time:</label>
            <input v-model="teamName" type="text" required />

            <div
              class="form-row"
              v-for="(participant, index) in participants"
              :key="index"
            >
              <div class="inf">
              <div class="part">
                <h3>Participante {{ index + 1 }}</h3>
              </div>
                <p><strong>Nome:</strong> {{ participant.nome }}</p>
                <p><strong>Idade:</strong> {{ participant.idade }}</p>
              <p><strong>E-mail:</strong> {{ participant.email }}</p>
              </div>
              <div class="checkbox">
              <input type="checkbox" v-model="participant.selected" class="check"/>
              </div>

            </div>

            <button @click="buscarParticipantes" class="add-participant-button">
              Buscar Participantes
            </button>

            <button type="submit" class="add-participant-button">
              Formar Equipe
            </button>
          </form>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      teamName: "",
      participants: [],
    };
  },
  methods: {
    async buscarParticipantes() {
      try {
        const response = await axios.get(
          "https://hexback-dev-eeja.2.us-1.fl0.io/api/peoples/"
        );
        this.participants = response.data.results.map((participant) => ({
          ...participant,
          selected: false,
        }));
      } catch (error) {
        console.error("Erro ao buscar participantes:", error);
      }
    },
    async formarEquipe() {
      if (
        !this.teamName ||
        this.participants.length === 0 ||
        !this.participants.some((p) => p.selected)
      ) {
        alert(
          "Por favor, preencha todos os campos e selecione pelo menos um participante para a equipe."
        );
        return;
      }

      const selectedParticipants = this.participants.filter((p) => p.selected);

      try {
        const response = await axios.post(
          "https://hexback-dev-eeja.2.us-1.fl0.io/api/equipes/",
          {
            equipe: this.teamName,
            qtdi: selectedParticipants.length,
            integrantes: selectedParticipants.map((p) => p.id),
          }
        );

        // Limpar o formulário após enviar a equipe
        this.teamName = "";
        this.participants.forEach((p) => (p.selected = false));

        // Handle the response as needed
        console.log("Server response:", response.data);

        // Redirecionar para a próxima tela
        this.$router.push("/equipesreg/");
      } catch (error) {
        alert("Erro ao formar equipe. Por favor, tente novamente.");
        console.error("Error:", error);
      }
    },
  },
};
</script>

<style scoped>
p{
  margin-bottom: -10px;
}
input:cheked{
background-color: #224849;
}
.check{
  height: 20px;
  width: 20px;
  margin: 10px;
}
.inf{
  display: flex;
  flex-direction: column;
  margin-left: 10px;

}
.part {
  display: flex;
  flex-direction: row;
  font-size: 20px;
  margin-bottom: -30px;
}

h2 {
  font-weight: 600;
  color: #224849;
  font-size: 25px;
}
.base {
  justify-content: center;
  align-items: center;
  display: flex;
  
}
input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: #224849 solid 2px;
  width: 400px;
}
.events-title-overlay {
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.header-image-container {
  position: relative;
}

.background-image {
  width: 100%;
  height: auto;
}

.background-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95); /* Cor do filtro preto mais escuro */
}

.corner-text {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 16px;
}

.time-text {
  position: absolute;
  bottom: 30px;
}

.location-text {
  position: absolute;
  bottom: 50px;
}

.hackathon-title {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 36px;
  color: white;
}

.main-wrapper {
  background-color: white;
  margin: 20px; /* Adicione margens para espaçamento */
  padding: 20px; /* Adicione preenchimento para espaçamento interno */

  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px; /* Defina a largura máxima da main */
  margin: auto; /* Centralize a main na página */
}

.team-form {
  display: flex;
  flex-direction: column;
  margin-top: 20px; /* Adicione margem acima do formulário */
}

.team-form label {
  margin-top: 10px;
}

.participant-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-top: 20px;
  justify-content: center;
  width: 500px;
}

.participant-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
  padding-left: 0px;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.form-row {
  padding-bottom: 30px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  border: solid 1px #224849;
  width: 953px;
  margin-top: 10px;
  justify-content: space-between;
}

.form-row label {
  margin-right: 10px;
  justify-content: center;
}

.add-participant-button {
  margin-top: 10px;
  padding: 8px;
  background-color: #224849;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

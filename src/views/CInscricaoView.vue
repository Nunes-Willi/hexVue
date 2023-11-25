<template>
  <div>
    <div class="header-image-container">
      <div class="background-image-overlay"></div>
      <img
        src="@/imagens/eifc.png"
        alt="Background Image"
        class="background-image"
      />
      <h2 class="hackathon-title">Hackathon IFC - Campus Araquari</h2>
    </div>

    <!-- Div com fundo branco envolvendo os formulários -->

    <!-- Formulário de informações -->
    <form class="info-form">
      <h2>Informações</h2>
      <p>Data: {{ eventDate }}</p>
      <p>Horário: {{ eventTime }}</p>
      <p>Local: {{ eventLocation }}</p>
      <button
        @click.prevent="showCancelConfirmation"
        class="cancel-registration-button"
      >
        Cancelar Inscrição
      </button>
    </form>

    <!-- Lista de participantes -->
    <div v-if="participants.length > 0" class="participants-list">
      <h2>Participantes</h2>
      <div
        v-for="participant in participants"
        :key="participant.id"
        class="participant-card"
      >
        <p><strong>Nome:</strong> {{ getParticipantName(participant.id) }}</p>
        <p><strong>E-mail:</strong> {{ participant.email }}</p>
        <button
          @click="removeParticipant(participant.id)"
          class="remove-participant-button"
        >
          Excluir
        </button>
      </div>
    </div>

    <!-- Modal de confirmação de cancelamento -->
    <div v-if="showCancelModal" class="cancel-modal">
      <p>Deseja realmente cancelar sua inscrição?</p>
      <button @click="cancelRegistration" class="modal-button">Sim</button>
      <button @click="hideCancelModal" class="modal-button">Não</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      participants: [],
      participantIdCounter: 1,
      teamName: "", // Adicione esta linha para vincular o nome da equipe
      eventDate: "01/01/2024", // Exemplo de data (substitua com a lógica real)
      eventTime: "10:00 AM", // Exemplo de horário (substitua com a lógica real)
      eventLocation: "Local do evento", // Exemplo de local (substitua com a lógica real)
      showCancelModal: false,
    };
  },
  mounted() {
    this.fetchParticipants();
  },
  methods: {
    async fetchParticipants() {
      try {
        const response = await axios.get(
          "https://hexback-dev-eeja.2.us-1.fl0.io/api/peoples/"
        );
        this.participants = response.data.results;
      } catch (error) {
        console.error("Erro ao buscar participantes:", error);
      }
    },
    getParticipantName(participantId) {
      const participant = this.participants.find((p) => p.id === participantId);
      return participant ? participant.nome : "Nome não encontrado";
    },
    removeParticipant(id) {
      this.participants = this.participants.filter(
        (participant) => participant.id !== id
      );
    },
    showCancelConfirmation() {
      this.showCancelModal = true;
    },
    hideCancelModal() {
      this.showCancelModal = false;
    },
    cancelRegistration() {
      // Lógica para cancelar a inscrição (a ser implementada)
      console.log("Inscrição cancelada!");
      this.showCancelModal = false;
    },
  },
};
</script>
<style scoped>
.teams-list {
  background-color: white;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
}

.team-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-top: 20px;
}

.team-card p {
  margin: 0;
}

.team-card ul {
  margin-top: 5px;
  margin-bottom: 10px;
  padding-left: 20px;
}

.team-card li {
  list-style-type: disc;
}

.forms-container {
  position: relative;
}

.info-form {
  position: absolute;
  bottom: 10;
  right: 0;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 800px; /* Ajuste a largura máxima conforme necessário */
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

.forms-container {
  display: flex;
  justify-content: space-between;
}

.participant-form,
.info-form {
  background-color: white;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  width: 48%;
}

.form-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.form-row label {
  margin-right: 10px;
}

.add-participant-button,
.remove-participant-button {
  margin-top: 10px;
  padding: 8px;
  background-color: #224849;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-registration-button {
  background-color: #ff5733;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
}

.participants-list {
  background-color: white;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
}

.participant-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-top: 20px;
}

.participant-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

/* Estilos para o modal de confirmação de cancelamento */
.cancel-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.modal-button {
  margin: 10px;
  padding: 8px 16px;
  background-color: #224849;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

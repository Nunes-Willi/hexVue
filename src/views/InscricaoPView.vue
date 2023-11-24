<template>
  <div>
    <!-- Título sobreposto à imagem de fundo do header -->
    <h1 class="events-title-overlay">Hackathon IFC-Araquari 2023</h1>

    <!-- Imagem de fundo do header com filtro preto escuro e título "Hackathon" -->
    <div class="header-image-container">
      <div class="background-image-overlay"></div>
      <img
        src="@/imagens/eifc.png"
        alt="Background Image"
        class="background-image"
      />
      <p class="corner-text data-text">Data</p>
      <p class="corner-text time-text">Horário</p>
      <p class="corner-text location-text">Local</p>
      <h2 class="hackathon-title">Hackathon</h2>
    </div>

    <!-- Div com fundo branco envolvendo a main -->
    <div class="main-wrapper">
      <!-- Main com formulário -->
      <main class="main-container">
        <!-- Título para o formulário -->
        <h2>Inscreva Sua Equipe</h2>

        <!-- Formulário de inscrição -->
        <form class="team-form">
          <!-- Campo Nome do Time -->
          <label for="teamName">Nome do Time:</label>
          <input type="text" id="teamName" name="teamName" />

          <!-- Cards para informações do participante -->
          <div v-for="participant in participants" :key="participant.id" class="participant-card">
            <h3>Participante {{ participant.id }}</h3>
            <div class="form-row">
              <label for="participantName">Nome:</label>
              <input type="text" :id="'participantName_' + participant.id" :name="'participantName_' + participant.id" />
            </div>
            <div class="form-row">
              <label for="participantAge">Idade:</label>
              <input type="text" :id="'participantAge_' + participant.id" :name="'participantAge_' + participant.id" />
            </div>
            <div class="form-row">
              <label for="participantEmail">E-mail:</label>
              <input type="text" :id="'participantEmail_' + participant.id" :name="'participantEmail_' + participant.id" />
            </div>
          </div>



          <!-- Botão Adicionar Participante -->
          <button @click="addParticipant" class="add-participant-button">Adicionar Participante</button>
        </form>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      participants: [{ id: 1 }, { id: 2 },{id: 3}, {id: 4}]
    };
  },
  methods: {
    addParticipant() {
      const nextId = this.participants.length + 1;
      this.participants.push({ id: nextId });
    }
  }
};
</script>

<style scoped>

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
  border-radius: 8px;
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
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
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

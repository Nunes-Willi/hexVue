<template>
  <div class="tudo">
    
    <!-- Imagem de fundo do header com filtro preto escuro e título "Hackathon" -->
    <div class="header-image-container">
    <!-- Título sobreposto à imagem de fundo do header -->
    <h1 class="events-title-overlay">Hackathon IFC-Araquari 2023</h1>

      <div class="background-image-overlay"></div>
      <img
        src="@/imagens/eifc.png"
        alt="Background Image"
        class="background-image"
      />
      <p class="corner-text data-text">Data</p>
      <p class="corner-text time-text">Horário</p>
      <p class="corner-text location-text">Local</p>
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

          <!-- Campo Nome do Participante -->
          <label for="participantName">Nome:</label>
          <input type="text" id="participantName" name="participantName" />

          <!-- Campo Idade do Participante -->
          <label for="participantAge">Idade:</label>
          <input type="text" id="participantAge" name="participantAge" />

          <!-- Campo E-mail do Participante -->
          <label for="participantEmail">E-mail:</label>
          <input type="text" id="participantEmail" name="participantEmail" />

          <!-- Botão Adicionar Participante -->
          <button class="add-participant-button">Adicionar Participante</button>
        </form>
      </main>
    </div>
  </div>
</template>

<style scoped>

.tudo{
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
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
  border-radius: 8px;
  display: flex;
  height: 500px;
  width: 500px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px; /* Defina a largura máxima da main */
 
}

.team-form {
  display: flex;
  flex-direction: column;
  margin-top: 20px; /* Adicione margem acima do formulário */
}

.team-form label {
  margin-top: 10px;
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

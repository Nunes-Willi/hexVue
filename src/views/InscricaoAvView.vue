<template>
  <div class="all">
    <div class="imglogo">
      <img src="@/imagens/Logo.png" alt="" class="img-logo" />
      <h2>Eventos Registrados</h2>
    </div>

    <main class="main-container">
      <!-- Single card -->
      <div class="card card1">
        <div class="card-content">
          <h2 class="event-title">Hackathon IFC - Araquari</h2>
          <p>Data: 24 de Nov</p>
          <p>Horário: 7:30</p>
          <p>Local: IFC Campus Araquari</p>
          <router-link to="/equipesreg" class="cerification-button"
            >Ver Equipes Cadastradas</router-link
          >
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.all{
  margin-top: -20px;
}
.imglogo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  color: white;
  background: linear-gradient(180deg, #000 0%, #224948 100%);
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #224849;
  position: relative;
  z-index: 1;
}

.card {
  width: 800px;
  padding: 20px;
  margin: 20px;
  border: 1px solid #333;
  border-radius: 8px;
  color: white;
  background-size: cover;
  background-position: center;
  position: relative;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}

.card1 {
  background-image: url("@/imagens/ifc2.png");
}

.card h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.card p {
  font-size: 14px;
}

.cerification-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 8px 16px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
}
</style>

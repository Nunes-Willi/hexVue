<template>
  <div class="all">
    <div class="header">
      <img src="../imagens/Logo.png" alt="" height="104" width="315" />
    </div>
    <div class="card">
      <h2>Hackathon IFC-Araquari 2023</h2>
      <p>Data 24 de nov</p>  
      <p>Horário 8:00</p>
      <div style="display: flex; flex-direction: row; justify-content: space-between;">
        <p>Local IFC Campus Araquari</p>
        <router-link to="/" class="nextpage">Verificar Inscrição</router-link>  
      </div>  
    </div>
  </div>
</template>

<style scoped>
.all {
  background: linear-gradient(180deg, #224948 0%, #061010 100%);
  width: 100%;
  height: 100%;
  padding-bottom: 910px;
}

.header {
  display: flex;
  justify-content: center;
}

.card {
  display: flex;
  background-image: url(../imagens/eifc.png);
  width: 20%;
  flex-direction: column;
  height: 200px;
  width: 900px;
  margin: auto;
  margin-top: 80px;
  border-radius: 30px;
}

h2 {
  color: white;
  margin-left: 10px;
  text-decoration: underline;
}

p {
  color: white;
  font-size: 15px;
  margin-left: 10px;
  margin-top: 0;
}

.nextpage{
  width: 15%;
  border: none;
  text-decoration: underline;
} 
</style>

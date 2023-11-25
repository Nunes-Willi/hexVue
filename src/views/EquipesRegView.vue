<template>
  <div class="all">
    <div class="up">
      <div class="logo_up">
        <img src="@/imagens/Logo.png" alt="Logo" class="logo" />
      </div>
      <div class="titulo">Times participantes</div>
    </div>
    <div class="main">
      <div class="times">
        <ul style="list-style: none">
          <router-link to="/notas"
            ><li><div class="inter">Red Dragons</div></li></router-link
          >
          <li><div class="inter">Wallhala</div></li>
          <li><div class="inter">AraquaIFC</div></li>
          <li><div class="inter">VSCoders</div></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.titulo {
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
}
li {
  color: #224948;
  background-color: white;
  margin-bottom: 5px;
  border-radius: 10px;
  margin-right: 40px;
  height: 45px;
  display: flex;
  flex-direction: row;
}

.inter {
  justify-content: center;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-weight: 600;
  font-size: 23px;
}

.logo {
  width: 350px; /* Adjust the width as needed */
  height: auto;
}

.all {
  background: linear-gradient(180deg, #000 0%, #224948 100%);
}
</style>

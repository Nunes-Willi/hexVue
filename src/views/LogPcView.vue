<template>
  <div class="all">
    <div class="container">
      <div class="form">
        <h1>Cadastro do participante</h1>
        <div class="inputs">
            <input type="text" placeholder="Nome:">
            <input type="number" placeholder="Idade:">
            <input type="email" placeholder="Email:">
            <input type="password" placeholder="Senha:" >
        </div>
        <button style="margin: 15px; border-radius: 18px; padding: 15px; background-color: #224948; color: white; border: none; font-weight: bold;">Cadastrar</button>
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
    color: #FFF;
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

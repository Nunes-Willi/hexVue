<template>
  <div class="all">
    <div class="logo">
      <img src="@/imagens/Logo.png" alt="" />
    </div>
    <div class="nome">Red Dragons</div>
    <div class="calculator">
      <div class="calc">
        <div class="criterios">
          <label for="criterios">Critérios</label>
          <span class="crit">Trabalho em equipe</span>
          <span class="crit">Interface/Aparencia</span>
          <span class="crit">Funcionalidade</span>
          <span class="crit">Responsividade</span>
        </div>
        <div class="notas">
          <label for="nota1">Notas</label>
          <input
            v-model="nota1"
            type="number"
            id="nota1"
            class="calculator-input"
          />
          <input
            v-model="nota2"
            type="number"
            id="nota2"
            class="calculator-input"
          />
          <input
            v-model="nota3"
            type="number"
            id="nota3"
            class="calculator-input"
          />
          <input
            v-model="nota4"
            type="number"
            id="nota4"
            class="calculator-input"
          />
        </div>
      </div>
      <button @click="calcularMedia" class="calculator-button">
        Lançar Nota
      </button>
      <p v-if="media !== null" class="calculator-result">
        Média: {{ media.toFixed(2) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nota1: null,
      nota2: null,
      nota3: null,
      nota4: null,
      media: null,
    };
  },
  methods: {
    calcularMedia() {
      if (
        this.nota1 !== null &&
        this.nota2 !== null &&
        this.nota3 !== null &&
        this.nota4 !== null
      ) {
        const notas = [
          parseFloat(this.nota1),
          parseFloat(this.nota2),
          parseFloat(this.nota3),
          parseFloat(this.nota4),
        ];
        const soma = notas.reduce((total, nota) => total + nota, 0);
        this.media = soma / notas.length;
      } else {
        this.media = null;
      }
    },
  },
};
</script>

<style scoped>
.all {
  background: linear-gradient(180deg, #000 0%, #224948 100%);
}
.nome {
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 45px;
  font-weight: 800;
  color: #04AC9F;
}
.criterios {
  display: flex;
  flex-direction: column;
  margin-right: 100px;
}
.crit {
  margin: 8.8px;
  margin-right: 200px;
}
.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
  z-index: 1;
  margin-top: 20px;
  color: #224849;
  background-color: white;
  margin-left: 500px;
  margin-right: 500px;
  border-radius: 15px;
}
.calc {
  display: flex;
  flex-direction: row;
  align-items: center; /* Centraliza os elementos verticalmente */
  justify-content: space-between; /* Adicionado para espalhar os elementos horizontalmente */
}
.calculator-input {
  padding: 8px;
  border: solid 1px #224849;
  width: 50px;
  margin-bottom: 10px;
  background-color: transparent;
}

.calculator-button {
  padding: 5px ;
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #224948;
  background-color: #224849;
  width: 130px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
}

.calculator-result {
  font-size: 18px;
  font-weight: bold;
  color: #224849;
  margin-top: 10px;
}
.notas {
  display: flex;
  flex-direction: column;
}
</style>

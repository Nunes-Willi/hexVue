<script>
import AutoresApi from "@/api/autor";
const autoresApi = new AutoresApi();
export default {
  data() {
    return {
      autores: [],
      autor: {},
    };
  },
  async created() {
    this.autores = await autoresApi.buscarTodosOsAutores();
  },
  methods: {
    async salvar() {
      if (this.autor.id) {
        await autoresApi.updatAutor(this.autor);
      } else {
        await autoresApi.addAutores(this.autor);
      }
      this.autor = {};
      this.autores = await autoresApi.buscarTodosOsAutores();
    },
    editar(autor) {
      Object.assign(this.autor, autor);
    },
    async excluir(autor) {
      await autoresApi.deletAutor(autor.id);
      this.autores = await autoresApi.buscarTodosOsAutores();
    },
  },
};
</script>

<template>
  <h1>Autor</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="autor.nome_autor" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="autor in autores" :key="autor.id">
      <span @click="editar(autor)">
        ({{ autor.id }}) - {{ autor.nome_autor }} -
      </span>
      <button @click="excluir(autor)">X</button>
    </li>
  </ul>
</template>

<style></style>

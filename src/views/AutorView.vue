<script></script>

<template>
  <h1>Autor</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="autor.descricao" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="autor in autors" :key="autor.id">
      <span @click="editar(autor)">
        ({{ autor.id }}) - {{ autor.descricao }} -
      </span>
      <button @click="excluir(autor)">X</button>
    </li>
  </ul>
</template>

<style></style>

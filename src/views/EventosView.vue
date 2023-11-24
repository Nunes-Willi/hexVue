<template>
    <div>
      <div class="logo-container">
        <img src="@/imagens/Logo.png" alt="Logo" class="logo" />
      </div>
  
      <!-- Reader vazio com imagem de fundo -->
      <div class="empty-reader">
        <img src="@/imagens/evento.png" alt="Background Image" class="background-image" />
      </div>
  
      <!-- Main com cards sobre a imagem de fundo -->
      <main class="main-container">
        <!-- Primeiro card -->
        <div class="card">
          <h2>Card 1</h2>
          <p>Descrição do card 1.</p>
        </div>
  
        <!-- Segundo card -->
        <div class="card">
          <h2>Card 2</h2>
          <p>Descrição do card 2.</p>
        </div>
  
        <!-- Terceiro card -->
        <div class="card">
          <h2>Card 3</h2>
          <p>Descrição do card 3.</p>
        </div>
      </main>
    </div>
  </template>
  
  <style scoped>
    /* ... (estilos existentes) ... */
  
    .empty-reader {
      position: relative;
      width: 100%;
      height: 400px; /* Altura desejada para a imagem de fundo */
      overflow: hidden;
    }
  
    .background-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  
    .main-container {
      display: flex;
      justify-content: space-around;
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.8); /* Fundo do main */
      position: relative;
      z-index: 1; /* Garante que os cards ficarão acima da imagem de fundo */
    }
  
    .card {
      width: 300px;
      padding: 20px;
      margin: 20px;
      border: 1px solid #333;
      border-radius: 8px;
      background-color: white; /* Fundo do card */
    }
  
    .card h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }
  
    .card p {
      font-size: 14px;
    }
  </style>
  
import axios from "axios";
export default class AvaliadorApi {
  async buscarTodosAva() {
    const { data } = await axios.get("/avaliadores/");
    return data.results;
  }
  async adicionarAvaliador(avaliador) {
    const { data } = await axios.post("/avaliadores/", avaliador);
    return data;
  }

//   async atualizarEditora(editora) {
//     const { data } = await axios.put(`/editoras/${editora.id}/`, editora);
//     return data;
//   }
//   async excluirEditora(id) {
//     const { data } = await axios.delete(`/editoras/${id}/`);
//     return data;
//   }
}
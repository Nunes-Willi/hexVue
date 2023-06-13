import axios from "axios";
export default class LivrosApi {
  async buscarTodosOsLivros() {
    const { data } = await axios.get("/livros/");
    return data;
  }

  async addLivro(livro) {
    const { data } = await axios.post("/livros/", livro);
    return data;
  }

  async updatLivro(livro){
    const { data } = await axios.put(`/livros/${livro.id}/`, livro);
    return data
  }

  async deleteLivro(id){
    const { data } = await axios.delete(`/livros/${id}/`);
    return data
  }
}

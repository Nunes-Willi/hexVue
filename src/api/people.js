import axios from "axios";
export default class PeopleApi {
  async buscarTodos() {
    const { data } = await axios.get("/peoples/");
    return data.results;
  }

  async addPeople(people) {
    const { data } = await axios.post("/peoples/", people);
    return data;
  }

  // async updatLivro(livro){
  //   const { data } = await axios.put(`/livros/${livro.id}/`, livro);
  //   return data
  // }

  // async deleteLivro(id){
  //   const { data } = await axios.delete(`/livros/${id}/`);
  //   return data
  // }
}

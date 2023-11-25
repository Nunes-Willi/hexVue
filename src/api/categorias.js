import axios from "axios";
export default class EmpresasasApi {
  async buscarTodasAsEmpresas() {
    const { data } = await axios.get("/empresas/");
    return data.results;
  }
  async adicionarEmpresas(empresa) {
    const { data } = await axios.post("/empresas/", empresa);
    return data;
  }
//   async atualizarCategoria(categoria) {
//     const { data } = await axios.put(`/categorias/${categoria.id}/`, categoria);
//     return data;
//   }
//   async excluirCategoria(id) {
//     const { data } = await axios.delete(`/categorias/${id}/`);
//     return data;
//   }
}

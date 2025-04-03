"use strict";
// var formTime = document.getElementById("formTime") as HTMLFormElement;
// var tabelaTime = document.getElementById("tbTimes") as HTMLElement;
// var times = JSON.parse(localStorage.getItem("times") || "[]");
// var inputAutor = document.getElementById("inputAutor") as HTMLInputElement; // Campo de entrada do autor
// var btnBuscarAutor = document.getElementById("btnBuscarAutor") as HTMLButtonElement; // Botão de busca
// interface Time {
//   id: number;
//   titulo: string;
//   paginas: string;
//   genero: string;
//   autor: string;
// }
// // Função para atualizar a tabela de times
// function atualizarTabelaTimes() {
//   tabelaTime.innerHTML = "";
//   // Filtrando os times com base no autor
//   const autorFiltro = inputAutor.value.toLowerCase();
//   const timesFiltrados = times.filter((t: Time) => t.autor.toLowerCase().includes(autorFiltro));
//   timesFiltrados.forEach((t: Time) => {
//     tabelaTime.innerHTML += `
//       <tr>
//            <td>${t.titulo}</td>
//            <td>${t.paginas}</td>
//            <td>${t.genero}</td>
//            <td>${t.autor}</td>
//            <td>
//                 <button class="btn-teste" onclick="editarTime(${t.id})"> Editar </button>
//                 <button class="btn-teste" onclick="removerTime(${t.id})"> Remover </button>
//            </td>
//       </tr>
//     `;
//   });
// }
// // Função de editar um time
// function editarTime(id: number) {
//   const time = times.find((t: Time) => t.id == id);
//   if (!time) return;
//   (document.getElementById("titulo") as HTMLInputElement).value = time.titulo;
//   (document.getElementById("paginas") as HTMLInputElement).value = time.paginas;
//   (document.getElementById("genero") as HTMLInputElement).value = time.genero;
//   (document.getElementById("autor") as HTMLInputElement).value = time.autor;
//   const timeIndex = times.findIndex((t: Time) => t.id == id);
//   if (timeIndex !== -1) {
//     times.splice(timeIndex, 1);
//   }
//   salvarLocalStorageTimes();
//   atualizarTabelaTimes();
// }
// // Função de remover um time
// function removerTime(id: number) {
//   const timeIndex = times.findIndex((t: Time) => t.id == id);
//   if (timeIndex !== -1) {
//     times.splice(timeIndex, 1);
//   }
//   salvarLocalStorageTimes();
//   atualizarTabelaTimes();
// }
// // Função para salvar os dados no LocalStorage
// function salvarLocalStorageTimes() {
//   let timesSalvar = JSON.stringify(times);
//   localStorage.setItem("times", timesSalvar);
// }
// // Função para salvar um novo time
// function salvarTimes(event: Event) {
//   event?.preventDefault();
//   const novoTime: Time = {
//     id: Date.now(),
//     titulo: (document.getElementById("titulo") as HTMLInputElement).value,
//     paginas: (document.getElementById("paginas") as HTMLInputElement).value,
//     genero: (document.getElementById("genero") as HTMLInputElement).value,
//     autor: (document.getElementById("autor") as HTMLInputElement).value,
//   };
//   times.push(novoTime);
//   atualizarTabelaTimes();
//   salvarLocalStorageTimes();
//   formTime.reset();
//   alert('Cadastrado com sucesso');
// }
// // Evento de clique no botão de buscar
// btnBuscarAutor.addEventListener("click", atualizarTabelaTimes);
// formTime.addEventListener("submit", salvarTimes);
// atualizarTabelaTimes();
var formTime = document.getElementById("formTime");
var tabelaTime = document.getElementById("tbTimes");
var times = JSON.parse(localStorage.getItem("times") || "[]");
var inputAutor = document.getElementById("inputAutor"); // Campo de entrada do autor
var btnBuscarAutor = document.getElementById("btnBuscarAutor"); // Botão de busca
// Função para atualizar a tabela de times
function atualizarTabelaTimes() {
    tabelaTime.innerHTML = "";
    // Filtrando os times com base no autor
    const autorFiltro = inputAutor.value.toLowerCase();
    const timesFiltrados = times.filter((t) => t.autor.toLowerCase().includes(autorFiltro));
    timesFiltrados.forEach((t) => {
        tabelaTime.innerHTML += `
      <tr>
           <td>${t.titulo}</td>
           <td>${t.paginas}</td>
           <td>${t.genero}</td>
           <td>${t.autor}</td>
           <td>
                <button class="btn-teste" onclick="editarTime(${t.id})"> Editar </button>
                <button class="btn-teste" onclick="removerTime(${t.id})"> Remover </button>
           </td>
      </tr>
    `;
    });
}
// Função de editar um time
function editarTime(id) {
    const time = times.find((t) => t.id == id);
    if (!time)
        return;
    document.getElementById("titulo").value = time.titulo;
    document.getElementById("paginas").value = time.paginas;
    document.getElementById("genero").value = time.genero;
    document.getElementById("autor").value = time.autor;
    const timeIndex = times.findIndex((t) => t.id == id);
    if (timeIndex !== -1) {
        times.splice(timeIndex, 1);
    }
    salvarLocalStorageTimes();
    atualizarTabelaTimes();
}
// Função de remover um time
function removerTime(id) {
    const timeIndex = times.findIndex((t) => t.id == id);
    if (timeIndex !== -1) {
        times.splice(timeIndex, 1);
    }
    salvarLocalStorageTimes();
    atualizarTabelaTimes();
}
// Função para salvar os dados no LocalStorage
function salvarLocalStorageTimes() {
    let timesSalvar = JSON.stringify(times);
    localStorage.setItem("times", timesSalvar);
}
// Função para salvar um novo time
function salvarTimes(event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    const novoTime = {
        id: Date.now(),
        titulo: document.getElementById("titulo").value,
        paginas: document.getElementById("paginas").value,
        genero: document.getElementById("genero").value,
        autor: document.getElementById("autor").value,
    };
    times.push(novoTime);
    atualizarTabelaTimes();
    salvarLocalStorageTimes();
    formTime.reset();
    alert('Cadastrado com sucesso');
}
// Evento de clique no botão de buscar
btnBuscarAutor.addEventListener("click", atualizarTabelaTimes);
formTime.addEventListener("submit", salvarTimes);
atualizarTabelaTimes();

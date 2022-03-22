const search = document.querySelector(".search");
const search2 = document.querySelector(".search2");

const list = document.querySelector(".list");
const list2 = document.querySelector(".list2");

const profile = document.querySelector(".profile");

const add = document.querySelector(".add");
const add2 = document.querySelector(".add2");

const edit = document.querySelector(".edit");
const edit2 = document.querySelector(".edit2");

list.addEventListener("click", function () {
  profile.innerHTML = `
    <h1>Lista</h1>
    <list-profile></list-profile>
  `;
});

search.addEventListener("click", function () {
  profile.innerHTML = `<search-profile></search-profile>`;
});

list2.addEventListener("click", function () {
  profile.innerHTML = `
  <h1>Lista</h1>
  <list-profile></list-profile>
  <script src="js/list_profile.js"></script>
`;
});

search2.addEventListener("click", function () {
  profile.innerHTML = `<search-profile></search-profile>`;
});

add.addEventListener("click", function () {
  profile.innerHTML = `
  <h1>Adicionar Usuario</h1>
    <form-profile></form-profile> `;
});
add2.addEventListener("click", function () {
  profile.innerHTML = `
  <h1>Adicionar Usuario</h1>
    <form-profile></form-profile>`;
});

edit.addEventListener("click", function () {
  profile.innerHTML = `
    <h1>Editar Usuario</h1>
    <edit-profile></edit-profile> `;
});

edit2.addEventListener("click", function () {
  profile.innerHTML = `
    <h1>Editar Usuario</h1>
    <edit-profile></edit-profile>`;
});


class EditProfile extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.styles());

    const form = this.createForm();
    const optForm = this.createOptForm();

    form.appendChild(optForm)

    shadow.appendChild(form)
  }

  createForm() {
    const form = document.createElement("form");
    form.classList.add("add-user");
    return form;
  }

  createOptForm() {
    const url = "http://localhost:3000/api"
    const optForm = document.createElement("div");
    optForm.classList.add("opt-form");

    const lbId = document.createElement("label");
    lbId.innerText = "Id"
    const inpId = document.createElement('input')
    inpId.classList.add('inp')

    const lbName = document.createElement("label");
    lbName.innerText = "Nome"
    const inpName = document.createElement('input')
    inpName.classList.add('inp')

    const lbUser = document.createElement("label");
    lbUser.innerText = "User"
    const inpUser = document.createElement('input')
    inpUser.classList.add('inp')

    const button = document.createElement('button')
    button.classList.add('btn')
    button.innerText = "Editar"

    button.addEventListener('click', (e) =>{
      e.preventDefault(e)
      console.log(inpUser.value)
      axios.put(`${url}/${inpId.value}`, {
        name: inpName.value,
        user: inpUser.value
      })
        .then(response => {
          alert(JSON.stringify(response.data))
        })
        .catch(err => {console.log(err)})
    })
    
    optForm.appendChild(lbId)
    optForm.appendChild(inpId)
    optForm.appendChild(lbName)
    optForm.appendChild(inpName)
    optForm.appendChild(lbUser)
    optForm.appendChild(inpUser)
    optForm.appendChild(button)

    return optForm
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .add-user{
      display: flex;
      flex-direction: column;
      gap: 3rem;
      width: 100%;
      height: 100vh;
    }
    
    .opt-form{
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 1rem;
    }
    
    .opt-form label{
      font-size: 0.75rem;
      font-weight: 500, medium;
    }
    
    .opt-form input{
      width: 90%;
      height: 2rem;
      background-color: black;
      padding: 20px;
      border: none;
      border-radius: 0.75rem;
      color: white;
    
      font-weight: 700, bold;
      font-size: 1rem;
    }

    .inp{
      width: 90%;
      height: 2rem;
      background-color: black;
      padding: 20px;
      border: none;
      border-radius: 0.75rem;
      color: white;
    
      font-weight: 700, bold;
      font-size: 1rem;
    }

    .btn{
      width: 6.25rem;
      height: 3rem;
      background-color: green;
      border: none;
      border-radius: 0.75rem;
      color: white;
    }
    .btn:hover{
      background-color: darkgreen;
    }

    .active input{
      color: green;
    }
    `;
    return style;
  }
}

customElements.define("edit-profile", EditProfile)


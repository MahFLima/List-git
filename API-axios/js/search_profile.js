class SearchProfile extends HTMLElement{
  constructor(){
    super();

    this.build();
  }

  build(){
    const shadow = this.attachShadow({ mode: 'open'})

    shadow.appendChild(this.styles())

    const search = this.createSearch()

    shadow.appendChild(search)
  }

  createSearch(){

    return search
  }

  createSearch(){
    const url = "http://localhost:3000/api"
    const search = document.createElement("div")
    search.classList.add('search-profile')

    const form = document.createElement("form")
    form.classList.add("search-form")
    const lbSearch = document.createElement("label")
    lbSearch.innerText = 'Id'
    const inpSearch = document.createElement("input")
    const button = document.createElement("button")
    button.classList.add('btn')
    button.innerText = '🔎'

    const buttonDel = document.createElement('button')
    buttonDel.classList.add('btn')
    buttonDel.innerText = '🗑️' 
  
    const searchUser = document.createElement("div")
    searchUser.classList.add("search-user")
    const imageUser = document.createElement("img")
    imageUser.src = 'https://picsum.photos/200/300'
    imageUser.classList.add('imgUser')
    const spanUser = document.createElement('span')
    const nameUser = document.createElement('h4')
    nameUser.innerText = 'Nome Completo' 
    const userUser = document.createElement('p')
    userUser.innerText = 'User Github'
    const userBio = document.createElement('p')
    userBio.innerText = 'BIO'

    button.addEventListener('click', (e) => {
      e.preventDefault()
      const urlGit = 'https://api.github.com/users'

      axios.get(`${url}/${inpSearch.value}`)
      .then(response => {
        const userUsertxt = response.data.user

        axios.get(`${urlGit}/${userUsertxt}`)
        .then(response => {
          nameUser.innerText = response.data.name
          imageUser.src = response.data.avatar_url
          userUser.src = response.data.user
          userBio.innerText = response.data.bio
        })
        .catch(err => {
          imageUser.src = 'https://picsum.photos/200/300'
          nameUser.innerText = 'Nome Completo'
          userUser.innerText = 'User Github'
          userBio.innerText = 'BIO'
          alert(JSON.stringify('Usuario não encontrado'))
        })
      })
      .catch(err => {console.log(err)})
    })

    buttonDel.addEventListener('click', (e) => {
      e.preventDefault()
      axios.delete(`${url}/${inpSearch.value}`)
        .then(response => {
          imageUser.src = 'https://picsum.photos/200/300'
          nameUser.innerText = 'Nome Completo'
          userUser.innerText = 'User Github'
          userBio.innerText = 'BIO'
          alert(JSON.stringify(response.data))
        })
        .catch(err => {console.log(err)})
    })

    search.appendChild(form)
    search.appendChild(searchUser)

    form.appendChild(lbSearch)
    form.appendChild(inpSearch)
    form.appendChild(button)
    form.appendChild(buttonDel)

    searchUser.appendChild(imageUser)
    searchUser.appendChild(spanUser)

    spanUser.appendChild(nameUser)
    spanUser.appendChild(userUser)
    spanUser.appendChild(userBio)
    
    return search
  }


  styles(){
    const style = document.createElement('style')
    style.textContent = `
      .search-profile{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        height: 100vh;
        color: white;
      }
      .search-form{
        display: flex;
        gap: 1rem;
        align-items: center;
        width: 100%;
      }

      .search-form label{
        font-size: 0.75rem;
        font-weight: 500, medium;
      }
      .search-form input{
        width: 90%;
        height: 1rem;
        background-color: black;
        padding: 20px;
        border: none;
        border-radius: 0.75rem;
        color: white;
      
        font-weight: 700, bold;
        font-size: 1rem;
      }

      .search-user{
        display: flex;
        gap: 1.5rem;
        background-color: black;
        padding: 3rem;
        border-radius: 0.75rem;
        align-items: center;
        color: white;
      }

      .imgUser{
        width: max(45px, min(135px, 22vw));
        height: max(45px, min(135px, 22vw));
        border-radius: 50%;
        object-fit: cover;
      }

      .btn{
        width: 3rem;
        height: 3.5rem;
        background-color: black;
        border: none;
        border-radius: 0.75rem;
        cursor: pointer;
      }
    `
    return style
  }
}

customElements.define("search-profile", SearchProfile)
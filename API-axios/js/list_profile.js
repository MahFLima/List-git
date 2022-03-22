class ListProfile extends HTMLElement {
  constructor(){
    super()

    this.build();
  }

  build(){
    const shadow = this.attachShadow({ mode: 'open'})

    shadow.appendChild(this.styles())

    const users = this.createUsers()
    const userInfo = this.createUserInfo()

    userInfo.forEach(userInfo => users.appendChild(userInfo))

    shadow.appendChild(users)
  }

  createUsers(){
    const users = document.createElement('div');
    users.className = 'users'
    return users;
  }

  createUserInfo(){
    const createUserInfo = (_, id) => {
      
      const userInfo = document.createElement('div')
      userInfo.classList.add('user-info')
      userInfo.setAttribute("data-value", Number(id) + 1)

      const imgUser = document.createElement('img')
      imgUser.classList.add('user-img')
      imgUser.src = 'https://source.unsplash.com/random'

      const spanInfo = document.createElement('span')
      spanInfo.classList.add('info-span')
      const nameUser = document.createElement('h4')
      nameUser.innerText = 'Nome Completo' 
      const userUser = document.createElement('p')
      userUser.innerText = 'User Github'
      const userBio = document.createElement('p')
      userBio.innerText = 'BIO'

      userInfo.appendChild(imgUser)
      userInfo.appendChild(spanInfo)
      spanInfo.appendChild(nameUser)
      spanInfo.appendChild(userUser)
      spanInfo.appendChild(userBio)

      return userInfo
    }

    return Array.from(({ length: 2 }), createUserInfo)
  }

  styles(){
    const style = document.createElement('style')
    style.textContent = `
    .users{
      display: flex;
      flex-direction: column;
      gap: 3rem;
      width: 100%;
      height: 100%;
      color: white;
    }
    .user-info{
      display: flex;
      gap: 1rem;
      background-color: black;
      padding: 3rem;
      border-radius: 0.75rem;
      align-items: center;
    }
    .user-img{
      width: max(45px, min(135px, 22vw));
      height: max(45px, min(135px, 22vw));
      border-radius: 50%;
      object-fit: cover;
    }

    `
    return style
  }

}

customElements.define("list-profile", ListProfile)
const getData = () => {

  removePeople()

  let api = "https://randomuser.me/api/?results=10"

  axios.get(api)
  .then((res) => {
    console.log(res.data.results)
    const response = res.data.results

    response.forEach((person) => {

      console.log(person.picture.large)

      const peopleDiv = document.querySelector('.people')

      const personDiv = document.createElement('div')
      peopleDiv.append(personDiv)
      personDiv.classList = '.person-div'

      const name = document.createElement('p')  
      
      const firstName = person.name.first
      const lastName = person.name.last
      name.innerHTML = `Name: ${firstName} ${lastName}`
      personDiv.append(name)


      const img = document.createElement('img')
      const largeImg = person.picture.large
      img.setAttribute('src', largeImg)
      personDiv.append(img)


    })

  })
  
}

const button = document.querySelector('button')
button.addEventListener('click', getData)

function removePeople() {
  const removeDiv = document.querySelector('.people')
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}
// function getData() {
//     return fetch('https://reqres.in/api/users?page=2' ,{
//         method: "GET",
//         body:JSON.stringify(),
//         headers : {"content-type":'application/json'}
//     })
// }


// getData()
// .then(res => res.JSON)
// .then(data=> console.log(data))
// .catch((error) => console.log(error))

fetch('https://reqres.in/api/users?page=1' , {
    method: 'GET',
    body: JSON.stringify(),
    headers: {'content-Type': 'application'},
})
.then(res => res.json())
.then(data => posts(data.data))
.catch(err => console.log(err))

const body = document.querySelector('body')

function posts(arr) {
    const row = document.createElement('div')
    row.classList.add('row')
    arr.map(item => {

    const title = document.createElement('h2')
    const text = document.createElement('p')
    const link = document.createElement('a')
    const card = document.createElement('div')
    const img = document.createElement('img')

    title.innerHTML = item.first_name
    img.src = item.avatar
    link.textContent = item.email   

    card.classList.add('card')
    card.appendChild(img)
    card.appendChild(title)
    card.appendChild(text)
    card.appendChild(link)
    row.appendChild(card)
    })

   
    


    // console.log(arr);
    body.appendChild(row)
}

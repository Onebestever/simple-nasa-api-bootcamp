//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//Xp2LjEDmCsG3hwAnAWyNdY16guLVNspGRBZYnR6E
//document.querySelector("#searchPicture").addEventListener("click", Get Picture)
//function weather(){
//     let date = document.querySelector('#date').value
//     let state = document.querySelector('#state').value
//     let country = document.querySelector('#country').value
//     let location = city + "," + state + "," + country
//     const url = ("https://api.openweathermap.org/data/2.5/weather?q=" + `${location}` + "&appid=1fb417601f3468cbcbf87da396f4a10c")

// fetch(url)
// .then(res => res.json()) 
// .then(data => {
// kelvinToFarenheit(data.main.temp)
// })
// }

// document.querySelector("#searchPicture").addEventListener("click", getPicture)



// function getPicture(){
//   let date = document.querySelector('#date').value
//     const url = ('https://api.nasa.gov/planetary/apod?api_key=' + `${'date'}` + 'HISyTUhSlUuVB99MkXcDdxgmplDb5ntzikJVe53f')
  
//       fetch(url)
//         .then(res => res.json())
//          .then(data => {
//           console.log(data)
//       })
 
// }





//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector("#searchPicture").addEventListener("click", getPicture)



function getPicture(){
  let date = document.querySelector('#date').value
  // let image = document.querySelector
    console.log()
      const url = ('https://api.nasa.gov/planetary/apod?api_key=Xc9i07GyFJ0oYYnNNNNYdlPhjYzB4wl7IKFjdW7H' + `&date=${date}`)
  
      fetch(url)
        .then(res => res.json())
         .then(data => {
          console.log(data)
      })
 
}


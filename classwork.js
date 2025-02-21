//fetch (inbuilt)
//axios (third party)
//jquery (libary)

// promise
// pending, rejected, fulfilled

// async function getCountries(){
//     const result = await fetch('https://restcountries.com/v3.1/all')
//     const data = await result.json()
//     console.log(data)
// }

// getCountries()


// https://restcountries.com/v3.1/name/australia

const inputCountryEl = document.querySelector('#country-input')
const btnEl = document.querySelector('#btn')
const countryNameEl = document.querySelector('#country-name')
const coaEl = document.querySelector('#coa')
const mapLinkEl = document.querySelector('#map-link')



async function getOneCountry(country){
    const result = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const data = await result.json()
    countryNameEl.textContent=data[0].name.official
    coaEl.setAttribute('src',data[0].coatOfArms.png)
    mapLinkEl.setAttribute('href',data[0].maps.googleMaps)
    console.log(data[0].maps.googleMaps)
}

btnEl.addEventListener('click',function(){
    console.log(inputCountryEl.value)
    getOneCountry(inputCountryEl.value)
})



const aboutme={
    name:"ayo",
    hobbies:{
        morning:"dancing",
        afternoon:"eating",
        evening:{
            nine_pm:"appetizer",
            ten_pm:"main course"
        }
    }
}
console.log(aboutme.hobbies.evening.nine_pm)
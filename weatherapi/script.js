const button = document.querySelector("#click-id")
const cityname = document.querySelector("#input-id")
const country = document.querySelector("#country-id")
const city = document.querySelector("#city-id")
const timetemp = document.querySelector("#time-temp-id")

async function getdata(long,latt){
  const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=f614e58913864e4c8d4135849252709&q=${latt},${long}&aqi=yes`)
  return await data.json()
}

   let mausam

    navigator.geolocation.getCurrentPosition(async (position)=>{
        mausam= await getdata(position.coords.longitude,position.coords.latitude)
        console.log(mausam)
   },(error)=>{
    console.log(error)
   })



button.addEventListener("click" , async ()=>{
   country.innerText= mausam.location.country
   city.innerText=mausam.location.name
   timetemp.innerText=`Temperature is ${mausam.current.temp_c} and time is ${mausam.current.last_updated}`
   console.log(mausam)
   localStorage.setItem("CityName",cityname.value)

})
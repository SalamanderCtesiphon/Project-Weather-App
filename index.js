//appid=9931662c9d29a785239ccf3724e38c86
// google api key AIzaSyA5vJjh-HmBMCGr_iDWEQPVvcXAVQOkFlc


const searchElement = document.querySelector('[data-city-search]')
const searchBox = new google.maps.places.SearchBox(searchElement)
searchBox.addListener('places_changed', () => {
    const place = searchBox.getPlaces()[0]
    if (place == null) return
    const latitude = place.geometry.location.lat()
    const longitude = place.geometry.location.lng()
    fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        latitude: latitude,
        longitude: longitude
        })
    }).then(res => res.json())
        .then(data => {
        setWeatherData(data, place.formatted_address)
        })
    }
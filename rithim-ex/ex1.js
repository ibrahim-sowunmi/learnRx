var nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }
  
  const addSpeaker = speakerName => nestedObject.speakers.push({
    name: speakerName
  })
  
  const addLanguage = (lang, langHi) => {nestedObject.data.languages[lang] = {
      hello: langHi
    }
  }
  
  const addCountry = (country, capital, population) => {
    nestedObject.data.continents.europe.countries[country] = {
      capital: capital,
      population: population
    }
  }
  
  addCountry("somalia", "Mogadishu", 90000)
  
  console.log(nestedObject.data.continents.europe.countries);
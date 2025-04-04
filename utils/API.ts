import {API_lat_lon,API_Temperatura, PhoneAPI, CountryAPI} from "./types.ts";

export const validatephone = async(phone:string):Promise<PhoneAPI> => {
    const API_KEY = Deno.env.get("API_KEY")
    if(!API_KEY) throw new Error("Error con API KEY")
    const url = `https://api.api-ninjas.com/v1/validatephone?number=${phone}`
    const data = await fetch(url,{
        headers: {
            'X-Api-Key': API_KEY
        }
    })
    const result:PhoneAPI = await data.json()
    return result
}

export const getCapital = async(country:string): Promise<CountryAPI> => {
    const API_KEY = Deno.env.get("API_KEY")
    if(!API_KEY) throw new Error("Error con API KEY")
    const url = `https://api.api-ninjas.com/v1/country?name=${country}`
    const data = await fetch(url,{
        headers: {
            'X-Api-Key': API_KEY
        }
    })
    const result:CountryAPI[] = await data.json()

    return result[0]
}

export const getCity = async(city:string): Promise<API_lat_lon> => {
    const API_KEY = Deno.env.get("API_KEY")
    if(!API_KEY) throw new Error("Error con API KEY")
    const url = `https://api.api-ninjas.com/v1/city?name=${city}`
    const data = await fetch(url,{
        headers: {
            'X-Api-Key': API_KEY
        }
    })
    const result:API_lat_lon[] = await data.json()
    return result[0]
}

export const getWeather = async(lat:number, lon:number): Promise<API_Temperatura> => {
    const API_KEY = Deno.env.get("API_KEY")
    if(!API_KEY) throw new Error("Error con API KEY")
    const url = `https://api.api-ninjas.com/v1/city?lat=${lat}&lon=${lon}`
    const data = await fetch(url,{
        headers: {
            'X-Api-Key': API_KEY
        }
    })
    const result: API_Temperatura = await data.json() 
    return result
}
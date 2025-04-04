//https://api-ninjas.com/api/validatephone
export type PhoneAPI = {
    is_valid: boolean
    country: string
}

export type CountryAPI = {
    name: string,
    capital:string
}

export type API_lat_lon = {
    name:string
    latitude: number,
    longitude: number,
    country: string
}

export type API_Temperatura = {
    temp: number
}

export type City = {
    name: string
    country: string
    temp: string
}
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { getCity, getWeather, getCapital } from "../../utils/API.ts";
import { City } from "../../utils/types.ts";

/*
export const handler:Handlers = {
    GET: async(_req: Request, ctx: FreshContext<unknown,City>) => {
        const {city} = ctx.params
        const resultCity = await getCity(city)
        const resultWeather = await getWeather(resultCity.latitude, resultCity.longitude)
        const country = await getCapital(resultCity.country)
        return({
            ...resultCity,
            temp: resultWeather.temp,
            country: country.name
        })
    }
}*/

export default (props:PageProps<City>) => {
    const {name, country, temp} = props.data
    return (
        <div>
            <h2>{name}</h2>
            <h3>Pais: <a href={`/country/${country}`}> {country}</a></h3>
            <h4>Temperatura: {temp}</h4>
        </div>
    )
}
import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import { getCapital } from "../../utils/API.ts";
import { CountryAPI } from "../../utils/types.ts";

export const handler: Handlers ={
    GET: async(_req:Request,ctx: FreshContext<unknown,CountryAPI>) => {
        const {country} = ctx.params
        const result:CountryAPI = await getCapital(country)
        return ctx.render(result)
    }
} 

export default (props:PageProps<CountryAPI>) => {
    
}


import { FreshContext, Handlers } from "$fresh/server.ts";
import { validatephone } from "../utils/API.ts";
import { PhoneAPI } from "../utils/types.ts";

export const handler:Handlers = {
  GET:async(req:Request, ctx: FreshContext<unknown,PhoneAPI>) => {
    const url = new URL(req.url)
    const phone = url.searchParams.get("phone")
    if(!phone) return ctx.render()
    const result:PhoneAPI = await validatephone(phone)
    return ctx.render(result)
  }
}


export default function Home() {
  return (
    <div> Hola </div>
  )
}
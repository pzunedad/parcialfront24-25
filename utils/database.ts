import { MongoClient, Collection } from "mongodb"
import {  } from "./types.ts";

//let Collection: Collection<>

export const initMongoDB = async() => {

    if(Collection) return Collection

    const url = Deno.env.get("MONGO_URL")
    if(!url) throw new Error("Error con MONGO_URL")
    
    const client = new MongoClient(url)
    await client.connect()
    console.log("Conectado a mongodb")

    const db = client.db("inicio")
  //  Collection = db.collection<>("places")
    
    return 
}

export default initMongoDB
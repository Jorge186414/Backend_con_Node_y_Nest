import axios from 'axios'

// Solucion del principio de sustitucion
export interface HttpAdapter{

   get<T>(url: string):Promise<T>
}

// Para que la solucion funciones, las clases que queremos que hagan este cambio
// deben implementar la interfaz HttpAdapter

export class PokeAPIFetchAdapter implements HttpAdapter {

   // La T significa que sera un tipo de dato generico, es un estandar
   async get<T>(url: string): Promise<T> {
      const response = await fetch(url)
      const data: T = await response.json()
      console.log('Se uso fetch')
      return data
   }
}

export class PokeAPIAdapterAxios implements HttpAdapter {

   private readonly axios = axios

   async get<T>(url: string): Promise<T> {
      // Peticion HTTP GET
      const { data } = await this.axios.get<T>(url)
      console.log('Se uso Axios')
      return data
   }

   async post(url: string, data: any) {

   }

   async patch(url: string, data: any) {

   }

   async delet(url: string, data: any) {

   }
}



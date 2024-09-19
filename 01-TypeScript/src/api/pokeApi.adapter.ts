import axios from 'axios'

export class PokeAPIFetchAdapter {

   async get<T>(url: string): Promise<T> {
      const response = await fetch(url)
      const data: T = await response.json()

      return data
   }
}

export class PokeAPIAdapter {

   private readonly axios = axios

   async get<T>(url: string): Promise<T> {
      // Peticion HTTP GET
      const { data } = await this.axios.get<T>(url)
      return data
   }

   async post(url: string, data: any) {

   }

   async patch(url: string, data: any) {

   }

   async delet(url: string, data: any) {

   }
}



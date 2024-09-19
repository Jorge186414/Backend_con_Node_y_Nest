import axios from 'axios'

export class PokeAPIAdapter {

  private readonly axios = axios

  async get(url: string) {
    // Peticion HTTP GET
    const {data} = await this.axios.get(url)
    return data
  }

  async post(url: string, data: any) {

  }

  async patch(url: string, data: any) {

  }

  async delet(url: string, data: any) {

  }
}



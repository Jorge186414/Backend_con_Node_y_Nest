import { Brand } from 'src/brands/entities/brand.entity'
import { v4 as uuid } from 'uuid'

export const BRANDS_SEED: Brand[] = [
   {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime()
   },
   {
      id: uuid(),
      name: 'Ford',
      createdAt: new Date().getTime()
   },
   {
      id: uuid(),
      name: 'Nissan',
      createdAt: new Date().getTime()
   },
   {
      id: uuid(),
      name: 'Wolskwagen',
      createdAt: new Date().getTime()
   },
   {
      id: uuid(),
      name: 'Tesla',
      createdAt: new Date().getTime()
   },
   {
      id: uuid(),
      name: 'Jeep',
      createdAt: new Date().getTime()
   }
]
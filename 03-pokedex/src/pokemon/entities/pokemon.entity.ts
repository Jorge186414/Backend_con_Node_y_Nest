import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


//! Definicion de la tabla en nuestra base de datos 
@Schema()
export class Pokemon extends Document {

   @Prop({
      unique: true,
      index: true
   })
   name: string;

   @Prop({
      unique: true,
      index: true
   })
   no: number;

}


export const PokemonSchema = SchemaFactory.createForClass(Pokemon)
import mongoose, { Schema, Document } from "mongoose";

const copiaSeguridadSchema = new Schema({
  fecha: {
    type: String,
  },
  direccion: {
    type: String,
  },
  estado: {
    type: String,
  },
  usuario: {
    type: String,
  },
  error: {
    type: String,
  },
});

export interface ICopiaSeguridad extends Document {
  fecha: String;
  direccion: String;
  estado: String;
  usuario: String;
  error: String;
}

export default mongoose.model<ICopiaSeguridad>(
  "CopiaSeguridad",
  copiaSeguridadSchema
);

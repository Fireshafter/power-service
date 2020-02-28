export class Reparacion {
    constructor(
        public _id: Number,
        public orden: Number,
        public fechaentrada: Date,
        public lastedit: Date,
        public dispositivo: String,
        public servicio: String,
        public descripcion: String
    ){

    }
}

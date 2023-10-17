import mongoose from "mongoose";

const encontroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    local: { type: String, required: true },
    descricao: { type: String },
    cidade: { type: String },
    mes: { type: Number },
    ano: { type: Number },
}, { versionKey: false });

const encontro = mongoose.model("encontros", encontroSchema);

export default encontro;
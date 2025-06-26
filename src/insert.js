import {conecta} from "./Adm";
import {collection, addDoc} from "firebase/firestore";

export async function Input(texto){
    try{
        await addDoc(collection(conecta, ""),{
            texto,
            criadoEm: new Date(),
        });
        console.log("Mensagem adicionada com sucesso!");
    } catch (e) {
        console.error("Erro ao adicionar mensagem:", e);
    }
}
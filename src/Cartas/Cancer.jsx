import { Link } from "react-router-dom";
import cancerImg from "../assets/Cancer.jpg"

function Cancer (){
    return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-5">
      <div>
        <h1 className="text-[#ab8a99] mistica"> Sua carta é: </h1>
        <img
          src={cancerImg} alt="Cancer" className="h-[70vh] w-auto object-contain rounded"
        />
      </div>
      <Link to="/">
        <button>
          Voltar
        </button>
      </Link>
    </div>
  );
}

export default Cancer;
import { Link } from "react-router-dom";
import SagitarioImg from "../assets/Sagitario.jpg"

function Sagitario (){
    return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-5">
      <div>
        <h1 className="text-[#ab8a99] mistica"> Sua carta é: </h1>
        <img
          src={SagitarioImg} alt="Sagitario" className="h-[70vh] w-auto object-contain rounded"
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

export default Sagitario;
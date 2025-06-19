import { Link } from "react-router-dom";
import libraImg from "../assets/Libra.jpg"

function Libra (){
    return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-5">
      <div>
        <h1 className="text-[#ab8a99] mistica"> Sua carta é: </h1>
        <img
          src={libraImg} alt="Libra" className="h-[70vh] w-auto object-contain rounded"
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

export default Libra;
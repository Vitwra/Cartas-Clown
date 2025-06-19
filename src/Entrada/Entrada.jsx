import { Link } from "react-router-dom";

function Entrada() {
  
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold mistica">Círculo mágico</h1>
      <p1 className="mistica">Insira seu nome e selecione seu mês de nascimento para descobrir sua carta.</p1>

      <form className="flex flex-col mistica">
        <input
          placeholder="Nome"
          type="text"
          className="mistica bg-[#ab8a99] rounded-lg text-white placeholder-white py-2 px-4"
        />
      </form>
      <h3 className="text-2xl font-bold mistica">Selecione seu mês de nascimento!</h3>

      <form className="flex flex-row gap-4 mistica">
        <Link to="/Aquario">
        <button className="bg-[#ab8a99] mistica text-white py-2 px-4 rounded hover:bg-white transition h-11 w-24 flex items-center justify-center">
          Janeiro
        </button>
        </Link>

        <Link to="/Capricornio">
        <button className="bg-[#ab8a99] mistica text-white py-2 px-4 rounded hover:bg-white transition h-11 w-24 flex items-center justify-center">
          Fevereiro
        </button>
        </Link>

        <Link to="/Peixes">
        <button className="bg-[#ab8a99] mistica text-white py-2 px-4 rounded hover:bg-white transition h-11 w-24 flex items-center justify-center">
          Março
        </button>
        </Link>

        <Link to="/Aries">
        <button className="bg-[#ab8a99] mistica text-white py-2 px-4 rounded hover:bg-white transition h-11 w-24 flex items-center justify-center">
          Abril
        </button>
        </Link>

        <Link to="/Touro">
        <button className="bg-[#ab8a99] mistica text-white py-2 px-4 rounded hover:bg-white transition h-11 w-24 flex items-center justify-center">
          Maio
        </button>
        </Link>

        <Link to="/Gemeos">
        <button className="bg-[#ab8a99] mistica text-white py-2 px-4 rounded hover:bg-white transition h-11 w-24 flex items-center justify-center">
          Junho
        </button>
        </Link>
      </form>

      <form className="flex flex-row gap-4 mistica">
        <Link to="/Cancer">
        <button className="bg-[#ab8a99] mistica text-white py-2 px-4 rounded hover:bg-white hover:text-white transition h-11 w-24 flex items-center justify-center">
          Julho
        </button>
        </Link>

        <Link to="/Leao">
        <button className="bg-[#ab8a99] mistica text-white py-2 px-4 rounded hover:bg-white hover:text-white transition h-11 w-24 flex items-center justify-center">
          Agosto
        </button>
        </Link>

        <Link to="/Virgem">
        <button className="bg-[#ab8a99] mistica text-white py-2 px-4 rounded hover:bg-white hover:text-white transition h-11 w-24 flex items-center justify-center">
          Setembro
        </button>
        </Link>

        <Link to= "/Libra">
        <button className="bg-[#ab8a99] mistica text-white py-2 px-4 rounded hover:bg-white hover:text-white transition h-11 w-24 flex items-center justify-center">
          Outubro
        </button>
        </Link>

        <Link to="/Escorpiao">
        <button className="bg-[#ab8a99] mistica text-white py-2 px-4 rounded hover:bg-white hover:text-white transition h-11 w-24 flex items-center justify-center">
          Novembro
        </button>
        </Link>

        <Link to="/Sagitario">
        <button className="bg-[#ab8a99] mistica text-white py-2 px-4 rounded hover:bg-white hover:text-white transition h-11 w-24 flex items-center justify-center">
          Dezembro
        </button>
        </Link>
      </form>
    </div>
  );
}
export default Entrada;

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Entrada from "./Entrada/Entrada";
import Aries from "./Cartas/Aries";
import Aquario from "./Cartas/Aquario";
import Cancer from "./Cartas/Cancer";
import Capricornio from "./Cartas/Capricornio";
import Escorpiao from "./Cartas/Escorpiao";
import Gemeos from "./Cartas/Gemeos";
import Leao from "./Cartas/Leao";
import Libra from "./Cartas/Libra";
import Peixes from "./Cartas/Peixes";
import Sagitario from "./Cartas/Sagitario";
import Touro from "./Cartas/Touro";
import Virgem from "./Cartas/Virgem";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Entrada />} />
          <Route path="/Aries" element={<Aries />} />
          <Route path="/Touro" element={<Touro />} />
          <Route path="/Libra" element={<Libra />} />
          <Route path="/Aquario" element={<Aquario />} />
          <Route path="/Peixes" element={<Peixes />} />
          <Route path="/Gemeos" element={<Gemeos />} />
          <Route path="/Cancer" element={<Cancer />} />
          <Route path="/Leao" element={<Leao />} />
          <Route path="/Virgem" element={<Virgem />} />
          <Route path="/Escorpiao" element={<Escorpiao />} />
          <Route path="/Sagitario" element={<Sagitario />} />
          <Route path="/Capricornio" element={<Capricornio />} />
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}
export default App;

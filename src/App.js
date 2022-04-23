import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PokemonDetailContainer } from "./components/PokemonDetailContainer";
import { PokemonsContainer } from "./pages/PokemonsContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonsContainer />} />
        <Route path="/pokemon/:id" element={<PokemonDetailContainer />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

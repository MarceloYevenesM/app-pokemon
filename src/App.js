import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { PokemonDetailContainer } from "./components/PokemonDetailContainer";
import { PokemonsContainer } from "./pages/PokemonsContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <PokemonsContainer />
            </div>
          }
        />
        <Route path="/pokemon/:id" element={<PokemonDetailContainer />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

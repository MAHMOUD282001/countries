import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CountriesPage from "./pages/CountriesPage/CountriesPage";
import CountryPage from "./pages/CountryPage/CountryPage";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="bg-light-primary dark:bg-dark-primary min-h-[100vh]">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CountriesPage />} />
          <Route path="/country/:countryName" element={<CountryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

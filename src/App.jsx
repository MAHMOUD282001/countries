import "./App.css";
import Header from "./components/common/Header";
import Countries from "./components/countries/Countries";
import Filteration from "./components/filteration/Filteration";
function App() {
  return (
    <div className="bg-light-primary dark:bg-dark-primary">
      <Header />
      <Filteration />
      <Countries />
    </div>
  );
}
export default App;

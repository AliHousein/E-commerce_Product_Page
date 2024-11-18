import "./App.css";
import MainPage from "./components/MainPage";
import product from "./data/product";

function App() {
    return <MainPage products={product} />;
}

export default App;

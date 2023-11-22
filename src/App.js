import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen"
import RegisterScreen from "./screens/RegisterScreen";
import Header from "./components/Header";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={HomeScreen} />
          <Route path="/product/:id" Component={ProductScreen}  />
          <Route path='/register' Component={RegisterScreen} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

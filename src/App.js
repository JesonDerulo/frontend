import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen"
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" Component={HomeScreen} />
          <Route path="/product/:id" Component={ProductScreen}  />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

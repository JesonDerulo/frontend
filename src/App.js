import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" Component={HomeScreen} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/main";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="*" exact element={<Main />} />
            {/* <Route path="/" exact element={<вторая стр />} /> */}
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

import { Provider } from "react-redux";
import Contents from "./components/Contents";
import store from "./redux/store";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Contents />
      </Provider>
    </>
  );
}

export default App;

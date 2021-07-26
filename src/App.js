import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./ibmlogin/Login";
import useToken from "./hooks/useToken";
import Home from "./pages/Home";
import Cultures from "./pages/Cultures";
import Irrigation from "./pages/Irrigation.js";
import { Layout } from "./sections";
import NewCulture from "./pages/NewCultivo";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <BrowserRouter>
      <Layout >
        <Switch className="w-full bg-auto bg-green bg-green-200 flex">
          <Route path="/farming">
            <Cultures />
          </Route>
          <Route path="/irrigation">
            <Irrigation />
          </Route>
          <Route path="/newCulture">
            <NewCulture />
          </Route>
          <Route path="/">
            <Home user={token.idTokenPayload.name} />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

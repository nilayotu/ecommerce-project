import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* ileride başka sayfalar */}
      </Switch>
    </BrowserRouter>
  );
}
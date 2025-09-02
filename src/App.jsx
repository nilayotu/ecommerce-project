import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* İleride başka sayfalar eklenecek buraya ekle */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
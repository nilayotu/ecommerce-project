import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 p-4">
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* İleride başka sayfalar eklersen buraya ekle */}
          </Switch>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
import "./styles.css";
import { ProductContext } from "./context/productContext";
import { Footer, ProductList, CartPage } from "./js/projections";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import ErrorBoundary from "./errorBoundary/errorBoundary";
export default function App() {
  return (
    // <ErrorBoundary>
    <ProductContext>
      <Router>
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route exact path="/cart" component={CartPage}></Route>
        </Switch>
      </Router>
      <Footer />
    </ProductContext>
    // </ErrorBoundary>
  );
}

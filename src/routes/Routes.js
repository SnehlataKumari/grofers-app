import {BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import Cart from "../pages/CartPage/CartPage";
import OrderCatalogue from "../pages/OrderCatalogue/OrderCatalogue";

function Routes() {
  return (
  <Router history={useHistory}>
    <Route path="/" exact>
      <OrderCatalogue/>
    </Route>
    <Route path="/cart">
      <Cart/>
    </Route>
  </Router>
  );
}

export default Routes;

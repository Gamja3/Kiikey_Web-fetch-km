import OrderPage from "pages/order/Order";
import { Navigate, Route, Routes } from "react-router-dom";

const OrderRoutes = () => {
  console.log("order");
  return (
    <section>
      <Routes>
        <Route path="" element={<OrderPage/>}/>
      </Routes>
    </section>
  );
};

export default OrderRoutes;

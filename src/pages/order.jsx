import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import "./order.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Order } from "../components/Order/Order";

const showMenu = false;

const fetchOrderItems = async () => {
  const response = await fetch(
    "http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image"
  );
  const json = await response.json();
  return json.data;
};

const orderItems = await fetchOrderItems();
console.log(orderItems);

document.querySelector("#root").innerHTML = render(
  <div className="page">
    <Header showMenu={showMenu} />
    <Order items={orderItems} />
    <Footer />
  </div>
);

import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Header } from "../components/Header/Header";
import { Banner } from "../components/Banner/Banner";
import { Gallery } from "../components/Gallery/Gallery";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { Menu } from "../components/Menu/Menu";

const fetchDrinks = async () => {
  const data = await fetch("http://localhost:4000/api/drinks");
  const json = await data.json();
  return json.data;
};

const drinks = await fetchDrinks();

document.querySelector("#root").innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

const navButton = document.querySelector(".nav-btn");
const navigation = document.querySelector(".rollout-nav");

navButton.addEventListener("click", function () {
  navigation.classList.toggle("nav-closed");
});

navigation.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    navigation.classList.add("nav-closed");
  }
});

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

const showMenu = true;

document.querySelector("#root").innerHTML = render(
  <div className="page">
    <Header showMenu={showMenu} />
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

const drinkForms = document.querySelectorAll(".drink__controls");
drinkForms.forEach((drinkForm) => {
  drinkForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const datasetId = Number(e.target.dataset.id);
    const drink = drinks.find((drink) => drink.id === datasetId);

    if (drink) {
      const newOrderedState = !drink.ordered;
      const response = await fetch(
        `http://localhost:4000/api/drinks/${datasetId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([
            { op: "replace", path: "/ordered", value: newOrderedState },
          ]),
        }
      );
      const responseData = await response.json();
      console.log("Response from API:", responseData);

      window.location.reload();
    }
  });
});

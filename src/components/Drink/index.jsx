import { Layer } from "../Layer/Layer";
import "./style.css";

export const Drink = ({ id, name, ordered, image, layers }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={`http://localhost:4000${image}`} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layer) => (
            <Layer key={layer.color} color={layer.color} label={layer.label} />
          ))}
        </div>
      </div>
      <form className="drink__controls" data-id={id}>
        <input type="hidden" className="order-id" value="2" />
        <button
          className={
            ordered === false ? "order-btn" : "order-btn order-btn--ordered"
          }
        >
          {ordered === false ? "Objednat" : "Zrušit"}
        </button>
      </form>
    </div>
  );
};

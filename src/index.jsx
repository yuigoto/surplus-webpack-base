import * as Surplus from "surplus";
import { Home } from "views/Home";
import "styles/main.scss";

const app = (
  <div className={"container py-5"}>
    <Home />
  </div>
);

document.body.appendChild(app);

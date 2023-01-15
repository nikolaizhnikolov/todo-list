import { footer } from "./components/footer/footer";
import css from "./style.css";

function layout() {
    const div = () => document.createElement("div");

    const header = document.createElement("header");
    header.textContent = "To-Do Be Do Bee Do";
    document.body.appendChild(header);

    const content = div();
    content.classList.add("content");
    document.body.appendChild(content);

    document.body.appendChild(footer());
}

layout();

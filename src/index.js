import { footer } from "./components/footer/footer";
import cssReset from "./reset.css";
import css from "./style.css";

(function layout() {
    const divWithClass = (c) => {
        const div = document.createElement("div");
        div.classList.add(c);
        return div;
    };

    const header = document.createElement("header");
    header.textContent = "To-Do Be Do Bee Do";
    document.body.appendChild(header);

    const content = divWithClass("content");
    content.appendChild(divWithClass("projects"));
    content.appendChild(divWithClass("todos"));
    document.body.appendChild(content);

    document.body.appendChild(footer());
})();

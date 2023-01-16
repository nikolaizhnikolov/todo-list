import headerStyle from "./header.css";
import list from "./list.png";

export const header = function () {
    const header = document.createElement("header");
    header.classList.add("header");

    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.src = list;

    const text = document.createElement("div");
    text.textContent = "To-Do be do bee do...";

    header.appendChild(logo);
    header.appendChild(text);

    return header;
};

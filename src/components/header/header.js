import headerStyle from "./header.css";
import logo from "./list.png";

export const header = function () {
    const header = document.createElement("header");
    header.classList.add("header");

    const img = document.createElement("img");
    img.src = logo;

    const text = document.createElement("div");
    text.textContent = "To-Do be do bee do...";

    header.appendChild(img);
    header.appendChild(text);
    return header;
};

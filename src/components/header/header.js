import headerStyle from "./header.css";

export const header = function () {
    const header = document.createElement("header");
    header.classList.add("header");
    header.textContent = "To-Do be do bee do...";
    return header;
};

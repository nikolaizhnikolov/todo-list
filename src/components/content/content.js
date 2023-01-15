import contentStyle from "./content.css";

export const content = function () {
    const divWithClass = (c) => {
        const div = document.createElement("div");
        div.classList.add(c);
        return div;
    };

    const content = divWithClass("content");
    content.appendChild(divWithClass("projects"));
    content.appendChild(divWithClass("todos"));

    return content;
};

import { footer } from "./components/footer/footer";
import { header } from "./components/header/header";
import { content } from "./components/content/content";
import cssReset from "./reset.css";
import css from "./style.css";

(function layout() {
    document.body.appendChild(header());
    document.body.appendChild(content());
    document.body.appendChild(footer());
})();

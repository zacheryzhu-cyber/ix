import "./global-N-MYun9U.js";
import { a as addIcons } from "./ix-icon.entry-DAiDhgek.js";
import { y as iconRefresh } from "./index-_MTu4qkX.js";
import "./init-t9Ewv8gW.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();

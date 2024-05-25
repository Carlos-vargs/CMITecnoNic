import Main from "./main";

export default class Application extends Main {
  constructor() {
    super();
    // Your Application

    /**
     * "window.hljs"
     * JUST FOR DEMO PURPOSE ONLY FOR HIGHLIGHTING CODE
     * IF YOU DON'T NEED THIS IN THE YOUR APPLICATION
     * REMOVE THIS CODE
     *
     */
    if (window.hljs) {
      document
        .querySelectorAll("div.code-wrapper pre")
        .forEach((el) => hljs.highlightElement(el));
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.App = new Application();
  console.log({
    testing: window,
  });
  window.dispatchEvent(new CustomEvent("app:mounted"));
});

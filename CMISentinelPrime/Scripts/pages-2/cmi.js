const onLoad = () => {
  // Modal para crear un CMI
  new Modal("#cmiModal");

  // Datepricker for time period CMI
  const cmiDatePicker = document.querySelector("#cmiDatePicker");

  cmiDatePicker._datepicker = flatpickr(cmiDatePicker);
};

window.addEventListener("app:mounted", onLoad, { once: true });

document.addEventListener("DOMContentLoaded", function () {
  const initPoppers = () => {
    document.querySelectorAll(".popper-ref").forEach((button) => {
      if (!button.dataset.popperInitialized) {
        const dropdownId = button.closest('[id^="dropdown-wrapper-"]').id;
        const popperConfig = {
          placement: "bottom-start",
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 4],
              },
            },
          ],
        };

        new Popper(
          `#${dropdownId}`,
          ".popper-ref",
          ".popper-root",
          popperConfig
        );

        button.dataset.popperInitialized = "true";
        console.count("testing");
      }
    });
  };

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type == "childList") {
        initPoppers();
      }
    });
  });

  const configObserver = { childList: true, subtree: true };
  const targetNode = document.getElementById("cmi-container");
  observer.observe(targetNode, configObserver);

  initPoppers();
});

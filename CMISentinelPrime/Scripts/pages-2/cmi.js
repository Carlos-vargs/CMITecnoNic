const initializeCMIComponents = () => {
  // Modal para crear un CMI
  new Modal("#cmiModal");

  // Modal para editar un CMI
  new Modal("#cmiEditModal");

  // Cargar la informacion para editar un cuadro de mando
  window.openCMIModal = async function (dispatcher) {
    try {
      const title = document.getElementById("cmiEditTitle");
      const CMIId = dispatcher.getAttribute("data-id");
      const CMIName = dispatcher.getAttribute("data-name");
      const formCMIName = document.querySelector("#formCMIEditName");
      const cmiEditDatePicker = document.querySelector("#formCMIEditDate");
      const formCMIId = document.querySelector("#formCMIId");

      title.textContent = "Editar cuadro de mando: " + CMIName;

      const response = await fetch(`https://localhost:44357/CMI/Edit/${CMIId}`);

      const data = await response.json();

      formCMIName.value = data?.CMI?.Name;
      formCMIId.value = data?.CMI?.Id;

      cmiEditDatePicker._datepicker = flatpickr(cmiEditDatePicker, {
        defaultDate: data?.CMI?.StarDate,
      });
    } catch (error) {
      console.error("Error loading cmi data", error);
    }
  };

  // Datepricker for time period CMI
  const cmiDatePicker = document.querySelector("#cmiDatePicker");

  cmiDatePicker._datepicker = flatpickr(cmiDatePicker);
};

/**
 * Inicializa los poppers para los dropdowns al observar cambios en el DOM y en la carga inicial.
 *
 * Esta función configura y observa elementos especificados dentro del contenedor con ID "cmi-container",
 * inicializando poppers para los elementos que corresponden a referencias de dropdowns. Utiliza Popper.js para
 * gestionar la colocación y comportamiento visual de los dropdowns asociados.
 *
 * @function initializeDropdownPoppers
 */
const initializeDropdownPoppers = () => {
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
};

window.addEventListener("app:mounted", initializeCMIComponents, { once: true });

document.addEventListener("DOMContentLoaded", function () {
  initializeDropdownPoppers();
});

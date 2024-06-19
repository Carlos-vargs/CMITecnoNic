const initializePerspectivesComponents = () => {
  // Add Modal For Perspective
  new Modal("#perspectiveModal");

  // Add Modal For Objetives
  new Modal("#objetiveModal");

  window.openObjectiveModal = function (dispatcher) {
    const title = document.getElementById("modalTitle");
    const inputId = document.getElementById("perspectiveId");
    const perspectiveId = dispatcher.getAttribute("data-id");
    const perspectiveName = dispatcher.getAttribute("data-name");

    title.textContent = "Crear Objetivo - " + perspectiveName;
    inputId.value = perspectiveId;
  };

  // Table Collapse
  window.tableCollapse = new Accordion(
    document.querySelector("#table-collapse"),
    {
      onlyChildNodes: true,
      duration: 200,
      showMultiple: true,
    }
  );

  // Table for Objetives
  document
    .querySelectorAll("[id^='table-collapse-objetive-']")
    .forEach((table) => {
      new Accordion(table, {
        onlyChildNodes: false,
        duration: 200,
        showMultiple: true,
        elementClass: "ac-objetive",
        triggerClass: "ac-trigger-objetive",
        activeClass: "is-active-objetive",
      });
    });

  // Watchlist 3 Chart
  const watchlist3Config = {
    colors: ["#3AC5BC"],
    chart: {
      height: 30,
      width: 60,
      type: "line",
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: "Stat",
        data: [654, 820, 102, 540, 154, 614],
      },
    ],

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },

    grid: {
      padding: {
        left: 0,
        right: 0,
        top: -28,
        bottom: 0,
      },
    },
    xaxis: {
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
  };
  const watchlist2El = document.querySelector("#watchlist-2-chart");

  setTimeout(() => {
    watchlist2El._chart = new ApexCharts(watchlist2El, watchlist3Config);
    watchlist2El._chart.render();
  });
};

/**
 * Inicializa los poppers para los dropdowns observando cambios en el DOM y en la carga inicial.
 *
 * Esta función configura y supervisa los elementos especificados dentro de contenedores
 * designados, inicializando poppers para los elementos dropdown que se encuentran
 * en referencias específicas. Utiliza la biblioteca Popper.js para gestionar
 * la colocación y el comportamiento visual de los dropdowns asociados.
 *
 * El parámetro `wrapper` define el prefijo del ID esperado para los wrappers de los dropdowns,
 * permitiendo una inicialización flexible en diferentes secciones de la página.
 *
 * El parámetro `watcher` especifica el ID del contenedor cuyos cambios en la estructura del DOM
 * serán observados para reconfigurar o aplicar los poppers a nuevos dropdowns agregados dinámicamente.
 *
 * @function initializeDropdownPoppers
 * @param {string} [wrapper="dropdown-wrapper-"] - Prefijo del ID de los contenedores de los dropdowns a inicializar.
 * @param {string} [watcher="table-collapse"] - ID del elemento contenedor donde se observarán los cambios del DOM.
 */
const initializeDropdownPoppers = (
  wrapper = "dropdown-wrapper-",
  watcher = "table-collapse"
) => {
  const initPoppers = () => {
    document.querySelectorAll(".popper-ref").forEach((button) => {
      if (!button.dataset.popperInitialized) {
        const dropdownId = button.closest(`[id^="${wrapper}"]`).id;
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
  const targetNode = document.getElementById(watcher);
  observer.observe(targetNode, configObserver);

  initPoppers();
};

window.addEventListener("app:mounted", initializePerspectivesComponents, {
  once: true,
});

document.addEventListener("DOMContentLoaded", function () {
  initializeDropdownPoppers();
  initializeDropdownPoppers(
    "dropdown-wrapper-objetive-",
    "table-collapse-objetive"
  );
});

const initializePerspectivesComponents = () => {
  // Add Modal For Perspective
  new Modal("#perspectiveModal");

  // Modal For edit Perspective
  new Modal("#perspectiveEditModal");

  // Add Modal For Objetives
  new Modal("#objetiveModal");

  // Modal For edit Objetives
  new Modal("#objetiveEditModal");

  // Add Modal For Indicators
  new Modal("#indicatorModal");

  // Modal For edit Indicators
  new Modal("#indicatorEditModal");

  // Add Modal For Indicator Data
  new Modal("#indicatorDataModal");

  // Cargar la informacion para editar una perspectiva
  window.openPerspectiveModal = async function (dispatcher) {
    try {
      const title = document.getElementById("PerspectiveEditTitle");
      const PerspectiveId = dispatcher.getAttribute("data-id");
      const PerspectiveName = dispatcher.getAttribute("data-name");
      const formPerspectiveName = document.querySelector(
        "#formPerspectiveEditName"
      );
      const formPerspectiveId = document.querySelector("#formPerspectiveId");

      title.textContent = "Editar Perspectiva: " + PerspectiveName;

      if (!PerspectiveId) {
        return;
      }
      const response = await fetch(
        `https://localhost:44357/Perspectives/Edit/${PerspectiveId}`
      );
      const data = await response.json();
      formPerspectiveName.value = data?.Perspective?.Name;
      formPerspectiveId.value = data?.Perspective?.id;
    } catch (error) {
      console.error("Error loading perspective data", error);
    }
  };

  // Cargar la informacion para editar un objetivo
  window.openObjetiveEditModal = async function (dispatcher) {
    try {
      const title = document.getElementById("objectiveEditTitle");
      const objectiveId = dispatcher.getAttribute("data-id");
      const objetiveName = dispatcher.getAttribute("data-name");
      const formObjetiveName = document.querySelector("#formObjetiveEditName");
      const formObjectiveId = document.querySelector("#formObjectiveId");
      const formObjectiveParentId = document.querySelector(
        "#formObjectiveParentId"
      );

      title.textContent = "Editar objetivo: " + objetiveName;

      if (!objectiveId) {
        return;
      }
      const response = await fetch(
        `https://localhost:44357/Objectives/Edit/${objectiveId}`
      );
      const data = await response.json();

      console.log({ data });

      formObjetiveName.value = data?.Objective?.Description;
      formObjectiveId.value = data?.Objective?.id;
      formObjectiveParentId.value = data?.Objective?.PerspectiveId;
    } catch (error) {
      console.error("Error loading perspective data", error);
    }
  };

  // Cargar la informacion para editar un indicador
  window.openIndicadorEditModal = async function (dispatcher) {
    try {
      const title = document.getElementById("TitleEditIndicator");
      const IndicatorId = dispatcher.getAttribute("data-id");
      const IndicatorName = dispatcher.getAttribute("data-name");
      const formIndicatorId = document.querySelector("#formIndicatorId");
      const formObjectivIndicatorId = document.querySelector(
        "#formObjectivIndicatorId"
      );
      const formMetricId = document.querySelector("#formMetricId");
      const formIndicatorName = document.querySelector("#formIndicatorName");
      const formIndicatorDescription = document.querySelector(
        "#formIndicatorDescription"
      );
      const formMeasurementFrequency = document.querySelector(
        "#formMeasurementFrequency"
      );
      const formUnitMeasure = document.querySelector("#formUnitMeasure");

      title.textContent = "Editar indicador: " + IndicatorName;

      if (!IndicatorId) {
        return;
      }

      const response = await fetch(
        `https://localhost:44357/Indicators/Edit/${IndicatorId}`
      );
      const data = await response.json();

      formObjectivIndicatorId.value = data?.Indicator?.ObjectiveParentId;
      formIndicatorName.value = data?.Indicator?.Name;
      formIndicatorId.value = data?.Indicator?.Id;
      formMeasurementFrequency.value = data?.Indicator?.MeasurementFrequency;
      formUnitMeasure.value = data?.Indicator?.UnitMeasure;
      formIndicatorDescription.value = data?.Indicator?.Description;
      formMetricId.value = data?.MetricType?.Id;
      
    } catch (error) {
      console.error("Error loading perspective data", error);
    }
  };

  // Modal to create new objectives
  window.openObjectiveModal = function (dispatcher) {
    const title = document.getElementById("modalTitle");
    const inputId = document.getElementById("perspectiveId");
    const perspectiveId = dispatcher.getAttribute("data-id");
    const perspectiveName = dispatcher.getAttribute("data-name");

    title.textContent = "Crear Objetivo - " + perspectiveName;
    inputId.value = perspectiveId;
  };

  // Modal to create new indicators
  window.openIndicatorModal = function (dispatcher) {
    const title = document.getElementById("modalTitleIndicator");
    const inputId = document.getElementById("objectiveId");
    const objectiveId = dispatcher.getAttribute("data-id");
    const objectiveName = dispatcher.getAttribute("data-name");

    title.textContent = "Crear Indicador - " + objectiveName;
    inputId.value = objectiveId;
  };

  window.openIndicatorDataModal = function (dispatcher) {
    const title = document.getElementById("modalTitleDataIndicator");
    const indicatorName = dispatcher.getAttribute("data-name");

    title.textContent = "Editar Valores: " + indicatorName;

    // Datepricker for time period CMI
    const cmiDatePicker = document.querySelector("#indicatorDatePicker");

    cmiDatePicker._datepicker = flatpickr(cmiDatePicker);
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
  initializeDropdownPoppers(
    "dropdown-wrapper-indicator-",
    "table-collapse-indicator"
  );
});

const initializePerspectivesComponents = () => {
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
  window.tableCollapseObjetive = new Accordion(
    document.querySelector("#table-collapse-objetive"),
    {
      onlyChildNodes: false,
      duration: 200,
      showMultiple: true,
      elementClass: 'ac-objetive',
      triggerClass: 'ac-trigger-objetive',
      activeClass: 'is-active-objetive'
    }
  );

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
  const targetNode = document.getElementById("table-collapse");
  observer.observe(targetNode, configObserver);

  initPoppers();
};

window.addEventListener("app:mounted", initializePerspectivesComponents, {
  once: true,
});

document.addEventListener("DOMContentLoaded", function () {
  initializeDropdownPoppers();
});

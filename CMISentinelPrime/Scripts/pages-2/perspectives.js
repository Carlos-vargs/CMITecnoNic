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
    const indicatorId = dispatcher.getAttribute("data-id");

    title.textContent = "Editar Valores: " + indicatorName;

    setupDateTableUpdater(indicatorId);
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

function setupDateTableUpdater(indicatorId = null) {
  if (!indicatorId) {
    return;
  }

  let globalIndicatorData = null; // Esta variable almacenará los datos del indicador

  const updateIntervalSelect = document.getElementById(
    "measurementFrequencySelect"
  );
  const deadlineDatePicker = document.getElementById("indicatorDeadlinePicker");
  const tableBody = document.querySelector("#dataIndicatorTable tbody");
  const addButton = document.getElementById("addTableRow");
  const updateMetricIdSelect = document.getElementById(
    "formIndicatorDataMetricId"
  );
  const initialDayIndicator = document.getElementById("initialDayIndicator");

  async function fetchIndicatorDetails() {
    const url = `https://localhost:44357/Indicators/Details/${indicatorId}`;

    try {
      const response = await fetch(url, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }

  async function fetchAndDisplayIndicatorDetails() {
    const indicatorData = await fetchIndicatorDetails();
    if (indicatorData) {
      globalIndicatorData = indicatorData;
      populateControls(indicatorData);
      populateTable(indicatorData);
    }
  }

  function populateControls(data) {
    // Poblar el select de intervalo de actualización
    updateIntervalSelect.value = data.Indicator.MeasurementFrequency;

    // Poblar el select de agrupaciones de metricas
    updateMetricIdSelect.value = data.MetricType.Id;

    // Determinar el día inicial basado en el primer DataIndicator o usar el día actual si no hay datos
    const firstDataIndicatorDate =
      data.DataIndicators.length > 0
        ? dayjs(data.DataIndicators[0].Date)
        : dayjs();

    // Poblar el valor del día inicial
    initialDayIndicator.value = firstDataIndicatorDate.date();

    // Poblar la fecha límite
    deadlineDatePicker._datepicker = flatpickr(deadlineDatePicker, {
      defaultDate: data.Targets.DeadlineDate || dayjs().format("YYYY-MM-DD"),
    });
  }

  function populateTable(data) {
    const dates = data.DataIndicators.map((di) => ({
      date: dayjs(di.Date, "YYYY-MM-DD").format("DD-MM-YYYY"),
      value: di.Value,
      objective: data.Targets.ExpectedValue,
    }));

    console.log({ dates });

    if (dates.length === 0) {
      updateTable();
    } else {
      tableBody.innerHTML = "";
      dates.forEach((date, index) => {
        const isFirstRow = index === 0;
        addDateRow(date.date, date.value, date.objective, isFirstRow);
      });
    }
  }

  function addDateRow(
    date = null,
    value = "Valor",
    objective = "0",
    isFirstRow = false
  ) {
    const objectiveInput = isFirstRow
      ? `<input class="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" value="${objective}" type="number" min="0" onchange="handleFirstObjectiveChange(this)" />`
      : `<input style="cursor: not-allowed;" class="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" value="${objective}" type="number" min="0" disabled />`;

    const row = `
      <tr>
        <td class="whitespace-nowrap border border-l-0 border-slate-200 px-1.5 py-1.5 text-center dark:border-navy-500">
          ${date}
        </td>
        <td class="whitespace-nowrap border border-slate-200 px-1.5 py-1.5 text-center dark:border-navy-500">
          <label class="block">
            <input class="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Ingrese el Valor" value="${value}" type="number" min="0" />
          </label>
        </td>
        <td class="whitespace-nowrap border border-slate-200 px-1.5 py-1.5 text-center dark:border-navy-500">
          <label class="block">
            ${objectiveInput}
          </label>
        </td>
        <td class="whitespace-nowrap border border-r-0 border-slate-200 px-1.5 py-1.5 text-center dark:border-navy-500">
          <div class="flex justify-center space-x-reverse space-x-2">
            <button onclick="removeRow(this)" class="btn h-8 w-8 p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25">
              <i class="fa fa-trash-alt"></i>
            </button>
          </div>
        </td>
      </tr>`;
    tableBody.innerHTML += row;
  }

  initialDayIndicator.addEventListener("change", updateTable);

  fetchAndDisplayIndicatorDetails();

  function adjustDateByInterval(date, interval) {
    switch (interval) {
      case "Diariamente":
        return date.add(1, "day");
      case "Semanalmente":
        return date.add(7, "days");
      case "Mensualmente":
        return date.add(1, "month");
      case "Trimestralmente":
        return date.add(3, "months");
      case "Semestralmente":
        return date.add(6, "months");
      case "Anualmente":
        return date.add(1, "year");
    }
    return date;
  }

  function generateDates(initialDay, interval) {
    if (["Nunca"].includes(interval)) {
      return [];
    }

    const dates = [];
    let currentDate = initialDay ? dayjs().set("date", initialDay) : dayjs();
    if (!currentDate.isValid()) {
      currentDate = dayjs();
    }

    if (interval === "Una vez") {
      dates.push(currentDate.toDate());
      return dates;
    }

    for (let i = 0; i < 12; i++) {
      dates.push(dayjs(currentDate, "YYYY-MM-DD").format("DD-MM-YYYY"));
      currentDate = adjustDateByInterval(currentDate, interval);
    }
    return dates;
  }

  function updateTable() {
    const interval = updateIntervalSelect.value;
    const startDay = initialDayIndicator.value;
    const dates = generateDates(startDay, interval);

    addButton.style.cursor = "pointer";
    addButton.disabled = false;

    if (["Nunca", "Una vez"].includes(interval)) {
      addButton.style.cursor = "not-allowed";
      addButton.disabled = true;
    }

    // aun no funciona recuperar el ultimo valor de la tabla
    let existingData = [];
    if (tableBody && tableBody.querySelectorAll("tr").length > 0) {
      existingData = Array.from(tableBody.querySelectorAll("tr")).map((tr) => {
        const valueInput = tr.cells[1]?.querySelector("input");
        const objectiveInput = tr.cells[2]?.querySelector("input");
        return {
          value: valueInput ? valueInput.value : "0",
          objective: objectiveInput ? objectiveInput.value : "0",
        };
      });
    }

    tableBody.innerHTML = "";

    if (!dates.length) {
      tableBody.innerHTML = `
       <tr>
          <td class="rounded-lg px-5 py-8 text-lg text-center" colspan="4">
            Por favor, selecciona un intervalo de actualización para comenzar a añadir registros.
          </td>
        </tr> 
      `;
      return;
    }

    const firstObjective =
      existingData.length > 0 ? existingData[0].objective : "0";

    dates.forEach((date, index) => {
      const isFirstRow = index === 0;
      const value = existingData[index] ? existingData[index].value : "0";
      addDateRow(date, value, firstObjective, isFirstRow);
    });
  }

  window.handleFirstObjectiveChange = function (input) {
    const newValue = input.value;
    const objectiveInputs = document.querySelectorAll(
      '#dataIndicatorTable tbody tr td:nth-child(3) input[type="number"]'
    );

    objectiveInputs.forEach((childInput, index) => {
      childInput.value = newValue;
    });
  };

  function addTableRow() {
    const interval = updateIntervalSelect.value;

    if (["Nunca", "Una vez"].includes(interval)) {
      $notification({
        text: "Selecciona un intervalo de actualización recurrente para poder agregar registros.",
        variant: "error",
      });
      return;
    }

    const lastDateCell = tableBody.querySelector(
      "tr:last-child td:first-child"
    );
    let lastDateMatch = lastDateCell
      ? lastDateCell.textContent.match(/\d{2}-\d{2}-\d{4}/)
      : null;
    let lastDateText = lastDateMatch ? lastDateMatch[0] : null;
    lastDateText = lastDateText
      ? lastDateText.split("-").reverse().join("-")
      : null;
    let lastDate = lastDateText ? dayjs(lastDateText) : dayjs();

    if (!lastDate.isValid()) {
      lastDate = dayjs();
    }

    lastDate = adjustDateByInterval(lastDate, interval);

    const firstRow = tableBody.querySelector("tr:first-child");
    const firstObjective = firstRow
      ? firstRow.cells[2].querySelector("input").value
      : "0";

    addDateRow(
      dayjs(lastDate, "YYYY-MM-DD").format("DD-MM-YYYY"),
      0,
      firstObjective
    );
  }

  window.removeRow = function (button) {
    const row = button.closest("tr");
    row.parentNode.removeChild(row);

    if (tableBody.querySelectorAll("tr").length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td class="rounded-lg px-5 py-8 text-lg text-center" colspan="4">
            Por favor, selecciona un intervalo de actualización para comenzar a añadir registros.
          </td>
        </tr>`;
    }

    $notification({ text: "Registro Eliminado", variant: "success" });
  };

  async function sendUpdatedData() {
    if (!globalIndicatorData) {
      console.error("No indicator data available");
      return;
    }

    var token = document.querySelector("#myAntiForgeryTokenForm").value;

    console.log({ token });

    const indicatorData = {
      Id: globalIndicatorData.Indicator.Id,
      Name: globalIndicatorData.Indicator.Name,
      Description: globalIndicatorData.Indicator.Description,
      MeasurementFrequency: updateIntervalSelect.value,
      UnitMeasure: globalIndicatorData.Indicator.UnitMeasure,
      ObjectiveId: globalIndicatorData.Indicator.ObjectiveId,
      MetricTypeId: updateMetricIdSelect.value,
      CMIId: 1,
    };

    const dataIndicators = Array.from(tableBody.querySelectorAll("tr")).map(
      (row) => ({
        Id: row.dataset.id,
        Value: row.cells[1].querySelector("input").value,
        Date: row.cells[0].innerText.split("-").reverse().join("-"),
        IndicatorId: globalIndicatorData.Indicator.Id,
      })
    );

    const firstRow = tableBody.querySelector("tr");
    const target = {
      Id: firstRow.dataset.targetId ? firstRow.dataset.targetId : null,
      Description: firstRow
        ? firstRow.cells[2].querySelector("input").value
        : "",
      ExpectedValue: firstRow
        ? firstRow.cells[2].querySelector("input").value
        : "",
      DeadlineDate: dayjs(deadlineDatePicker.value, "YYYY-MM-DD").format(
        "YYYY-MM-DD"
      ),
      IndicatorId: globalIndicatorData.Indicator.Id,
    };
    console.log("Sending Indicator Data:", indicatorData);
    console.log("Sending DataIndicators:", dataIndicators);
    console.log("Sending Target:", target);

    try {
      const indicatorResponse = await fetch(
        `https://localhost:44357/Indicators/Edit/${indicatorData.Id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // RequestVerificationToken: token,
          },
          body: JSON.stringify(indicatorData),
        }
      );

      const dataIndicatorsResponse = await fetch(
        "https://localhost:44357/DataIndicators/Create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataIndicators),
        }
      );

      const targetsResponse = await fetch(
        "https://localhost:44357/Targets/Create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(target),
        }
      );

      const targetsResult = await targetsResponse.json();
      const indicatorResult = await indicatorResponse.json();
      const dataIndicatorsResult = await dataIndicatorsResponse.json();

      console.log("Indicator Update Response:", indicatorResult);
      console.log("DataIndicators Create Response:", dataIndicatorsResult);
      console.log("Targets Create Response:", targetsResult);
    } catch (error) {
      console.error("Error sending updated data:", error);
    }
  }

  updateIntervalSelect.addEventListener("change", updateTable);
  deadlineDatePicker.addEventListener("change", updateTable);
  addButton.addEventListener("click", addTableRow);
  document
    .getElementById("saveChangesButton")
    .addEventListener("click", sendUpdatedData);
}

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

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Scripts/pages-2/perspectives.js":
/*!*****************************************!*\
  !*** ./Scripts/pages-2/perspectives.js ***!
  \*****************************************/
/***/ (() => {

eval("const initializePerspectivesComponents = () => {\r\n  // Add Modal For Perspective\r\n  new Modal(\"#perspectiveModal\");\r\n\r\n  // Modal For edit Perspective\r\n  new Modal(\"#perspectiveEditModal\");\r\n\r\n  // Add Modal For Objetives\r\n  new Modal(\"#objetiveModal\");\r\n\r\n  // Modal For edit Objetives\r\n  new Modal(\"#objetiveEditModal\");\r\n\r\n  // Add Modal For Indicators\r\n  new Modal(\"#indicatorModal\");\r\n\r\n  // Modal For edit Indicators\r\n  new Modal(\"#indicatorEditModal\");\r\n\r\n  // Add Modal For Indicator Data\r\n  new Modal(\"#indicatorDataModal\");\r\n\r\n  // Cargar la informacion para editar una perspectiva\r\n  window.openPerspectiveModal = async function (dispatcher) {\r\n    try {\r\n      const title = document.getElementById(\"PerspectiveEditTitle\");\r\n      const PerspectiveId = dispatcher.getAttribute(\"data-id\");\r\n      const PerspectiveName = dispatcher.getAttribute(\"data-name\");\r\n      const formPerspectiveName = document.querySelector(\r\n        \"#formPerspectiveEditName\"\r\n      );\r\n      const formPerspectiveId = document.querySelector(\"#formPerspectiveId\");\r\n\r\n      title.textContent = \"Editar Perspectiva: \" + PerspectiveName;\r\n\r\n      if (!PerspectiveId) {\r\n        return;\r\n      }\r\n      const response = await fetch(\r\n        `https://localhost:44357/Perspectives/Edit/${PerspectiveId}`\r\n      );\r\n      const data = await response.json();\r\n      formPerspectiveName.value = data?.Perspective?.Name;\r\n      formPerspectiveId.value = data?.Perspective?.id;\r\n    } catch (error) {\r\n      console.error(\"Error loading perspective data\", error);\r\n    }\r\n  };\r\n\r\n  // Cargar la informacion para editar un objetivo\r\n  window.openObjetiveEditModal = async function (dispatcher) {\r\n    try {\r\n      const title = document.getElementById(\"objectiveEditTitle\");\r\n      const objectiveId = dispatcher.getAttribute(\"data-id\");\r\n      const objetiveName = dispatcher.getAttribute(\"data-name\");\r\n      const formObjetiveName = document.querySelector(\"#formObjetiveEditName\");\r\n      const formObjectiveId = document.querySelector(\"#formObjectiveId\");\r\n      const formObjectiveParentId = document.querySelector(\r\n        \"#formObjectiveParentId\"\r\n      );\r\n\r\n      title.textContent = \"Editar objetivo: \" + objetiveName;\r\n\r\n      if (!objectiveId) {\r\n        return;\r\n      }\r\n      const response = await fetch(\r\n        `https://localhost:44357/Objectives/Edit/${objectiveId}`\r\n      );\r\n      const data = await response.json();\r\n\r\n      console.log({ data });\r\n\r\n      formObjetiveName.value = data?.Objective?.Description;\r\n      formObjectiveId.value = data?.Objective?.id;\r\n      formObjectiveParentId.value = data?.Objective?.PerspectiveId;\r\n    } catch (error) {\r\n      console.error(\"Error loading perspective data\", error);\r\n    }\r\n  };\r\n\r\n  // Cargar la informacion para editar un indicador\r\n  window.openIndicadorEditModal = async function (dispatcher) {\r\n    try {\r\n      const title = document.getElementById(\"TitleEditIndicator\");\r\n      const IndicatorId = dispatcher.getAttribute(\"data-id\");\r\n      const IndicatorName = dispatcher.getAttribute(\"data-name\");\r\n      const formIndicatorId = document.querySelector(\"#formIndicatorId\");\r\n      const formObjectivIndicatorId = document.querySelector(\r\n        \"#formObjectivIndicatorId\"\r\n      );\r\n      const formMetricId = document.querySelector(\"#formMetricId\");\r\n      const formIndicatorName = document.querySelector(\"#formIndicatorName\");\r\n      const formIndicatorDescription = document.querySelector(\r\n        \"#formIndicatorDescription\"\r\n      );\r\n      const formMeasurementFrequency = document.querySelector(\r\n        \"#formMeasurementFrequency\"\r\n      );\r\n      const formUnitMeasure = document.querySelector(\"#formUnitMeasure\");\r\n\r\n      title.textContent = \"Editar indicador: \" + IndicatorName;\r\n\r\n      if (!IndicatorId) {\r\n        return;\r\n      }\r\n\r\n      const response = await fetch(\r\n        `https://localhost:44357/Indicators/Edit/${IndicatorId}`\r\n      );\r\n      const data = await response.json();\r\n\r\n      formObjectivIndicatorId.value = data?.Indicator?.ObjectiveParentId;\r\n      formIndicatorName.value = data?.Indicator?.Name;\r\n      formIndicatorId.value = data?.Indicator?.Id;\r\n      formMeasurementFrequency.value = data?.Indicator?.MeasurementFrequency;\r\n      formUnitMeasure.value = data?.Indicator?.UnitMeasure;\r\n      formIndicatorDescription.value = data?.Indicator?.Description;\r\n      formMetricId.value = data?.MetricType?.Id;\r\n    } catch (error) {\r\n      console.error(\"Error loading perspective data\", error);\r\n    }\r\n  };\r\n\r\n  // Modal to create new objectives\r\n  window.openObjectiveModal = function (dispatcher) {\r\n    const title = document.getElementById(\"modalTitle\");\r\n    const inputId = document.getElementById(\"perspectiveId\");\r\n    const perspectiveId = dispatcher.getAttribute(\"data-id\");\r\n    const perspectiveName = dispatcher.getAttribute(\"data-name\");\r\n\r\n    title.textContent = \"Crear Objetivo - \" + perspectiveName;\r\n    inputId.value = perspectiveId;\r\n  };\r\n\r\n  // Modal to create new indicators\r\n  window.openIndicatorModal = function (dispatcher) {\r\n    const title = document.getElementById(\"modalTitleIndicator\");\r\n    const inputId = document.getElementById(\"objectiveId\");\r\n    const objectiveId = dispatcher.getAttribute(\"data-id\");\r\n    const objectiveName = dispatcher.getAttribute(\"data-name\");\r\n\r\n    title.textContent = \"Crear Indicador - \" + objectiveName;\r\n    inputId.value = objectiveId;\r\n  };\r\n\r\n  window.openIndicatorDataModal = function (dispatcher) {\r\n    const title = document.getElementById(\"modalTitleDataIndicator\");\r\n    const indicatorName = dispatcher.getAttribute(\"data-name\");\r\n    const indicatorId = dispatcher.getAttribute(\"data-id\");\r\n\r\n    title.textContent = \"Editar Valores: \" + indicatorName;\r\n\r\n    setupDateTableUpdater(indicatorId);\r\n  };\r\n\r\n  // Table Collapse\r\n  window.tableCollapse = new Accordion(\r\n    document.querySelector(\"#table-collapse\"),\r\n    {\r\n      onlyChildNodes: true,\r\n      duration: 200,\r\n      showMultiple: true,\r\n    }\r\n  );\r\n\r\n  // Table for Objetives\r\n  document\r\n    .querySelectorAll(\"[id^='table-collapse-objetive-']\")\r\n    .forEach((table) => {\r\n      new Accordion(table, {\r\n        onlyChildNodes: false,\r\n        duration: 200,\r\n        showMultiple: true,\r\n        elementClass: \"ac-objetive\",\r\n        triggerClass: \"ac-trigger-objetive\",\r\n        activeClass: \"is-active-objetive\",\r\n      });\r\n    });\r\n\r\n  // Watchlist 3 Chart\r\n  const watchlist3Config = {\r\n    colors: [\"#3AC5BC\"],\r\n    chart: {\r\n      height: 30,\r\n      width: 60,\r\n      type: \"line\",\r\n      parentHeightOffset: 0,\r\n      toolbar: {\r\n        show: false,\r\n      },\r\n    },\r\n    series: [\r\n      {\r\n        name: \"Stat\",\r\n        data: [654, 820, 102, 540, 154, 614],\r\n      },\r\n    ],\r\n\r\n    dataLabels: {\r\n      enabled: false,\r\n    },\r\n    stroke: {\r\n      curve: \"smooth\",\r\n      width: 3,\r\n    },\r\n\r\n    grid: {\r\n      padding: {\r\n        left: 0,\r\n        right: 0,\r\n        top: -28,\r\n        bottom: 0,\r\n      },\r\n    },\r\n    xaxis: {\r\n      show: false,\r\n      axisBorder: {\r\n        show: false,\r\n      },\r\n      axisTicks: {\r\n        show: false,\r\n      },\r\n      labels: {\r\n        show: false,\r\n      },\r\n    },\r\n    yaxis: {\r\n      show: false,\r\n      axisBorder: {\r\n        show: false,\r\n      },\r\n      axisTicks: {\r\n        show: false,\r\n      },\r\n      labels: {\r\n        show: false,\r\n      },\r\n    },\r\n  };\r\n  const watchlist2El = document.querySelector(\"#watchlist-2-chart\");\r\n\r\n  setTimeout(() => {\r\n    watchlist2El._chart = new ApexCharts(watchlist2El, watchlist3Config);\r\n    watchlist2El._chart.render();\r\n  });\r\n};\r\n\r\n/**\r\n * Inicializa los poppers para los dropdowns observando cambios en el DOM y en la carga inicial.\r\n *\r\n * Esta función configura y supervisa los elementos especificados dentro de contenedores\r\n * designados, inicializando poppers para los elementos dropdown que se encuentran\r\n * en referencias específicas. Utiliza la biblioteca Popper.js para gestionar\r\n * la colocación y el comportamiento visual de los dropdowns asociados.\r\n *\r\n * El parámetro `wrapper` define el prefijo del ID esperado para los wrappers de los dropdowns,\r\n * permitiendo una inicialización flexible en diferentes secciones de la página.\r\n *\r\n * El parámetro `watcher` especifica el ID del contenedor cuyos cambios en la estructura del DOM\r\n * serán observados para reconfigurar o aplicar los poppers a nuevos dropdowns agregados dinámicamente.\r\n *\r\n * @function initializeDropdownPoppers\r\n * @param {string} [wrapper=\"dropdown-wrapper-\"] - Prefijo del ID de los contenedores de los dropdowns a inicializar.\r\n * @param {string} [watcher=\"table-collapse\"] - ID del elemento contenedor donde se observarán los cambios del DOM.\r\n */\r\nconst initializeDropdownPoppers = (\r\n  wrapper = \"dropdown-wrapper-\",\r\n  watcher = \"table-collapse\"\r\n) => {\r\n  const initPoppers = () => {\r\n    document.querySelectorAll(\".popper-ref\").forEach((button) => {\r\n      if (!button.dataset.popperInitialized) {\r\n        const dropdownId = button.closest(`[id^=\"${wrapper}\"]`).id;\r\n        const popperConfig = {\r\n          placement: \"bottom-start\",\r\n          modifiers: [\r\n            {\r\n              name: \"offset\",\r\n              options: {\r\n                offset: [0, 4],\r\n              },\r\n            },\r\n          ],\r\n        };\r\n\r\n        new Popper(\r\n          `#${dropdownId}`,\r\n          \".popper-ref\",\r\n          \".popper-root\",\r\n          popperConfig\r\n        );\r\n\r\n        button.dataset.popperInitialized = \"true\";\r\n      }\r\n    });\r\n  };\r\n\r\n  const observer = new MutationObserver((mutations) => {\r\n    mutations.forEach((mutation) => {\r\n      if (mutation.type == \"childList\") {\r\n        initPoppers();\r\n      }\r\n    });\r\n  });\r\n\r\n  const configObserver = { childList: true, subtree: true };\r\n  const targetNode = document.getElementById(watcher);\r\n  observer.observe(targetNode, configObserver);\r\n\r\n  initPoppers();\r\n};\r\n\r\nfunction setupDateTableUpdater(indicatorId = null) {\r\n  if (!indicatorId) {\r\n    return;\r\n  }\r\n\r\n  let globalIndicatorData = null; // Esta variable almacenará los datos del indicador\r\n\r\n  const updateIntervalSelect = document.getElementById(\r\n    \"measurementFrequencySelect\"\r\n  );\r\n  const deadlineDatePicker = document.getElementById(\"indicatorDeadlinePicker\");\r\n  const tableBody = document.querySelector(\"#dataIndicatorTable tbody\");\r\n  const addButton = document.getElementById(\"addTableRow\");\r\n  const updateMetricIdSelect = document.getElementById(\r\n    \"formIndicatorDataMetricId\"\r\n  );\r\n  const initialDayIndicator = document.getElementById(\"initialDayIndicator\");\r\n\r\n  async function fetchIndicatorDetails() {\r\n    const url = `https://localhost:44357/Indicators/Details/${indicatorId}`;\r\n\r\n    try {\r\n      const response = await fetch(url, {\r\n        method: \"GET\",\r\n      });\r\n\r\n      if (!response.ok) {\r\n        throw new Error(\"Network response was not ok\");\r\n      }\r\n\r\n      const data = await response.json();\r\n      return data;\r\n    } catch (error) {\r\n      console.error(\r\n        \"There has been a problem with your fetch operation:\",\r\n        error\r\n      );\r\n    }\r\n  }\r\n\r\n  async function fetchAndDisplayIndicatorDetails() {\r\n    const indicatorData = await fetchIndicatorDetails();\r\n    if (indicatorData) {\r\n      globalIndicatorData = indicatorData;\r\n      populateControls(indicatorData);\r\n      populateTable(indicatorData);\r\n    }\r\n  }\r\n\r\n  function populateControls(data) {\r\n    // Poblar el select de intervalo de actualización\r\n    updateIntervalSelect.value = data.Indicator.MeasurementFrequency;\r\n\r\n    // Poblar el select de agrupaciones de metricas\r\n    updateMetricIdSelect.value = data.MetricType.Id;\r\n\r\n    // Determinar el día inicial basado en el primer DataIndicator o usar el día actual si no hay datos\r\n    const firstDataIndicatorDate =\r\n      data.DataIndicators.length > 0\r\n        ? dayjs(data.DataIndicators[0].Date)\r\n        : dayjs();\r\n\r\n    // Poblar el valor del día inicial\r\n    initialDayIndicator.value = firstDataIndicatorDate.date();\r\n\r\n    // Poblar la fecha límite\r\n    const dateInput = deadlineDatePicker;\r\n    let deadlineDate =\r\n      data.Indicator.DeadlineDate || dayjs().format(\"YYYY-MM-DD\");\r\n\r\n    if (dateInput._datepicker) {\r\n      dateInput._datepicker.setDate(deadlineDate);\r\n    } else {\r\n      dateInput.value = deadlineDate;\r\n    }\r\n  }\r\n\r\n  function populateTable(data) {\r\n    const dates = data.DataIndicators.map((di) => ({\r\n      date: di.Date,\r\n      value: di.Value,\r\n      objective: (data.Targets.find((t) => t.Id === di.Id) || {}).ExpectedValue,\r\n    }));\r\n\r\n    if (dates.length === 0) {\r\n      updateTable();\r\n    } else {\r\n      tableBody.innerHTML = \"\";\r\n      dates.forEach((date) => {\r\n        const isFirstRow = index === 0;\r\n        addDateRow(date.date, date.value, date.objective, isFirstRow);\r\n      });\r\n    }\r\n  }\r\n\r\n  function addDateRow(\r\n    date = null,\r\n    value = \"Valor\",\r\n    objective = \"0\",\r\n    isFirstRow = false\r\n  ) {\r\n    const objectiveInput = isFirstRow\r\n      ? `<input class=\"form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent\" value=\"${objective}\" type=\"number\" min=\"0\" onchange=\"handleFirstObjectiveChange(this)\" />`\r\n      : `<input style=\"cursor: not-allowed;\" class=\"form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent\" value=\"${objective}\" type=\"number\" min=\"0\" disabled />`;\r\n\r\n    const row = `\r\n      <tr>\r\n        <td class=\"whitespace-nowrap border border-l-0 border-slate-200 px-1.5 py-1.5 text-center dark:border-navy-500\">\r\n          ${dayjs(date).format(\"DD/MM/YYYY\")}\r\n        </td>\r\n        <td class=\"whitespace-nowrap border border-slate-200 px-1.5 py-1.5 text-center dark:border-navy-500\">\r\n          <label class=\"block\">\r\n            <input class=\"form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent\" placeholder=\"Ingrese el Valor\" value=\"${value}\" type=\"number\" min=\"0\" />\r\n          </label>\r\n        </td>\r\n        <td class=\"whitespace-nowrap border border-slate-200 px-1.5 py-1.5 text-center dark:border-navy-500\">\r\n          <label class=\"block\">\r\n            ${objectiveInput}\r\n          </label>\r\n        </td>\r\n        <td class=\"whitespace-nowrap border border-r-0 border-slate-200 px-1.5 py-1.5 text-center dark:border-navy-500\">\r\n          <div class=\"flex justify-center space-x-reverse space-x-2\">\r\n            <button onclick=\"removeRow(this)\" class=\"btn h-8 w-8 p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25\">\r\n              <i class=\"fa fa-trash-alt\"></i>\r\n            </button>\r\n          </div>\r\n        </td>\r\n      </tr>`;\r\n    tableBody.innerHTML += row;\r\n  }\r\n\r\n  initialDayIndicator.addEventListener(\"change\", updateTable);\r\n\r\n  fetchAndDisplayIndicatorDetails();\r\n\r\n  function adjustDateByInterval(date, interval) {\r\n    switch (interval) {\r\n      case \"Diariamente\":\r\n        return date.add(1, \"day\");\r\n      case \"Semanalmente\":\r\n        return date.add(7, \"days\");\r\n      case \"Mensualmente\":\r\n        return date.add(1, \"month\");\r\n      case \"Trimestralmente\":\r\n        return date.add(3, \"months\");\r\n      case \"Semestralmente\":\r\n        return date.add(6, \"months\");\r\n      case \"Anualmente\":\r\n        return date.add(1, \"year\");\r\n    }\r\n    return date;\r\n  }\r\n\r\n  function generateDates(initialDay, interval) {\r\n    if ([\"Nunca\"].includes(interval)) {\r\n      return [];\r\n    }\r\n\r\n    const dates = [];\r\n    let currentDate = initialDay ? dayjs().set(\"date\", initialDay) : dayjs();\r\n    if (!currentDate.isValid()) {\r\n      currentDate = dayjs();\r\n    }\r\n\r\n    if (interval === \"Una vez\") {\r\n      dates.push(currentDate.toDate());\r\n      return dates;\r\n    }\r\n\r\n    for (let i = 0; i < 12; i++) {\r\n      dates.push(currentDate.toDate());\r\n      currentDate = adjustDateByInterval(currentDate, interval);\r\n    }\r\n    return dates;\r\n  }\r\n\r\n  function updateTable() {\r\n    const interval = updateIntervalSelect.value;\r\n    const startDay = initialDayIndicator.value;\r\n    const dates = generateDates(startDay, interval);\r\n\r\n    addButton.style.cursor = \"pointer\";\r\n    addButton.disabled = false;\r\n\r\n    if ([\"Nunca\", \"Una vez\"].includes(interval)) {\r\n      addButton.style.cursor = \"not-allowed\";\r\n      addButton.disabled = true;\r\n    }\r\n\r\n    // Recuperar valores y objetivos existentes antes de borrar el contenido\r\n    let existingData = [];\r\n    if (tableBody && tableBody.querySelectorAll(\"tr\").length > 0) {\r\n      existingData = Array.from(tableBody.querySelectorAll(\"tr\")).map((tr) => {\r\n        const valueInput = tr.cells[1]?.querySelector(\"input\");\r\n        const objectiveInput = tr.cells[2]?.querySelector(\"input\");\r\n        return {\r\n          value: valueInput ? valueInput.value : \"0\",\r\n          objective: objectiveInput ? objectiveInput.value : \"0\",\r\n        };\r\n      });\r\n    }\r\n\r\n    tableBody.innerHTML = \"\";\r\n\r\n    if (!dates.length) {\r\n      tableBody.innerHTML = `\r\n       <tr>\r\n          <td class=\"rounded-lg px-5 py-8 text-lg text-center\" colspan=\"4\">\r\n            Por favor, selecciona un intervalo de actualización para comenzar a añadir registros.\r\n          </td>\r\n        </tr> \r\n      `;\r\n      return;\r\n    }\r\n\r\n    const firstObjective =\r\n      existingData.length > 0 ? existingData[0].objective : \"0\";\r\n\r\n    dates.forEach((date, index) => {\r\n      const isFirstRow = index === 0;\r\n      const value = existingData[index] ? existingData[index].value : \"0\";\r\n      addDateRow(date, value, firstObjective, isFirstRow);\r\n    });\r\n  }\r\n\r\n  window.handleFirstObjectiveChange = function (input) {\r\n    const newValue = input.value;\r\n    const objectiveInputs = document.querySelectorAll(\r\n      '#dataIndicatorTable tbody tr td:nth-child(3) input[type=\"number\"]'\r\n    );\r\n\r\n    objectiveInputs.forEach((childInput, index) => {\r\n      childInput.value = newValue;\r\n    });\r\n  };\r\n\r\n  function addTableRow() {\r\n    const interval = updateIntervalSelect.value;\r\n\r\n    if ([\"Nunca\", \"Una vez\"].includes(interval)) {\r\n      $notification({\r\n        text: \"Selecciona un intervalo de actualización recurrente para poder agregar registros.\",\r\n        variant: \"error\",\r\n      });\r\n      return;\r\n    }\r\n\r\n    const lastDateCell = tableBody.querySelector(\r\n      \"tr:last-child td:first-child\"\r\n    );\r\n    let lastDateMatch = lastDateCell\r\n      ? lastDateCell.textContent.match(/\\d{2}\\/\\d{2}\\/\\d{4}/)\r\n      : null;\r\n    let lastDateText = lastDateMatch ? lastDateMatch[0] : null;\r\n    lastDateText = lastDateText\r\n      ? lastDateText.split(\"/\").reverse().join(\"-\")\r\n      : null;\r\n    let lastDate = lastDateText ? dayjs(lastDateText) : dayjs();\r\n\r\n    if (!lastDate.isValid()) {\r\n      lastDate = dayjs();\r\n    }\r\n\r\n    lastDate = adjustDateByInterval(lastDate, interval);\r\n\r\n    const firstRow = tableBody.querySelector(\"tr:first-child\");\r\n    const firstObjective = firstRow\r\n      ? firstRow.cells[2].querySelector(\"input\").value\r\n      : \"0\";\r\n\r\n    addDateRow(lastDate, 0, firstObjective);\r\n  }\r\n\r\n  window.removeRow = function (button) {\r\n    const row = button.closest(\"tr\");\r\n    row.parentNode.removeChild(row);\r\n\r\n    if (tableBody.querySelectorAll(\"tr\").length === 0) {\r\n      tableBody.innerHTML = `\r\n        <tr>\r\n          <td class=\"rounded-lg px-5 py-8 text-lg text-center\" colspan=\"4\">\r\n            Por favor, selecciona un intervalo de actualización para comenzar a añadir registros.\r\n          </td>\r\n        </tr>`;\r\n    }\r\n\r\n    $notification({ text: \"Registro Eliminado\", variant: \"success\" });\r\n  };\r\n\r\n  async function sendUpdatedData() {\r\n    if (!globalIndicatorData) {\r\n      console.error(\"No indicator data available\");\r\n      return;\r\n    }\r\n\r\n    const indicatorData = {\r\n      Id: globalIndicatorData.Indicator.Id,\r\n      Name: globalIndicatorData.Indicator.Name,\r\n      Description: globalIndicatorData.Indicator.Description,\r\n      MeasurementFrequency: updateIntervalSelect.value,\r\n      UnitMeasure: globalIndicatorData.Indicator.UnitMeasure,\r\n      ObjectiveId: globalIndicatorData.Indicator.ObjectiveId,\r\n      MetricTypeId: updateMetricIdSelect.value,\r\n    };\r\n\r\n    const dataIndicators = Array.from(tableBody.querySelectorAll(\"tr\")).map(\r\n      (row) => ({\r\n        Id: row.dataset.id,\r\n        Value: row.cells[1].querySelector(\"input\").value,\r\n        Date: dayjs(row.cells[0].innerText, \"DD/MM/YYYY\").format(\"YYYY-MM-DD\"),\r\n        IndicatorId: globalIndicatorData.Indicator.Id,\r\n      })\r\n    );\r\n\r\n    const firstRow = tableBody.querySelector(\"tr\");\r\n    const target = {\r\n      Id: firstRow ? firstRow.dataset.targetId : null,\r\n      Description: firstRow\r\n        ? firstRow.cells[2].querySelector(\"input\").value\r\n        : \"\",\r\n      ExpectedValue: firstRow\r\n        ? firstRow.cells[2].querySelector(\"input\").value\r\n        : \"\",\r\n      DeadlineDate: dayjs(deadlineDatePicker.value, \"YYYY-MM-DD\").format(\r\n        \"YYYY-MM-DD\"\r\n      ),\r\n      IndicatorId: globalIndicatorData.Indicator.Id,\r\n    };\r\n    console.log(\"Sending Indicator Data:\", indicatorData);\r\n    console.log(\"Sending DataIndicators:\", dataIndicators);\r\n    console.log(\"Sending Target:\", target);\r\n\r\n    // try {\r\n    //   const indicatorResponse = await fetch(\r\n    //     `https://localhost:44357/Indicators/Edit/${indicatorData.Id}`,\r\n    //     {\r\n    //       method: \"POST\",\r\n    //       headers: { \"Content-Type\": \"application/json\" },\r\n    //       body: JSON.stringify(indicatorData),\r\n    //     }\r\n    //   );\r\n    //   const indicatorResult = await indicatorResponse.json();\r\n\r\n    //   const dataIndicatorsResponse = await fetch(\r\n    //     \"https://localhost:44357/DataIndicators/Create\",\r\n    //     {\r\n    //       method: \"POST\",\r\n    //       headers: { \"Content-Type\": \"application/json\" },\r\n    //       body: JSON.stringify(dataIndicators),\r\n    //     }\r\n    //   );\r\n    //   const dataIndicatorsResult = await dataIndicatorsResponse.json();\r\n\r\n    //   const targetsResponse = await fetch(\r\n    //     \"https://localhost:44357/Targets/Create\",\r\n    //     {\r\n    //       method: \"POST\",\r\n    //       headers: { \"Content-Type\": \"application/json\" },\r\n    //       body: JSON.stringify(targets),\r\n    //     }\r\n    //   );\r\n    //   const targetsResult = await targetsResponse.json();\r\n\r\n    //   console.log(\"Indicator Update Response:\", indicatorResult);\r\n    //   console.log(\"DataIndicators Create Response:\", dataIndicatorsResult);\r\n    //   console.log(\"Targets Create Response:\", targetsResult);\r\n    // } catch (error) {\r\n    //   console.error(\"Error sending updated data:\", error);\r\n    // }\r\n  }\r\n\r\n  updateIntervalSelect.addEventListener(\"change\", updateTable);\r\n  deadlineDatePicker.addEventListener(\"change\", updateTable);\r\n  addButton.addEventListener(\"click\", addTableRow);\r\n  document\r\n    .getElementById(\"saveChangesButton\")\r\n    .addEventListener(\"click\", sendUpdatedData);\r\n}\r\n\r\nwindow.addEventListener(\"app:mounted\", initializePerspectivesComponents, {\r\n  once: true,\r\n});\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  initializeDropdownPoppers();\r\n  initializeDropdownPoppers(\r\n    \"dropdown-wrapper-objetive-\",\r\n    \"table-collapse-objetive\"\r\n  );\r\n  initializeDropdownPoppers(\r\n    \"dropdown-wrapper-indicator-\",\r\n    \"table-collapse-indicator\"\r\n  );\r\n});\r\n\n\n//# sourceURL=webpack://cmisentinelprime/./Scripts/pages-2/perspectives.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./Scripts/pages-2/perspectives.js"]();
/******/ 	
/******/ })()
;
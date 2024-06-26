const initializeDashboardComponents = async () => {
  async function loadTopStates() {
    try {
      const response = await fetch(
        "http://localhost:8000/bsc-dashboard/trends/states"
      );
      const data = await response.json();
      const container = document.getElementById("top-states-ranking");
      const counter = document.getElementById("top-states-counter");

      // Inicializar una variable para construir el HTML
      let htmlContent = "";

      counter.innerHTML = data.length;
      // Iterar sobre los datos recibidos y construir el HTML para cada estado
      data.forEach((state) => {
        let trendIcon = "";

        if (state.Trend === "up") {
          trendIcon = `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
          </svg>
        `;
        }

        if (state.Trend === "down") {
          trendIcon = `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
          </svg>
        `;
        }

        if (state.Trend === "no change") {
          trendIcon = `
            <svg style="transform: rotate(270deg)" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
            </svg>
          `;
        }

        htmlContent += `
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <p>${state.EstadoEnvio}</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-sm text-slate-800 dark:text-navy-100">${state.TotalEnvios}</p>
              ${trendIcon}
            </div>
          </div>`;
      });

      // Asignar el HTML construido al contenedor
      container.innerHTML = htmlContent;
    } catch (error) {
      console.error("Error loading top states", error);
    }
  }

  async function loadTopClients() {
    try {
      const response = await fetch(
        "http://localhost:8000/bsc-dashboard/trends/clients"
      );
      const data = await response.json();
      const container = document.getElementById("top-clients-ranking");
      const counter = document.getElementById("top-clients-counter");

      // Inicializar una variable para construir el HTML
      let htmlContent = "";

      counter.innerHTML = data.length;
      // Iterar sobre los datos recibidos y construir el HTML para cada estado
      data.forEach((state) => {
        let trendIcon = "";

        if (state.Trend === "up") {
          trendIcon = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
          `;
        }

        if (state.Trend === "down") {
          trendIcon = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
            </svg>
          `;
        }

        if (state.Trend === "no change") {
          trendIcon = `
            <svg style="transform: rotate(270deg)" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
            </svg>
          `;
        }

        htmlContent += `
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <p>${state.ClienteNombre}</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-sm text-slate-800 dark:text-navy-100">${state.TotalPedidos}</p>
              ${trendIcon}
            </div>
          </div>`;
      });

      // Asignar el HTML construido al contenedor
      container.innerHTML = htmlContent;
    } catch (error) {
      console.error("Error loading top clients", error);
    }
  }

  async function loadLatestOrdersTable() {
    try {
      const response = await fetch("http://localhost:8000/eda/tail");

      const data = await response.json();

      const tableBody = document.querySelector("#latest-orders-table tbody");

      tableBody.innerHTML = "";

      data.forEach((item, index) => {
        let shippingMethodClass = "";
        let paymentMethodClass = "";

        if (item.MetodoEnvio === "envio economico") {
          shippingMethodClass =
            "badge bg-warning/10 text-warning dark:bg-warning/15";
        }

        if (item.MetodoEnvio === "envio expreso") {
          shippingMethodClass = "badge bg-info/10 text-info dark:bg-info/15";
        }

        if (item.MetodoEnvio === "envio estandar") {
          shippingMethodClass =
            "badge bg-success/10 text-success dark:bg-success/15";
        }

        if (item.MetodoPago === "Efectivo") {
          paymentMethodClass = "badge space-x-2.5 text-xs+ text-success";
        }

        if (item.MetodoPago === "Transferencia bancaria") {
          paymentMethodClass = "badge space-x-2.5 text-xs+ text-info";
        }

        if (item.MetodoPago === "Tarjeta de crédito") {
          paymentMethodClass = "badge space-x-2.5 text-xs+ text-warning";
        }

        const rowHtml = `
                <tr class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                    <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                      <p class="font-medium text-primary dark:text-accent-light">
                        #${index + 1}
                      </p>
                    </td>
                    <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                      <span class="font-medium text-slate-700 dark:text-navy-100">
                        ${item.FullName}
                      </span>
                    </td>
                    <td class="whitespace-nowrap px-4 py-3 sm:px-5">${
                      item.EmpresaEnvio
                    }</td>
                    <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                      <div class="${shippingMethodClass}">
                        ${item.MetodoEnvio}
                      </div>
                    </td>
                    <td class="whitespace-nowrap px-4 py-3 sm:px-5">${
                      item.Producto
                    }</td>
                    <td class="whitespace-nowrap px-4 py-3 sm:px-5">${
                      item.Cantidad
                    }</td>
                    <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                      <div class="${paymentMethodClass}">
                        <div class="w-2 h-2 rounded-full bg-current"></div>
                        <span>${item.MetodoPago}</span>
                      </div>
                    </td>
                    <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                      <p class="text-sm+ font-medium text-slate-700 dark:text-navy-100">
                        $${item.CostoFinal.toFixed(2)}
                      </p>
                    </td>
                </tr>
            `;
        tableBody.innerHTML += rowHtml;
      });
    } catch (error) {
      console.error("Error loading the latest orders", error);
    }
  }

  loadTopClients();
  loadTopStates();
  loadLatestOrdersTable();
};

window.addEventListener("app:mounted", initializeDashboardComponents, {
  once: true,
});

const loadCounters = async (tab = "monthly") => {
  try {
    const response = await fetch(
      `http://localhost:8000/bsc-dashboard/counters?tab=${tab}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    for (const [key, value] of Object.entries(data)) {
      const stateClass = `status-${key.toLowerCase().replace(/\s+/g, "-")}`;
      const element = document.querySelector(`.${stateClass}`);
      if (element) {
        element.textContent = value;
      } else {
        console.log(`No element found for ${stateClass}`);
      }
    }
  } catch (error) {
    console.error("Error loading counter", error);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  async function loadShippingCostHistogram() {
    try {
      const response = await fetch(
        "http://localhost:8000/eda/histograma-costo-envio"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      window.Highcharts.chart("overview-histogram-chart", {
        chart: {
          type: "histogram",
          zoomType: "xy",
        },
        title: {
          text: "Histograma de Costo de Envío",
          align: "left",
          style: {
            fontSize: "14px",
          },
        },
        credits: {
          enabled: false,
        },
        xAxis: [
          { title: { text: "Costo de Envío" }, alignTicks: false },
          { title: { text: "Histograma" }, alignTicks: false, opposite: true },
        ],
        yAxis: [
          { title: { text: "Frecuencia" } },
          { title: { text: "Histograma" }, opposite: true },
        ],
        plotOptions: {
          histogram: {
            accessibility: {
              point: {
                valueDescriptionFormat:
                  "{index}. {point.x:.3f} to {point.x2:.3f}, {point.y}.",
              },
            },
          },
        },
        series: [
          {
            name: "Histograma",
            type: "histogram",
            xAxis: 1,
            yAxis: 1,
            baseSeries: "s1",
            zIndex: -1,
          },
          {
            name: "Datos",
            type: "scatter",
            data: data,
            id: "s1",
            marker: { radius: 1.5 },
          },
        ],
      });

      console.log(data);
    } catch (error) {
      console.error(
        "Error loading histogram for shipping cost:",
        error.message
      );
    }
  }

  async function loadUsersTail() {
    try {
      const response = await fetch("http://localhost:8000/eda/head");

      const data = await response.json();

      console.log({ dataTail: data });
    } catch (error) {
      console.error("Error loading users tail", error);
    }
  }

  async function loadFinalCostScatter() {
    try {
      const response = await fetch(
        "http://localhost:8000/eda/scatter-costo-final"
      );
      const data = await response.json();

      Highcharts.chart("final-cost-chart", {
        chart: {
          type: "scatter",
          zoomType: "xy",
        },
        title: {
          text: "Dispersión del Costo Final por Variables",
        },
        subtitle: {
          text: "Exploración de la relación entre diferentes variables y costo final",
        },
        xAxis: {
          title: {
            text: "Variable X",
          },
          startOnTick: true,
          endOnTick: true,
          showLastLabel: true,
        },
        yAxis: {
          title: {
            text: "Costo Final",
          },
          labels: {
            format: "{value} $",
          },
        },
        legend: {
          enabled: false, // Ocultar la leyenda si solo hay una serie
        },
        plotOptions: {
          scatter: {
            marker: {
              radius: 5,
              states: {
                hover: {
                  enabled: true,
                  lineColor: "rgb(100,100,100)",
                },
              },
            },
          },
        },
        tooltip: {
          headerFormat: "<b>{series.name}</b><br>",
          pointFormat: "Índice: {point.x}, Costo: {point.y} $",
        },
        series: [
          {
            name: "Costo Final",
            color: "rgba(119, 152, 191, 0.5)", // Un color específico para la serie
            data: data,
          },
        ],
      });
    } catch (error) {
      console.error("Error loading final cost scatter data", error);
    }
  }

  async function loadBoxPlot() {
    try {
      const response = await fetch("http://localhost:8000/eda/box-plot");
      const data = await response.json();

      Highcharts.chart("box-plot-chart", {
        chart: {
          type: "boxplot",
          zoomType: "xy",
        },
        title: {
          text: "",
        },
        legend: {
          enabled: false,
        },
        credits: {
          enabled: false,
        },
        xAxis: {
          categories: [
            "Costo Final",
            "Descuento",
            "Cantidad",
            "Costo de Envío",
            "Precio Unitario",
          ],
          title: {
            text: "Categorías",
          },
        },

        yAxis: {
          title: {
            text: "Valores",
          },
          plotLines: [
            {
              value: 932,
              color: "red",
              width: 1,
              label: {
                text: "Mean: 932",
                align: "center",
                style: {
                  color: "gray",
                },
              },
            },
          ],
        },

        series: [
          {
            name: "Observaciones",
            data: [
              data.CostoFinal.boxplot,
              data.Descuento.boxplot,
              data.Cantidad.boxplot,
              data.CostoEnvio.boxplot,
              data.PrecioUnitario.boxplot,
            ],
            tooltip: {
              headerFormat: "<em>Categoría {point.key}</em><br/>",
            },
          },
          {
            name: "Outliers",
            color: Highcharts.getOptions().colors[0],
            type: "scatter",
            data: [
              ...data.CostoFinal.outliers,
              ...data.Descuento.outliers,
              ...data.Cantidad.outliers,
              ...data.CostoEnvio.outliers,
              ...data.PrecioUnitario.outliers,
            ],
            marker: {
              fillColor: "white",
              lineWidth: 1,
              lineColor: Highcharts.getOptions().colors[0],
            },
            tooltip: {
              pointFormat: "Observation: {point.y}",
            },
          },
        ],
      });
    } catch (error) {
      console.error("Error loading box plot data", error);
    }
  }

  loadShippingCostHistogram();
  loadUsersTail();
  loadFinalCostScatter();
  loadBoxPlot();
});

document.addEventListener("DOMContentLoaded", async function () {
  window.loadCounters = loadCounters;
  await loadCounters();
});

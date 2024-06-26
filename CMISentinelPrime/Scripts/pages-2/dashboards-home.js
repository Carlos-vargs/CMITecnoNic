const initializeDashboardComponents = () => {};

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
  window.loadCounters = loadCounters;
  loadCounters();
});

/**
 * Carousel Library
 * @see https://swiperjs.com/
 */
import Swiper from "swiper/bundle";

/**
 * Drag & Drop Library
 * @see https://github.com/SortableJS/Sortable
 */
import Sortable from "sortablejs";

/**
 * Charts Libraries
 * @see https://apexcharts.com/
 */
import ApexCharts from "apexcharts";

/**
 * Highcharts Libraries
 * @see https://www.highcharts.com/
 */
import Highcharts from "highcharts";
import more from "highcharts/highcharts-more";
import Histogram from "highcharts/modules/histogram-bellcurve";
import highcharts3D from "highcharts/highcharts-3d";

more(Highcharts);
Histogram(Highcharts);
highcharts3D(Highcharts);

/**
 * Tables Libraries
 * @see https://gridjs.io/
 */
import * as Gridjs from "gridjs";

window.Swiper = Swiper;
window.Sortable = Sortable;
window.ApexCharts = ApexCharts;
window.Highcharts = Highcharts;
window.Gridjs = Gridjs;

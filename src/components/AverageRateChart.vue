<template>
  <div>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import {
  Chart,
      LineController,
      LineElement,
      PointElement,
      LinearScale,
      CategoryScale,
      Title,
      Tooltip,
      Legend,
} from 'chart.js';

Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend
);
import Papa from 'papaparse';
import axios from 'axios';

export default {
  data() {
    return {
      chartInstance: null,
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    async fetchData() {
      const url = 'http://www.bankofengland.co.uk/boeapps/iadb/fromshowcolumns.asp?csv.x=yes&DateFrom=01/Jan/2020&DateTo=15/Mar/2023&SeriesCodes=IUMZO28&CSVF=TN&UsingCodes=Y&VPD=Y&VFD=N';
      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const { data } = await axios.get(proxy + url, { responseType: 'text' });
      return Papa.parse(data, { header: true }).data;
    },
    processData(data) {
      return data.reduce((acc, row) => {
        acc.dates.push(row.DATE);
        acc.values.push(row.IUMZO28);
        return acc;
      }, { dates: [], values: [] });
    },
    async renderChart() {
      const rawData = await this.fetchData();
      const { dates, values } = this.processData(rawData);

      const ctx = this.$refs.chart.getContext('2d');
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }
      this.chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [{
            label: 'Average Rate',
            data: values,
            borderColor: '#0d9489',
            fill: false
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true
        }
      });
    }
  }
}
</script>

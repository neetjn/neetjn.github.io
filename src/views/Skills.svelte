<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js';

  import Background from '../assets/images/welcome-bg.jpg';

  onMount(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  });
</script>

<div class="w-full h-screen bg-purple-500 text-center text-white animated fadeIn">
  <img alt=""
       class="absolute top-0 right-0 w-full h-full"
       style="background: url({Background}) no-repeat; background-size: cover; background-position: 100% 25%; opacity: 0.75;" />
  <div class="relative w-full h-screen table z-20">
    <canvas id="myChart" />
  </div>
</div>

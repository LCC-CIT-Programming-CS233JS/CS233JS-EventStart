// Notice the import statements
import './general';
const regeneratorRuntime = require("regenerator-runtime");
import apiCall from './services/api/apiCall';
import { Chart, registerables } from 'chart.js';

class Status {
  constructor() {
    Chart.register(...registerables);
    /* Part 1 - Finish the constructor
    - Add references to each of these elements on the page
        this.$experienceTab = document.querySelector('#experienceTab');
        this.$professionTab = 
        this.$ageTab = 
        this.$ageCanvas = 
        this.$professionCanvas = 
        this.$experienceCanvas = 
        this.$loadingIndicator = 
        this.$tabArea = 
        this.$chartArea = 
        this.$errorMessage = 
    - Add an instance variable for the data that comes back from the service
        this.statisticData;
    - Call loadData.  It will make the ajax call and create one graph
    - Call addEventListeners
    */
  }

/* Part 2 - Write these 2 methods. 
   Instantiate an object at the bottom of the class.
   Then TEST.  The experience chart should work at this point. */
  loadData() {
    /* Make an api call. Because it's a get request with no data,
       the only parameter is 'statistics'.
       When the Promise returns successfully
          set statisticsData to the data that's returned
          hide the loading indicator - add visually-hidden style
          show the tab area and the chart area - remove visually-hidden style
          call loadExperience - it's the default chart
       When an error occurs
          hide the loading indicator
          show the error message
      */
  }

  addEventListeners() {
    // add a click event handler to the experienceTab.  Call loadExperience.  Bind the class.
    // add a click event handler to the professionTab...
    // add a click event handler to the ageTab...
  }

  hideCharts() {
    this.$experienceTab.classList.remove('active');
    this.$professionTab.classList.remove('active');
    this.$ageTab.classList.remove('active');
    this.$ageCanvas.classList.add('visually-hidden');
    this.$professionCanvas.classList.add('visually-hidden');
    this.$experienceCanvas.classList.add('visually-hidden');
  }

  loadExperience(event = null) {
    if(event) event.preventDefault();
    this.hideCharts();
    this.$experienceCanvas.classList.remove('visually-hidden');
    this.$experienceTab.classList.add('active');
    const chartData = {
        datasets: [{
            data: this.statisticData.experience,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
            ],
            borderColor: [
              'white',
              'white',
              'white',
            ],
            borderWidth: 1
        }],
        labels: [
            'Beginner',
            'Intermediate',
            'Advanced'
        ]
    };
    new Chart(this.$experienceCanvas,{
      type: 'pie',
      data: chartData,
      options: {}
    });
  }

  /* Part 3 - Write these 2 methods. 
   Then TEST.  All 3 chars should now work. */

  // It's just like the loadExperience but there are 4 'slices' for 
  // 'School Students', 'College Students', 'Trainees', 'Employees'
  loadProfession(event = null) {
  }

  // It's just like the loadExperience but there are 3 'slices' for 
  // '10-15 years', '15-20 years', '20-25 years'
  loadAge(event = null) {
  }

}

// add a window on load handler that creates a new instance of this class

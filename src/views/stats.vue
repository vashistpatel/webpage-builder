// https://www.tutorialspoint.com/How-to-get-a-number-of-days-in-a-specified-month-using-JavaScript
// Bulma documentation was used to help create the select
<template>
    <!-- Select options -->
    <section class="hero has-background-link-light is-halfheight">
        <div class="columns is-centered">
            <div class="column is-3">
                <div class="box has-background-dark">
                    <div ref="selector">
                        <div class="select is-dark mx-1">
                        <!-- Select for the year -->
                            <select ref="Year">
                                <option>Year</option>
                                <option value="2021">2021</option>
                            </select>
                        </div>
                        <!-- Select for the month -->
                        <div class="select mx-2 is-dark">
                            <select ref="Month">
                                <option>Month</option>
                                <option value="1">Jan</option>
                                <option value="2">Feb</option>
                                <option value="3">Mar</option>
                                <option value="4">Apr</option>
                                <option value="5">May</option>
                                <option value="6">Jun</option>
                                <option value="7">Jul</option>
                                <option value="8">Aug</option>
                                <option value="9">Sep</option>
                                <option value="10">Oct</option>
                                <option value="11">Nov</option>
                                <option value="12">Dec</option>
                            </select>

                        </div>
                        <!-- Select for the day(will be dynamically loaded depending on the month chosen) -->
                        <div class="select mx-2 is-dark ">
                            <select ref="Day">
                                <option>Day</option>
                                <option v-for="index in getDays()" v-bind:key="index" :value="index">{{index}}</option>
                            </select>

                        </div>
                        <!-- Submit button -->
                        <div class="button mx-1  is-dark" v-on:click="submit()" >
                            <span>
                                Submit
                            </span>
                        </div>
                        <p class="has-text-danger has-text-weight-bold has-text-centered my-3" ref="errorMessage"></p>

                    </div>
                </div>
            </div>
        </div>
        <!-- Graph placement with columns spacing between -->
        <div class ="columns">
            <div class ="column is-1">

            </div>
            <div class ="column mx-5 is-5">
                <div class ="graphVisitors">

                </div>
            </div>
            <div class ="column is-1">

            </div>
            <div class ="column mx-1 is-4">
                <div id ="graphTimespent">

                </div>
            </div>
            <div class ="column is-1">

            </div>
        </div>

    </section>
    <section class="hero has-background-link-light is-halfheight">
    </section>


</template>

<script>
import Plotly from "plotly.js/dist/plotly";

// importing axios
import axios from 'axios';
axios.defaults.withCredentials = true;
// importing d3
// https://dev.to/andre347/d3js-and-vuejs--30c8 link taught how to import d3 in vuejs
// https://plotly.com/javascript/line-charts/
import * as d3 from 'd3';
export default{

    // initailizing variables
    data(){
        return{
            Year: null,
            Month: null,
            Day: null,
                
        }
    },
    // Methods section
    methods:{
        // Makes a bargraph
        makeVisitorsBarGraph(dict){
            // Please note this d3 bargraph code was used from Saenthuran Vignarajah's labs  which was taken from Randy Fortiers lectures!
        // Removes any previous bar graphs 
        d3.selectAll('svg').remove();
        // initailizing graph variables such as margin, height etc...
        const margin = 40;
        const width = 600;
        const height = 500;
        const chartWidth = width - 2 * margin;
        const chartHeight = height - 2 * margin;
        // Colour scale
        const colourScale = d3.scaleLinear()
                                .domain([2,2])
                                .range(['#00FF00','blue']);
        // X axis 
        const xScale = d3.scaleBand() 
                            .domain(dict.map((data) => data.Day))
                            .range([0, chartWidth])
                            .padding(0.3);
        // Y axis
        const yScale = d3.scaleLinear()
                            .domain([0, 10000])
                            .range([chartHeight, 0]);
        // creating svg and appending it to graphTimeSpent column 
        let svg = d3.select('.graphVisitors')
                        .append('svg')
                        
                            .attr('width', width)
                            .attr('height', height);
        
        // This is the title of the graph with some minor position tweeks 
        svg.append('text')
                .attr('x', width / 2)
                .attr('y', margin)
                .attr('text-anchor', 'middle')
                .text('Number of Visitors by day ');

        // X axis title with some minor position tweeks
        svg.append('text')
                .attr('x', width / 2)
                .attr('y', margin+455)
                .attr('text-anchor', 'middle')
                .text('Days');
        // Y axis title with some position tweeks
        svg.append('text')
                .attr('transform','rotate(-90)')
                .attr('x', width-850) 
                .attr('y', margin-35)
                .attr('text-anchor', 'middle')
                .text('Number of visitors');
        // Creating agroup g for the bar graphs
        let g = svg.append('g')
                        .attr('transform', `translate(${margin}, ${margin})`);
        // y-axis
        g.append('g')
            .call(d3.axisLeft(yScale));
        
        // x-axis
        g.append('g')
            .attr('transform', `translate(0, ${chartHeight})`)
            .call(d3.axisBottom(xScale));
        
        let rectangles = g.selectAll('rect')
            .data(dict)
            .enter()
                .append('rect')
                    .attr('x', (data) => xScale(data.Day))
    // eslint-disable-next-line no-unused-vars
                    .attr('y', (data) => chartHeight)
                    .attr('width', xScale.bandwidth())
    // eslint-disable-next-line no-unused-vars
                    .attr('height', (data) => 0)
                    .attr('fill', (data) => colourScale(data.visitors))
        
        rectangles.transition()
            .ease(d3.easeElastic)
            .attr('height', (data) => chartHeight - yScale(data.visitors))
            .attr('y', (data) => yScale(data.visitors))
            .duration(1000)
            .delay((data, index) => index * 50);
           
           
        },
        makeTimeSpentBarGraph(dict){
        var xArray = []
        var yArray = []
        var zArray = []
        var valuesArray = []
    // Running a loop on the ditionary  and setting the values to the arrays
        for(var i=0;i<dict.length;i++){
            yArray[i] = dict[i]['Day']; 
            xArray[i] = dict[i]['timeSpent'];
            zArray[i] = dict[i]['visitors'];
            valuesArray[i] = i;
        }

        //setting the datapoints
        var datapoints = {
            x: yArray,
            y: xArray,
            type:'scatter'
        };
                //setting the datapoints

        var datapoints2 = {
            x: yArray,
            y: zArray,
            type:'markers'
        };
        // size and title of graph
        var layout={
            height:500,
            width:500,
            title:"Time spent on website"
        }


        // Setting a data variable which contains the data points, which will be used in the
        // new plot generation
        var data = [datapoints,datapoints2]

        // Generating the new plot and adding it to the building space
        Plotly.newPlot('graphTimespent', data, layout);
           
        },
        getDays(){
            var date = new Date();
            var newDate = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
            return newDate;
        },
        submit(){
            //Removes any graphs thats there 
            d3.selectAll('svg').remove();
            //For getting back end statistics
            this.Year = this.$refs.Year.value;
            this.Month = this.$refs.Month.value;
            this.Day = this.$refs.Day.value;
            if(this.Year == "Year" || this.Month == "Month"){
                this.$refs.errorMessage.innerHTML = "Please Have Year & Month Filled!"
            }else{
                axios.post('http://localhost:4000/getData',{
                    year: this.Year,
                    month: this.Month,
                    day: this.Day
                })
                .then((response)=>{
                    var dict = []
                    for(var i=0;i<response['data'].length;i++){
                        dict[i] = {
                            "Day":response['data'][i]['day'],
                            "timeSpent":(response['data'][i]['timeSpent']/1000)/60,
                            "visitors":response['data'][i]['visitors']
                            
                        }
                        console.log(dict);
                        
                    }
                    this.makeVisitorsBarGraph(dict)
                    this.makeTimeSpentBarGraph(dict)
                    },
                    (error) =>{
                        console.log(error);
                    });
            }
        }
                    
    }
}
</script>

<style scoped>
.box{
    border-radius:0px 0px 10px 10px!important;
}
</style>
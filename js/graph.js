 var purchases = [];

        var units = 50;

    

        function log() {


              var dataset = purchases;
        d3.select("#graph").selectAll("div")
            .data(dataset)
            .enter()
            .append("div")
            .attr("class", "bar")
            .style("height", function(d) {
                var barHeight = (d * 20)+5;
           
                return barHeight + "px";
            });
            console.log('done');
        }

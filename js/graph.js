 var purchases = [];
        var cool = false;
        var units = 60;

        myDataRef.on("child_added", function(snapshot, prevChildKey) {
            newPost = snapshot.val();
            purchases.push(newPost.purchases);
            if (newPost.id == units) {
                cool = true;
                log();
            }

        });

        function log() {
            console.log(purchases);

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
        }

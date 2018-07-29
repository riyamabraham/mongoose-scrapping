

$("#articles").on("click",function(e){
    $(".results").empty();
    console.log("here");

    $.ajax({
        method: "GET",
        url: "/scrape/" 
    }).then(function(data){
        console.log(data);

        console.log(data.length);
        for(var i=0;i<data.length;i++){
            $(".panel-heading").html("<h3>"+data[i].title+"</h3>");
            $(".panel-body").html("<h5>"+data[i].link+"</h4>");
        }
    })


    $.getJSON("/scrape", function(data) {
        console.log(data);

        console.log(data.length);
        for(var i=0;i<data.length;i++){
            $(".panel-heading").html("<h3>"+data[i].title+"</h3>");
            $(".panel-body").html("<h5>"+data[i].link+"</h4>");
        }
    });

})
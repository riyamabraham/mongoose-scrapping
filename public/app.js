

$("#articles").on("click", function (e) {
    alert("50 Articles added");
    $(".card").empty();
    console.log("here");


    // Grab the articles as a json
    $.getJSON("/articles", function (data) {
        // For each one
        for (var i = 0; i < data.length; i++) {

            var header = $("<h2>");
            header.html(data[i].title);
            var body = $("<p>");
            body.html("<a href = "+data[i].link+" target=_blank'>"+data[i].link+"</a>");

            // Display the apropos information on the page
            // $(".panel-heading").append("<h3>" +data[i].title+ "</h3>");
            // $(".panel-body").append("<a href=" +data[i].link+"</a>");
            // $("#results").append(".panel-heading",".panel-body");
           // $(".results").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
            $(header).append(body);
            
            $(".card").append(header)
        }
    });
})
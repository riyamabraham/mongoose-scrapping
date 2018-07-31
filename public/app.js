

$("#articles").on("click", function (e) {



    var description = $("#result");


    alert("50 Articles added");
    $("#result").empty();
    console.log("here");

    $.ajax({
        method: "GET",
        url: "/scrape/"
    }).then(function () {

        $(document).on("click", "button.save", handleSave);

        // Grab the articles as a json
        $.getJSON("/articles", function (data) {
            // For each one
            console.log(data);
            if (data) {

                initializeRows(data);
            }

        });

        function initializeRows(data) {

            var ToAdd = [];

            for (var i = 0; i < data.length; i++) {
                if (data) {
                    ToAdd.push(createNewRow(data[i]));
                }
            }
            description.append(ToAdd);
        }



        function createNewRow(data) {
            var newCard = $("<div class='container'>");
            newCard.addClass("card");
            var newCardHeading = $("<div>");
            newCardHeading.addClass("card-header");


            var save = $("<button>");
            save.text("SAVE");
            save.addClass("save btn btn-success ");
            save.append("<p data-id='" + data._id );
            


            var header = $("<h2>");


            var newCardBody = $("<div>");
            newCardBody.addClass("card-body");

            var body = $("<p>");


            header.text(data.title);
            body.html("<a href = " + data.link + " target=_blank'>" + data.link + "</a>");


            newCardHeading.append(header);

            newCardHeading.append(save);

           

            newCardBody.append(body);

            newCard.append(newCardHeading);
            newCard.append(newCardBody);
            // newCard.data("product", product);
            return newCard;
        }

        function handleSave() {
            var currentArticle =$(this).attr("data-id");
            console.log(currentArticle);
        }

    });



})
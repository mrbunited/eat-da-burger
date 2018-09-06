
$(function () {


    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBur = {
            burger_name: $("#burger-name").val().trim(),
            devoured: 0
        };
        console.log('This was clicked');

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBur
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".update").on("click", function (event) {

        var id = $(this).data("id");
        console.log("this button was clicked")
            var updatedState = {
                devoured: true
            };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updatedState
        }).then(
            function () {
                console.log("new state for ", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
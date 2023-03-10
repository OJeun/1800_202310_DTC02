$(document).ready(function() {
    // Fetch the list of dog breeds from the API
    $.ajax({
        url: "https://dog.ceo/api/breeds/list/all",
        dataType: "json",
        success: function(data) {
            // Extract the breed names from the response
            var breeds = Object.keys(data.message);
            
            // Populate the autocomplete input field with the breed names
            $("#breed-input").autocomplete({
                source: breeds
            });
            
            // Populate the dropdown menu with the breed names
            var dropdown = $("#breed-dropdown");
            breeds.forEach(function(breed) {
                var option = $("<option>").text(breed);
                dropdown.append(option);
            });
        }
    });
});
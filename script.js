document.querySelector("#submitButton").addEventListener("click", function () {
    const input = document.querySelector("#jsonInput").value; // Input JSON
    const selectedFilter = document.querySelector("#filterDropdown").value; // Dropdown value
    const output = document.querySelector("#output"); // Output container

    try {
        const jsonData = JSON.parse(input); // Parse input
        const data = jsonData.data; // Extract 'data' field

        let filteredData = [];

        // Apply filtering based on selection
        if (selectedFilter === "numbers") {
            filteredData = data.filter(item => !isNaN(item)); // Filter numbers
        } else if (selectedFilter === "alphabets") {
            filteredData = data.filter(item => isNaN(item) && isNaN(parseInt(item))); // Filter alphabets
        } else if (selectedFilter === "highestLowercase") {
            const alphabets = data.filter(item => isNaN(item) && isNaN(parseInt(item)));
            const lowercase = alphabets.filter(item => item === item.toLowerCase());
            filteredData = lowercase.sort().pop() || "None";
        }

        // Display the filtered response
        output.innerHTML = `Filtered Response: ${filteredData}`;
    } catch (error) {
        alert("Invalid JSON. Please check your input.");
        output.innerHTML = ""; // Clear output on error
    }
});

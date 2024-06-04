// Fetch data from data.json file
fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        // Select HTML element with the ID "scores"
        const scores = document.getElementById("scores");

        // Create variables to calculate the avrage score
        let totalScore = 0;
        let count = 0;

        // Iterate over the data array and create list items
        data.map((element) => {
            let list = document.createElement("li");
            list.innerHTML = `
            <img src="${element.icon}">
            <div>
            <p class="summary-scores__category">${element.category}</p>
            <p class="summary-scores__score"><span>${element.score}</span> / 100</p>
            </div>`;
            scores.appendChild(list);

            // Accumulate score
            totalScore += element.score;
            count++;
        });

        // Calculate average score
        let averageScore = count > 0 ? totalScore / count : 0;

        // Round the average score to the nearest integer
        averageScore = Math.round(averageScore);

        // Display average score
        const total = document.getElementById("total-score");
        total.innerHTML = `
        ${averageScore}`;
    })
    .catch((error) => console.error("Error loading JSON file", error));

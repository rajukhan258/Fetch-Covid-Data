// Function to copy text to the clipboard
function copyToClipboard(buttonNumber) {
	const codeBlock = document.getElementById("code-block-" + buttonNumber);
	const textToCopy = codeBlock.textContent;

	const textArea = document.createElement("textarea");
	textArea.value = textToCopy;
	document.body.appendChild(textArea);

	textArea.select();
	document.execCommand("copy");

	document.body.removeChild(textArea);

	const copyButton = document.getElementById("copy-button-" + buttonNumber);
	copyButton.innerHTML = `<i class="bi bi-clipboard-check-fill"></i>`;
	setTimeout(function () {
		copyButton.innerHTML = `<i class="bi bi-clipboard"></i>`;
	}, 2000); // Reset the button text after 2 seconds
}







// document.getElementById('getDataButton').addEventListener('click', () => {
//   // Get the selected date from the input field
//   const selectedDate = document.getElementById('selectedDate').value;

//   // URL for the COVID-19 data
//   const apiUrl = 'https://data.covid19india.org/data.json';

//   // Fetch COVID-19 data
//   fetch(apiUrl)
//     .then(response => {
//       // Check if response is okay
//       if (!response.ok) {
//         throw new Error('Could not fetch data!');
//       }
//       return response.json();
//     })
//     .then((data) => {
//       let found = false;

//       // Loop through the data array to find the selected date
//       for (let i = 0; i <= 564; i++) {
//         // If the date matches, display the COVID-19 information
//         if (data.cases_time_series[i].dateymd === selectedDate) {
//           document.getElementById('output-1').innerHTML = (
//             `Confirmed Cases: ${data.cases_time_series[i].dailyconfirmed} <br>
//             Deceased: ${data.cases_time_series[i].dailydeceased} <br>
//             Recovered: ${data.cases_time_series[i].dailyrecovered} <br><br>
//             Total Confirmed: ${data.cases_time_series[i].totalconfirmed} <br>
//             Total Deceased: ${data.cases_time_series[i].totaldeceased} <br>
//             Total Recovered: ${data.cases_time_series[i].totalrecovered} <br>`
//           );

//           found = true; // Set flag to true if data is found
//           break; // Exit loop once data is found
//         }
//       }

//       // If no data is found for the selected date, display a message
//       if (!found) {
//         document.getElementById('output-1').innerHTML = ('No data available for the selected date!');
//       }
//     })
//     .catch(error => {
//       // Display an error message if there's an issue with fetching data
//       document.getElementById('output-1').innerHTML = ('Error:', error);
//     });
// });




document.getElementById('getDataStateButton').addEventListener('click', () => {
	// Get the selected state from the input field
	const selectedstate = document.getElementById('selectedstate').value;

	// URL for the COVID-19 data
	const apiUrl = 'https://data.covid19india.org/data.json';

	// Fetch COVID-19 data
	fetch(apiUrl)
		.then(response => {
			// Check if response is okay
			if (!response.ok) {
				throw new Error('Could not fetch data!');
			}
			return response.json();
		})
		.then((data) => {
			// Loop through the data to find the selected state
			for (let i = 1; i <= 37; i++) {
				if (data.statewise[i].state === selectedstate) {
					// Display COVID-19 information for the selected state
					document.getElementById('output-2').innerHTML = (
						`Active Cases: ${data.statewise[i].active} <br>
            Confirmed: ${data.statewise[i].confirmed} <br>
            Deaths: ${data.statewise[i].deaths} <br>
            Recovered: ${data.statewise[i].recovered} <br>
            Last Updated: ${data.statewise[i].lastupdatedtime} <br>`
					);
				}
			}
		})
		.catch((error) => {
			// Handle errors if any
			console.log(`Error: ${error}`);
		});
});


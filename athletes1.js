// Fetch API & forEach() loop to display in console.

fetch("data.json")
 .then((response) => response.json())
 .then((data) => {
  console.log(data); // log the data to console
  processData(data); // Then process it
 })

 .catch((error) => console.error("Error fetching data: ", error));

function processData(data) {
 data.forEach((athletes) => {
  console.log(
   `   Name:           ${athletes.first} ${athletes.last}
   Age:            ${athletes.age}
   Gender:         ${athletes.gender}
   Favourite Song: ${athletes.favsong} 
   Favourite Food: ${athletes.favfood} `
  );
 });
}

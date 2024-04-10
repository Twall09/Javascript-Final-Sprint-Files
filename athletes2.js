// 3 functions returning strings of data from the contents.
// First lists the # of records, then calculates average age, then lists first names.
// Display to HTML browser

fetch("data.json")
 .then((response) => {
  if (!response.ok) {
   throw new Error("Network response was not okay");
  }
  return response.json();
 })

 .then((jsonData) => {
  function content1(data) {
   return `Number of Records: ${data.length}`;
  }

  function content2(data) {
   const sumAge = data.reduce((sum, item) => sum + item.age, 0);
   return `Average age: ${sumAge / data.length}`;
  }

  function content3(data) {
   const names = data.map((item) => item.first);
   return `Names: ${names.join(", ")}`;
  }

  console.log(content1(jsonData));
  console.log(content2(jsonData));
  console.log(content3(jsonData));

  const container = document.createElement("div");
  container.innerHTML = `
      <p>${content1(jsonData)}</p>
      <p>${content2(jsonData)}</p>
      <p>${content3(jsonData)}</p>`;

  document.body.appendChild(container);
 })
 .catch((error) => {
  console.error("problem with the fetch process: ", error);
 });

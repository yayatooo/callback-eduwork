const tableBody = document.getElementById("tableBody");

async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();

    tableBody.innerHTML = "";

    const rows = data.map((value) => {
      const row = document.createElement("tr");

      const idCell = document.createElement("td");
      idCell.textContent = value.id;

      const nameCell = document.createElement("td");
      nameCell.textContent = value.name;

      const emailCell = document.createElement("td");
      emailCell.textContent = value.email;

      const addressCell = document.createElement("td");
      addressCell.textContent =
        value.address.city + ", " + value.address.street;

      const companyCell = document.createElement("td");
      companyCell.textContent = value.company.name;

      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(emailCell);
      row.appendChild(addressCell);
      row.appendChild(companyCell);

      return row;
    });

    rows.forEach((row) => {
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData();

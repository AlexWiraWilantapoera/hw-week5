// Function to switch between tabs
function openTab(tabName) {
  var i, tabContent;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
}

// Function to calculate average age and money
function calculateAverage() {
  var sumAge = 0;
  var sumMoney = 0;
  var rowCount = 0;
  var table = document.getElementById("pendaftarTable");
  var rows = table.getElementsByTagName("tr");
  for (var i = 1; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td");
    sumAge += parseInt(cells[1].innerText);
    sumMoney += parseInt(cells[2].innerText);
    rowCount++;
  }
  var avgAge = sumAge / rowCount;
  var avgMoney = sumMoney / rowCount;
  return {
    avgAge: avgAge.toFixed(2),
    avgMoney: avgMoney.toFixed(2),
  };
}

// Event listener for form submission
document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var money = document.getElementById("money").value;
  // Validation
  if (name.length < 10) {
    alert("Nama harus minimal 10 karakter!");
    return;
  }
  if (age < 25) {
    alert("Umur harus minimal 25 tahun!");
    return;
  }
  if (money < 100000 || money > 1000000) {
    alert("Uang sangu harus minimal 100 ribu dan maksimal 1 juta!");
    return;
  }
  // Add data to table
  var table = document.getElementById("pendaftarTable").getElementsByTagName("tbody")[0];
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = name;
  cell2.innerHTML = age;
  cell3.innerHTML = money;
  // Update resume
  var avg = calculateAverage();
  document.getElementById("resumeContent").innerHTML = "Rata-rata pendaftar memiliki uang sangu sebesar Rp " + avg.avgMoney + " dengan rata-rata umur " + avg.avgAge + " tahun.";
  // Reset form
  document.getElementById("registrationForm").reset();
});

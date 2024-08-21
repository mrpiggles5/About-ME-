const formpage1 = document.getElementID("form-page1");
const formpage2 = document.getElementID("form-page2");
const formpage3 = document.getElementID("form-page3");
const progressBar = document.querySelector("progress");
const summaryName = document.getElementID("summary-name");
const summaryVehicle = document.getElementID("summary-vehicle");
const formData = document.getElementID("collected-data");
function showPage(pageNumber){
    switch (pageNumber) {
        case 1:
            formpage1.style.display = 'block '
            formpage2.style.display = 'none '
            formpage3.style.display = 'none '
            progressBar.value = 10;
            break;
        case 2:
            formpage1.style.display = 'none '
            formpage2.style.display = 'block '
            formpage3.style.display = 'none '
            progressBar.value = 50;
            break;
        case 3:
            formpage1.style.display = 'none '
            formpage2.style.display = 'none '
            formpage3.style.display = 'block '
            progressBar.value = 100;
            updateSummary();
            break;
        default:

            break;
    }
}
function getFormData() {
    const fName = document.getElementById("name-first").value;
    const lName = document.getElementById("name-last").value;
    const vType = formPage2.querySelector('input[name=vehicle]:checked').value;
    const vMake = formPage2.querySelector('select').value;
    return data = {
        name:fName + " " + lName,
        vehicle: vMake + " " + vType
    };
}
function updateSummary(){
    const data = getFormData();

    summaryName.innerHTML = data.name;
    summaryVehicle.innerHTML = data.vehicle;
}
function submitData(){
    const dataRow = document.createElement("tr");
    const cellName = document.createElement("td");
    const cellvehicle = document.createElement("td");

    dataRow.appendChild(cellName)
    dataRow.appendChild(cellvehicle)

    const data = getFormData();

    cellName.innerHTML = data.name;
    cellvehicle.innerHTML = data.vehicle;
    formData.appendChild(dataRow); 
}
let patients = JSON.parse(localStorage.getItem("patients")) || [];
let editIndex = -1;

const form = document.getElementById("patientForm");
const table = document.getElementById("patientTable");
const search = document.getElementById("search");
const filterGender = document.getElementById("filterGender");

displayPatients();

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const patient = {
        id: editIndex === -1 ? Date.now() : patients[editIndex].id,
        name: document.getElementById("name").value.trim(),
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        disease: document.getElementById("disease").value.trim(),
        doctor: document.getElementById("doctor").value.trim(),
        mobile: document.getElementById("mobile").value.trim(),
        address: document.getElementById("address").value.trim()
    };

    if (
        patient.name === "" ||
        patient.age === "" ||
        patient.gender === "" ||
        patient.mobile === ""
    ) {
        alert("Please fill all required fields.");
        return;
    }

    if (editIndex === -1) {
        patients.push(patient);
    } else {
        patients[editIndex] = patient;
        editIndex = -1;
        document.getElementById("saveBtn").innerHTML =
            '<i class="fa-solid fa-floppy-disk"></i> Save Patient';
    }

    savePatients();
    displayPatients();
    form.reset();
});

function savePatients() {
    localStorage.setItem("patients", JSON.stringify(patients));
}

function displayPatients(list = patients) {
    table.innerHTML = "";

    if (list.length === 0) {
        table.innerHTML =
            "<tr><td colspan='9'>No Patients Found</td></tr>";
        return;
    }

    list.forEach((patient, index) => {
        table.innerHTML += `
        <tr>
            <td>${patient.id}</td>
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.gender}</td>
            <td>${patient.disease}</td>
            <td>${patient.doctor}</td>
            <td>${patient.mobile}</td>
            <td>${patient.address}</td>
            <td>
                <button class="editBtn" onclick="editPatient(${index})">
                    Edit
                </button>

                <button class="deleteBtn" onclick="deletePatient(${index})">
                    Delete
                </button>
            </td>
        </tr>`;
    });
}
function editPatient(index) {

    editIndex = index;

    const patient = patients[index];

    document.getElementById("name").value = patient.name;
    document.getElementById("age").value = patient.age;
    document.getElementById("gender").value = patient.gender;
    document.getElementById("disease").value = patient.disease;
    document.getElementById("doctor").value = patient.doctor;
    document.getElementById("mobile").value = patient.mobile;
    document.getElementById("address").value = patient.address;

    document.getElementById("saveBtn").innerHTML =
        '<i class="fa-solid fa-pen"></i> Update Patient';

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function deletePatient(index){

    let confirmDelete = confirm("Delete this patient?");

    if(confirmDelete){

        patients.splice(index,1);

        savePatients();

        displayPatients();

    }

}

search.addEventListener("keyup", function(){

    const value = this.value.toLowerCase();

    const filtered = patients.filter(patient =>

        patient.name.toLowerCase().includes(value) ||

        patient.disease.toLowerCase().includes(value) ||

        patient.doctor.toLowerCase().includes(value) ||

        patient.mobile.includes(value)

    );

    displayPatients(filtered);

});

filterGender.addEventListener("change", function(){

    if(this.value==="All"){

        displayPatients();

        return;

    }

    const filtered = patients.filter(patient =>

        patient.gender===this.value

    );

    displayPatients(filtered);

});

window.onload = function(){

    displayPatients();

};

form.addEventListener("reset",function(){

    editIndex = -1;

    document.getElementById("saveBtn").innerHTML =
    '<i class="fa-solid fa-floppy-disk"></i> Save Patient';

});
function addStudent(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    const course = document.getElementById('course').value;
    const email = document.getElementById('email').value;

    // Validate that all fields are filled
    if (!name || !age || !gender || !course || !email) {
        alert('Please fill all fields');
        return;
    }

    // Create new row in the table
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td><button onclick="deleteStudent(this)">Delete</button></td>
    `;

    // Append the new row to the student list table
    document.getElementById('studentList').appendChild(row);

    // Clear form fields after submission
    document.querySelector('form').reset();
}

// Function to delete a student record
function deleteStudent(button) {
    const row = button.closest('tr');
    row.remove();
}


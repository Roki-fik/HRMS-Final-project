function showSection(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

function logout() {
    alert("You have been logged out.");
    //  redirect to the login page or perform other logout actions
}

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        // Create a new message element
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'sent');
        newMessage.innerHTML = `
            <div class="message-content">
                <p><b>Fikrik Adugna:</b> ${messageText}</p>
                <small class="message-timestamp">${getCurrentTime()}</small>
            </div>
        `;

        // Append the new message to the chat history
        const chatHistory = document.querySelector('.chat-history');
        chatHistory.appendChild(newMessage);

        // Clear the input field
        messageInput.value = "";

        // Scroll to the bottom of the chat
        chatHistory.scrollTop = chatHistory.scrollHeight;

        // In a real application, you would send this message to the server
        // and handle the response.
    }
}

function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    minutes = minutes < 10 ? '0' + minutes : minutes;

    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

// Optional: Add event listener to send message on Enter key press
document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('message-input');
    if (messageInput) {
        messageInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault(); // Prevent line break in textarea
                sendMessage();
            }
        });
    }
});
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';

    // Show footer only on the home section
    const footer = document.getElementById('footer');
    if (sectionId === 'home') {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
}

// Initialize by showing the home section and footer
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
function uploadReport() {
    const fileInput = document.getElementById('report-file');
    const uploadStatus = document.getElementById('upload-status');
    const file = fileInput.files[0];

    if (!file) {
        uploadStatus.textContent = "Please select a file to upload.";
        uploadStatus.style.color = 'red';
        return;
    }

    // Simulate upload (replace with actual AJAX upload)
    uploadStatus.textContent = "Uploading...";
    uploadStatus.style.color = 'blue';
    setTimeout(() => {
        uploadStatus.textContent = `File "${file.name}" uploaded successfully!`;
        uploadStatus.style.color = 'green';
        fileInput.value = ''; // Clear the file input
    }, 2000); // Simulate 2 seconds upload
    // In a real application, use AJAX (fetch or XMLHttpRequest) to upload the file to the server
    // and handle the server's response.
}

function submitAttendance() {
    const attendancePresent = document.getElementById('attendance-present').checked;
    const attendanceStatus = document.getElementById('attendance-status');

    if (attendancePresent) {
        // Simulate attendance submission (replace with actual AJAX submission)
        attendanceStatus.textContent = "Attendance marked as present.";
        attendanceStatus.style.color = 'green';
    } else {
        attendanceStatus.textContent = "Please mark attendance as present.";
        attendanceStatus.style.color = 'red';
    }

    // In a real application, use AJAX (fetch or XMLHttpRequest) to send the attendance data to the server
    // and handle the server's response.
}
function logout() {
    window.location.href = 'index.html';
}
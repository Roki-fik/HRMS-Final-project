// Message handling
let currentChatEmployee = null;

function loadChat() {
    currentChatEmployee = document.getElementById('employeeSelect').value;
    // Load chat history for selected employee
}

function sendDirectorMessage() {
    const message = document.getElementById('directorMessageInput').value;
    if (message && currentChatEmployee) {
        // Send message to employee
        const chatHistory = document.getElementById('directorChatHistory');
        const messageElement = document.createElement('div');
        messageElement.className = 'message sent';
        messageElement.innerHTML = `
            <div class="message-content">
                <p><b>Director:</b> ${message}</p>
                <small>${new Date().toLocaleTimeString()}</small>
            </div>
        `;
        chatHistory.appendChild(messageElement);
        document.getElementById('directorMessageInput').value = '';
    }
}

// Announcements
function postAnnouncement() {
    const announcementText = document.getElementById('announcementText').value;
    if (announcementText) {
        // Add to announcement list
        const announcementList = document.querySelector('.announcement-list');
        const newAnnouncement = document.createElement('div');
        newAnnouncement.className = 'announcement-card';
        newAnnouncement.innerHTML = `
            <h3>New Announcement</h3>
            <p>Posted on: ${new Date().toLocaleDateString()}</p>
            <p>${announcementText}</p>
        `;
        announcementList.prepend(newAnnouncement);
        document.getElementById('announcementText').value = '';
    }
}

// Report handling
function downloadReport(filename) {
    // Handle report download
}

function deleteReport(filename) {
    // Handle report deletion
}
function logout() {
    window.location.href = 'index.html';
}
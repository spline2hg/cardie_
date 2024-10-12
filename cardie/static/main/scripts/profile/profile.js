//            function openSettingsModal() {
//            document.getElementById('settingsModal').style.display = 'block';
//        }
//
//        function closeSettingsModal() {
//            document.getElementById('settingsModal').style.display = 'none';
//        }
//
//        function togglePasswordFields() {
//            const passwordFields = document.getElementById('passwordFields');
//            passwordFields.style.display = passwordFields.style.display === 'none' ? 'block' : 'none';
//        }
//
//        function updatePassword() {
//            const currentPassword = document.getElementById('currentPassword').value;
//            const newPassword = document.getElementById('newPassword').value;
//            const confirmPassword = document.getElementById('confirmPassword').value;
//
//            if (newPassword !== confirmPassword) {
//                alert('New passwords do not match!');
//                return;
//            }
//
//            // Here you would typically make an API call to update the password
//            // For demonstration, we'll just show an alert
//            alert('Password updated successfully!');
//            togglePasswordFields();
//        }
//
//        // Handle sidebar navigation
//        document.querySelectorAll('.sidebar-item').forEach(item => {
//            item.addEventListener('click', function() {
//                // Remove active class from all items and sections
//                document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
//                document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
//
//                // Add active class to clicked item
//                this.classList.add('active');
//
//                // Show corresponding section
//                const sectionId = this.getAttribute('data-section');
//                document.getElementById(sectionId).classList.add('active');
//            });
//        });
//
//        // Close modal when clicking outside
//        window.onclick = function(event) {
//            if (event.target == document.getElementById('settingsModal')) {
//                closeSettingsModal();
//            }
//        }



// Modal Functions
function openSettingsModal() {
    document.getElementById('settingsModal').style.display = 'block';
}

function closeSettingsModal() {
    document.getElementById('settingsModal').style.display = 'none';
}

// Password Management
function togglePasswordFields() {
    const passwordFields = document.getElementById('passwordFields');
    passwordFields.style.display = passwordFields.style.display === 'none' ? 'block' : 'none';
}

function updatePassword() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword) {
        alert('New passwords do not match!');
        return;
    }

    // Here you would typically make an API call to update the password
    // For demonstration, we'll just show an alert
    alert('Password updated successfully!');
    togglePasswordFields();
}

// Image Preview
document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.querySelector('input[type="file"]');
    const profileImage = document.querySelector('.profile-image');

    fileInput?.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });
});

// Settings Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Handle sidebar navigation
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items and sections
            document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));

            // Add active class to clicked item
            this.classList.add('active');

            // Show corresponding section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == document.getElementById('settingsModal')) {
            closeSettingsModal();
        }
    }
});


async function log_out() {
    const response = await fetch(server_ip + "/logout", {
        method: "POST",
    });

    response.text().then(function (text) {
        if (text == "Request is not a POST request") {
            create_notification("There was a problem logging out", text, "warning");
            return false;

        } else {
            window.location.href = server_ip + "/authentication";
        }
    });
}
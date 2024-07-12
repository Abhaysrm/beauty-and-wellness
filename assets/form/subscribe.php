<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["subscribe"])) {
    // Get the email from the form
    $email = isset($_POST["email"]) ? trim($_POST["email"]) : '';

    // Validate the email (you can add more validation if needed)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
    } else {
        // Perform the subscription logic (you can save the email to a database, send a confirmation email, etc.)
        // For demonstration purposes, let's just print the email
        echo "Subscribed successfully! Email: " . $email;
    }
}
?>
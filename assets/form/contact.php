<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // You can add additional validation and sanitization here

    // Process the form (you can modify this part to suit your needs)
    $to = "academyprime5@gmail.com"; 
    $subject = "New Form Submission";
    $messageBody = "Name: $name\nPhone: $phone\nEmail: $email\nMessage: $message";

    // Additional headers
    $headers = "From: $email";

    // Send the email
    $response = mail($to, $subject, $messageBody, $headers);

    if ($response) {
        echo "
        <p>Thanks for your enquiry. Our team will get in touch with you shortly for confirmation.</p>
        <p>Cheers! </p> 
        ";
    } else {
        echo "
        <p>There was an error submitting the form. Please try again later.</p> 
        ";
    }
}
?>



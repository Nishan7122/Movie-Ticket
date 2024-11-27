function bookTickets() {
    const movie = document.getElementById("movie").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const seats = document.getElementById("seats").value;

    if (name && email && seats) {
        document.getElementById("bookingMessage").innerText = 
            `Thank you, ${name}! You have successfully booked ${seats} ticket(s) for ${movie}. Confirmation sent to ${email}.`;
    } else {
        document.getElementById("bookingMessage").innerText = "Please fill in all fields.";
    }
}
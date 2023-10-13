
        // fetch
        fetch("https://developer.uber.com/products")
        .then(response =>response.json())
        .then(data =>{
        const bookingForm = document.getElementById("booking form");
        data.forEach(booking => {
            const bookingCard = createBookingCard(booking);
            bookingForm.appendChild(bookingCard);
        }) 
        })
        .catch(error => console.error(error));


function createBookingCard(booking) {
    const card = document.createElement("div");
    card.className = "booking-card";

    const title = document.createElement("h2");
    title.textContent = booking.name;

    const description = document.createElement("p");
    description.textContent = tour.description;

    const price = document.createElement("p");
    price.textContent = 'Price:$${booking.price}';
    
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(price);

    return card;
}
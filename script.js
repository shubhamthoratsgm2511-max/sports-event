document.getElementById("regForm")
.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const sport = document.getElementById("sport").value;

    const data = { name, email, sport };

    let registrations = JSON.parse(localStorage.getItem("registrations")) || [];
    registrations.push(data);

    localStorage.setItem("registrations", JSON.stringify(registrations));

    alert("Registration Successful!");
});

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });


    const iconButtons = document.querySelectorAll(".icon-button");

    iconButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault(); 

            const link = this.href;
            alert("Redirecting to the page...");

            setTimeout(() => {
                window.location.href = link;
            }, 1000); 
        });
    });
});

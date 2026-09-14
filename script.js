function jawab() {

    const jawaban = document.getElementById("jawaban");

    jawaban.style.display = "block";

    // Membuat banyak hati
    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.classList.add("falling-heart");

            const hearts = [
                "❤️",
                "💗",
                "💕",
                "💖",
                "💘"
            ];

            heart.innerHTML =
                hearts[Math.floor(Math.random() * hearts.length)];

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.animationDuration =
                (2 + Math.random() * 3) + "s";

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);

        }, i * 80);
    }
}


// Hati jatuh otomatis
setInterval(() => {

    const heart = document.createElement("div");

    heart.classList.add("falling-heart");

    const hearts = [
        "❤️",
        "💕",
        "💗"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}, 700);

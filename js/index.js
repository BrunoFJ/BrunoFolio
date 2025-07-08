document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.length > 1) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", function () {
    const link = this.querySelector("a");
    if (link) {
      window.location.href = link.href;
    }
  });
});

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseover", function () {
    this.classList.add("hovered");
  });
  card.addEventListener("mouseout", function () {
    this.classList.remove("hovered");
  });
});

// Form submission handling //

const form = document.getElementById("meu-formulario");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = {
    email: form.email.value,
    message: form.message.value,
    name: form.name.value,
    subject: form.subject.value,
  };

  const response = await fetch("https://formspree.io/f/mvgrldab", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    alert("Mensagem enviada com sucesso!");
  } else {
    alert("Erro ao enviar. Tente novamente.");
  }
});

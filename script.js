// Suavizar rolagem ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// GSAP Animation
document.addEventListener("DOMContentLoaded", () => {
    // Animação para o cabeçalho
    gsap.from("header", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out"
    });

    // Animação para a seção inicial
    gsap.from(".home-section .container", {
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: "power2.out",
        delay: 0.5
    });

    // Configurar animação de rolagem
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 75%", // Começa a animar quando 75% da seção está visível
            },
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power2.out"
        });
    });

    // Animação para itens do portfólio
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    portfolioItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 85%" // Cada item aparece quando 85% dele entra na tela
            },
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            delay: index * 0.2 // Anima em sequência
        });
    });
});

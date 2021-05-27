export function initAccordions() {
    console.info("Initializing accordions");

    let headers = document.getElementsByClassName("accordion-header");

    for (let i = 0; i < headers.length; i++) {
        headers[i].addEventListener("click", evt => {
            evt.target.classList.toggle("active");
            const panel = evt.target.nextElementSibling;
            panel.classList.toggle("hidden");
            panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
    }
}
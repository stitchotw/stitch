// getElementsByClassName returns a live view. If the script runs too early 
// the HTMLCollection might not be populated yet, and really strange results 
// can occure

let activeTab;

export function initTabs(){
    console.info("Initializing tabs");

    const buttons = document.getElementsByClassName("navigation-tab");
    for (const btn of buttons) {
        btn.addEventListener("click", evt => switchSection(evt.target));
        if (btn.classList.contains("active")) {
            activeTab = btn;
        }
    }
}

function switchSection(sectionButton) {
    // Turn off previous
    if (activeTab) {
        toggleActiveSection();
    }

    // Turn on new
    activeTab = sectionButton;
    toggleActiveSection();
}

function toggleActiveSection() {
    activeTab.classList.toggle("active");
    document.getElementById(activeTab.id+"-content").classList.toggle("hidden");
}

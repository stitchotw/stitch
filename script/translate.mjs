export function initTranslation() {
    console.info("Initializing translations");

    addButtonListeners();
    setTranslationLanguage("en_us");
}

function addButtonListeners(){
    const buttons = document.getElementsByClassName("language-selection-button");
    for (const btn of buttons) {
        btn.addEventListener("click", evt => setTranslationLanguage(evt.target.id));
    }
}

let currentLocale;

function setTranslationLanguage(locale) {
    if (locale != currentLocale) {
        const promise = load(locale);
        promise.then(data => translate(data));
        setActiveLanguageButton(locale);        
        currentLocale = locale;
    }
}

// TODO: look into these alternative versions
function load(locale) {
//    const response = await fetch(`translations/${locale}.json`);
//    return await response.json();
    return fetch(`translations/${locale}.json`)
        .then(response => response.json());
}

function translate(data) {
    console.log(data);

    for (let [id, value] of Object.entries(data)) {
        console.log(`key=${id} value=${value}`)

        const element = document.getElementById(id);
        if (element == null) {
            console.error("Could not find element with id " + key);
        } else {
            element.title=value;
        }
    };

}

function setActiveLanguageButton(locale){
    document.getElementById(currentLocale)?.classList.remove("active");
    document.getElementById(locale).classList.add("active");
}
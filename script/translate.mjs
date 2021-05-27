export function initTranslation() {
    console.info("Initializing translations");

    addButtonListeners();
    setTranslationLanguage("en_us");
}

function addButtonListeners() {
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
    const elements = document.getElementsByClassName("translatable");
    //console.log(elements);

    const errors = new Object;
    for (let [_, element] of Object.entries(elements)) {
        const translation = getTranslation(element, data, errors);
        applyTranslation(element, translation);
    }

    if (Object.keys(errors).length)
        console.warn(JSON.stringify(errors));
}

function getTranslation(element, data, errors) {
    if (!element.id) {
        console.warn("No id on translatable element " + element);
        return "No translation id";
    }

    const translation = data[element.id];

    if (!translation) {
        console.warn("No translation for " + element.id);
        errors[element.id] = "";
        return element.id;
    }

    return translation;
}

function applyTranslation(element, translation) {
    switch (element.nodeName) {
        case "BUTTON":
            element.title = translation;
            break;
        case "H1":
        case "H2":
        case "P":
        case "DIV":
            let c = element.innerHTML;
            element.innerHTML = translation;
            break;
        default:
            console.warn("Unhandled element type: " + element.nodeName);
    }
}

function setActiveLanguageButton(locale) {
    document.getElementById(currentLocale)?.classList.remove("active");
    document.getElementById(locale).classList.add("active");
}
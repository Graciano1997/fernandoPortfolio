const language=document.querySelector("#languageSelect");

language.addEventListener("change",(el)=>{
    const lang=el.target.value;
    fetch(`./lang/translations.json`)
    .then(response=>response.json())
    .then(data=>{
        for (const key in data) {
            document.querySelector(`#${key}`).textContent=data[key][lang];}}
            )
    .catch(error=>console.error('Error loading the language:',error));
});

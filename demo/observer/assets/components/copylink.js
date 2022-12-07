export let copylink = function(elt, size, url) {
    let copylink = elt;
    copylink.classList.add(size);
    elt.style.backgroundImage = 'url("/assets/styles/icons/copy_icon.svg")';
    copylink.addEventListener('click', function(e) { if(!navigator.clipboard) {copylink.innerText = 'There is no clipboard'}
    navigator.clipboard.writeText(url).then(
        () => { console.log("Ссылка скопирована");
        })
    })
}
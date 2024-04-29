function editElement(element, match, replacer) {
    while (element.textContent.includes(match)) {
        element.textContent = element.textContent.replace(match, replacer);
    }

    // Това не работи в judge!
    // element.textContent = element.textContent.replaceAll(match, replacer);
}
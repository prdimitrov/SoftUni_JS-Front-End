function extract(content) {
    const contentElement = document.getElementById('content');
    const matches = contentElement.textContent.matchAll(/\(([a-zA-Z ]+)\)/g);
    const result = [];
    
    for (const match of matches) {
        result.push(match);
    }
    
    return result.join('; ');
}
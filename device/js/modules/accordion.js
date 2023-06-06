const accordion = () => {
    const headings = document.querySelectorAll('[data-name="accordeon-title"]');

    headings.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('active');
            let content = el.nextElementSibling;

            if(content.style.maxHeight) {
                content.style.maxHeight = '';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px'
            }
        })
    })
}


export default accordion;
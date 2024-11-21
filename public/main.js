const update = document.querySelector('#update-button')

update.addEventListener('click', __=> {
    fetch('/quotes', {
        method: 'put',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            name: 'Darth Vader',
            quotes: 'I find your lack of faith disturbing.',
        }),
    })
})
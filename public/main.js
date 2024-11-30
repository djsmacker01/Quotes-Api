const update = document.querySelector('#update-button')
const deleteBtn = document.querySelector('#delete-button')
const messageBtn = document.querySelector('#message');


update.addEventListener('click', _ => {
  fetch('/quotes', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Darth Vader',
      quotes: 'I find your lack of faith disturbing.',
    })
        .then(res => {
        if(res.ok) return res.json()
        })
        .then(response => { 
            window.location.reload()
        })
  })
})

deleteBtn.addEventListener('click', () => { 
  fetch('/quotes', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
     name: 'Darth Vader'
    })
    
  })
    .then(res => {
      if(res.ok)return res.json()
      })
    .then(response => {
      if (response === 'No quote to delete') {
          // messageBtn.textContent = 'No quote to delete'
      }
      else {
        // window.location.reload(true)
      }
      
  })
})
console.log('JS is running...')

const showDetails = (type) => {
    const hidden = document.getElementById(`hidden-${type}`)
    console.log(hidden)
    if (hidden.hidden) {
      $(`#hidden-${type}`).fadeIn('slow')
      hidden.hidden = !hidden.hidden
      return
    }
    
    $(`#hidden-${type}`).fadeOut('slow')
    setTimeout(() => {
        hidden.hidden = !hidden.hidden
    }, 1200)
}


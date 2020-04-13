console.log('JS is running...')

const showDetails = (type) => {
    const hidden = document.getElementById(`hidden-${type}`)
    console.log(hidden)
    hidden.hidden = !hidden.hidden
}

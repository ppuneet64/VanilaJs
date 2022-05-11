const debounce = (func, delay = 1000) => {
    let timer = null
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, [...args])
        }, delay);
    }
}
function searchData(e) {
    console.log(e.target.value)
}
const searchInputFunc = debounce(searchData, 1500)
const searchInput = document.getElementById('search')
searchInput.addEventListener("keyup", searchInputFunc)
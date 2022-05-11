import { throwttle } from "./General.js"

function searchData(e) {
    console.log(e.target.value)
}
const searchInputFunc = throwttle(searchData, 1500)
const searchInput = document.getElementById('search')
searchInput.addEventListener("keyup", searchInputFunc)
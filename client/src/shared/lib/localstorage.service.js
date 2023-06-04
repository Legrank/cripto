const setItem = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}
const removeItem = (key) => {
    localStorage.removeItem(key)
}

export { setItem, removeItem }

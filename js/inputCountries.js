const form = document.getElementById("form")
const input = document.getElementById("inputForm")

const formularioClient = (data) => {
    form.addEventListener("keyup", e =>{
        e.preventDefault()
        const updateFormWithValue = input.value.toLowerCase()
        const arrayFilter = data.filter(item =>{
            const letraApi = item.name.toLowerCase()
            if(letraApi.indexOf(updateFormWithValue) !== -1){
                return item
            }
        })
        banderillas(arrayFilter)
    })
}
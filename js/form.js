// validation

const inputs = document.querySelectorAll('.validation__element')
const selects = document.querySelectorAll('.validation__select')
const form = document.querySelector('.information')

if (!!form) {
    form.addEventListener('submit', e => {
        e.preventDefault()

        inputs.forEach(item => {
            if (item.value.length < 1)
                item.parentNode.classList.add('label__error')

            else
                item.parentNode.classList.remove('label__error')

        })

        selects.forEach(select => {
            if (select.value == '')
                select.parentNode.classList.add('label__error')
            else
                select.parentNode.classList.remove('label__error')
        })
    })

    form.addEventListener('input', e =>
        e.target.parentNode.classList.remove('label__error'))

    form.addEventListener('select', e =>
        e.target.parentNode.classList.remove('label__error'))
}

if (!!document.querySelector('#UF_WHERE_LEARN')) {
    document.querySelector('#UF_WHERE_LEARN').addEventListener('change',(e) =>  {
        if (e.target.value === 'контактное лицо Эбботт') {
            document.querySelector('#inputHidden').style.display = "block"
        }
    })
}
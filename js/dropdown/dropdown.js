document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    dropDownWrapper.querySelector('.dropdown-button').addEventListener("click", function (event) {
        event.preventDefault()
    });
})

//polyphile for the method forEach
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    }
}

//dropdown (select)
document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {

    const dropDownBtn = dropDownWrapper.querySelector('.dropdown-button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown-list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown-list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown-input-hidden');

//toggle select
    dropDownBtn.addEventListener('click', function () {
        dropDownList.classList.toggle('dropdown-list-visible');
        this.classList.add('dropdown-button-active')
    });

//select an item and hide another items
    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownBtn.focus();
            dropDownInput.value = this.dataset.value;
            dropDownList.classList.remove('dropdown-list-visible');
        })
    });

//close select by clicking outside
    document.addEventListener('click', function (e) {
        if (e.target !== dropDownBtn) {
            dropDownBtn.classList.remove('dropdown-button-active');
            dropDownList.classList.remove('dropdown-list-visible');
        }
    })

// close select by pressing Tab and Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropDownBtn.classList.remove('dropdown-button-active');
            dropDownList.classList.remove('dropdown-list-visible');
        }
    })
})

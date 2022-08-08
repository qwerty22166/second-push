const button = document.getElementById('button');
const input = document.getElementById('input');

button.onclick = () => {
    const tag = document.createElement('div');

    tag.setAttribute('class', 'block');
    tag.innerHTML = input.value;
    document.body.append(tag);

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = "Delete"

    deleteButton.onclick = () => {
        tag.remove()
    }

    tag.append(deleteButton);

    input.value = "";
}
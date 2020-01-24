function addMessage() {

    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;
    let list = document.getElementById('list');
    let listElement = document.createElement('li');
    listElement.appendChild(document.createTextNode(name + ': ' + message));
    list.appendChild(listElement);

}

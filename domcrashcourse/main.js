var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem)

//Filter event
filter.addEventListener('keyup', filterItems);

//Function Add item
function addItem(e) {
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').value;

    //Create new li element
    var li = document.createElement('li');

    //Add class
    li.className = 'list-group-item';

    //Append text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create del btn element
    var deleteBtn = document.createElement('button');

    //Add classes to del btn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append text node del btn
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append li to list (del btn is child of li)
    itemList.appendChild(li).appendChild(deleteBtn);
}

//Function Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Function Filter items
function filterItems(e) {
    //convert to lowercase
    var text = e.target.value.toLowerCase();

    //get list
    var items = itemList.getElementsByTagName('li');

    //convert to array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}
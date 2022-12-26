const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);

// Delete Event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    const newItem = document.getElementById('item').value;

    // Create a new li element
    const li = document.createElement('li');
    // Add class
    li.className = 'list-group-item'
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button element
    const deleteButton = document.createElement('button');

    //Add classes to del button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete'
    // Appen text node
    deleteButton.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteButton);

    //Append li to list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    // Convert text to lowercase
    const text = e.target.value.toLowerCase();
    // Get list items
    const items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}

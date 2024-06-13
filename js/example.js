document.addEventListener("DOMContentLoaded", function() {
    // ADD NEW ITEM TO END OF LIST
    var list = document.querySelector("ul");
    var newItem = document.createElement("li");
    newItem.textContent = "cream";
    list.appendChild(newItem);

    // ADD NEW ITEM TO START OF LIST
    var firstItem = document.createElement("li");
    firstItem.textContent = "kale";
    list.insertBefore(firstItem, list.childNodes[0]);

    // ADD A CLASS OF COOL TO ALL LIST ITEMS
    var listItems = document.querySelectorAll("li");
    listItems.forEach(function(item) {
        item.classList.add("cool");
    });

    // ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
    var itemCount = listItems.length;
    var heading = document.querySelector("h2 span");
    heading.textContent = itemCount;
});

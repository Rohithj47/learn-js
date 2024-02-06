window.onload = function() {
    const list = document.getElementById('Top5');
    const inp = document.getElementById('inp');
    const btn = document.getElementById('btn');
    
    const MAX_HISTORY = 5;
    const myHistory = [];

    btn.onclick = () => {
        const searchTerm = inp.value.trim();
        
        if (searchTerm !== '') {
            myHistory.push(searchTerm);

            // Sort the array by the length of the search terms
            myHistory.sort((a, b) => a.length - b.length);

            // If the array length is 5 or more, remove the oldest search term
            if (myHistory.length > MAX_HISTORY) {
                myHistory.shift(); // Remove the first element (oldest search term)
            }

            renderList();
            inp.value = ''; // Clear the input box
            inp.focus(); // Focus back on the input box
        }
    };

    function renderList() {
        // Clear the existing list
        list.innerHTML = '';

        // Display the search terms in the list
        myHistory.forEach(itemText => {
            const li = document.createElement('li');
            li.textContent = itemText;
            list.appendChild(li);
        });
    }
};

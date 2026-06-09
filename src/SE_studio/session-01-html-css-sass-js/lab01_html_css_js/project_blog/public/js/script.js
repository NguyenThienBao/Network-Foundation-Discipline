// let btn_search = document.querySelector('.btn-search');
// let search_container = document.querySelector('.search-container');
// let btn_close_search = document.querySelector('.close-search');
// let input_search = document.querySelector('.input');

// btn_search.addEventListener('click', function() {
//     console.log("Hello");
//     search_container.className = 'search-container show';
//     btn_search.className = "btn-search hide";
//     input_search.focus();
// })

// btn_close_search.addEventListener('click', function() {
//     search_container.className = 'search-container hide';
//     btn_search.className = "btn-search show";
// })

// Function to generate the HTML elements and inject them into the DOM
function displayBlogPosts(posts) {
    // Target the parent element with the class '.list-container'
    const listContainer = document.querySelector('.list-container');
    
    // Clear out any old content inside the container
    listContainer.innerHTML = '';

    // Loop through each post object inside the mock data array
    posts.forEach(post => {
        // 1. Create the outer wrapper div (<div class="item-container">)
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');

        // 2. Build the exact HTML layout structure using your data
        itemContainer.innerHTML = `
            <h1 class="post-title">${post.title}</h1>
            <h5 class="post-publish">PUBLISHED ${post.date} BY ${post.authors}</h5>
            <img src="${post.image}" alt="${post.title}" />
            <p>${post.content}</p>
            <button>READ MORE</button>
        `;

        // 3. Append the newly created item-container into the main list-container
        listContainer.appendChild(itemContainer);
    });
}

// Run the function as soon as the DOM is fully loaded and ready
document.addEventListener('DOMContentLoaded', () => {
    displayBlogPosts(blogPosts);
});

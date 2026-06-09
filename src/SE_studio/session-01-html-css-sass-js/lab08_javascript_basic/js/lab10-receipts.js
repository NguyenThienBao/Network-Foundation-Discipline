//? get control
const frm_recipes = document.querySelector('#frm-recipes'); 
const lst_recipes = document.querySelector('.lst-recipes');

var lst_items = [];

//? define BUS functions
const handle_form_submit = (e) => {
    e.preventDefault(); 

    //? get recipes information
    let name = document.querySelector('#txt-name').value;
    let method = document.querySelector('#lst-method').value;
    let notes = document.querySelector('#txt-note').value;

    const new_recipes = { name, method, notes, id: Date.now() };
    lst_items.push(new_recipes);

    e.target.reset();

    document.querySelector('#txt-name').focus();
    lst_recipes.dispatchEvent(new CustomEvent('refresh_recipes'));
}

const handle_refresh_recipes = () => {
    const lst_recipes_ui = lst_items.map(recipe => `
        <div class='recipes-item'>
            <h3>${recipe.name}</h3>
            <ul>
                <li><strong>Method:</strong> ${recipe.method}</li>
                <li><strong>Note:</strong> ${!recipe.notes ? "<em>Nothing</em>" : recipe.motes}</li>
            </ul>
            <button type="button" class="btnDelete" onclick="handle_delete_recipes(${recipe.id})">DONE</button>
        </div>
        `).join('');
    
    lst_recipes.innerHTML = lst_recipes_ui;
}

const handle_delete_recipes = (id) => {
    let recipe_index = lst_items.findIndex(recipe => recipe.id == id);
    
    lst_items.splice(recipe_index, 1);
    lst_recipes.dispatchEvent(new CustomEvent('refresh_recipes'));
}

//? Event handler
frm_recipes.addEventListener('submit', handle_form_submit);
lst_recipes.addEventListener('refresh_recipes', handle_refresh_recipes);
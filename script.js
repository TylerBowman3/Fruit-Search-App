const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search() {
	let results = [];
	let inputVal = input.value;
	if (inputVal.length) {
		results = fruit.filter((val) => {
			return (val.toLowerCase().includes(inputVal.toLowerCase()));
		});
		console.log(results);
	}
	return results;
}

function showDropDown (inputVal) {
	const results = search();
	const ul = document.querySelector('ul');
	for (let result of results) {
	clearSuggestion();
	if (inputVal !== '') {
		let li = document.createElement('li');
		li.innerHTML = '<li>' + "</li>";
		li.innerText = result;
		suggestions.appendChild(ul);
		ul.appendChild(li); 
		}
	}
}

function clearSuggestion() {
	input.className = '';
	suggestions.className = '';
	suggestions.innerHTML = '';
}






















// function searchHandler(e) {
// 	suggestions.innerHTML = "";
// 	let results = search(e.target.value);
// 	showSuggestions(results, e.target.value.toLowerCase());
// }

// function showSuggestions(results, inputVal) {
// 	search();
// }

// function useSuggestion(e) {
// 	input.value = e.target.innerText;
// 	suggestions.innerHTML = "";
// }

input.addEventListener('keyup', showDropDown);
// suggestions.addEventListener('click', useSuggestion);
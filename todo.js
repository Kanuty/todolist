

document.querySelector('#btn1').addEventListener('click', addItemToList);
document.querySelector('#btn2').addEventListener('click', addItemToList);
document.querySelector('#btn3').addEventListener('click', addItemToList);
document.querySelector('.clear-tasks').addEventListener('click', remover);


function addItemToList(){
	console.log('Clicked');
	const li = document.createElement('li');
	li.className = 'collection-item';
	li.setAttribute('title', 'Item');

	let value = this.value;
	let valueU = value.toUpperCase();
	li.appendChild(document.createTextNode(valueU));


	document.querySelector('ul.collection').appendChild(li);
	console.log(li);
	};

function remover(){
	const list = document.querySelectorAll('li');
	list[0].remove();
	// list.forEach(el => el.remove());
	for (let i=0; i<list.length; i++){
		list[i].remove();
		}
	};


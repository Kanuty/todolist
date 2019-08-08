

document.querySelector('#btn1').addEventListener('click', addItemToList);
document.querySelector('#btn2').addEventListener('click', addItemToList);
document.querySelector('#btn3').addEventListener('click', addItemToList);
document.querySelector('.clear-tasks').addEventListener('click', remover);


function addItemToList(){
	console.log('Clicked');
	const li = document.createElement('li');
	li.className = 'collection-item';
	li.setAttribute('title', 'Item');
	
	let v = this.id;
	
	console.log(v);
	switch (v) {
		case 'btn1':
			li.appendChild(document.createTextNode('ITEM 1'));
			break;
		case 'btn2':
			li.appendChild(document.createTextNode('ITEM 2'));
			break;
		case 'btn3':
			li.appendChild(document.createTextNode('ITEM 3'));
			break;
		default:
			li.appendChild(document.createTextNode('NOT SPECIFIC EXCUSE'));
	}

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


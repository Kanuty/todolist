

document.querySelector('#btn1').addEventListener('click', onClick1);
document.querySelector('#btn2').addEventListener('click', onClick2);
document.querySelector('#btn3').addEventListener('click', onClick3);
document.querySelector('.clear-tasks').addEventListener('click', onClick4);


// const onClick = () => {
// 	console.log('Clicked')
// };
// nie wiem czemu arrow function tutaj nie działa


//Na pewno istnieje prostsza metoda na dodawanie nowych "różnych" li, niż tworzenie osobnej funkcji dla każdego przycisku.
function onClick1(){
	console.log('Clicked');
	const li = document.createElement('li');
	li.className = 'collection-item';
	li.setAttribute('title', 'Item');
	li.appendChild(document.createTextNode('ITEM 1'))
	document.querySelector('ul.collection').appendChild(li);
	console.log(li);
	};

function onClick2(){
	console.log('Clicked');
	const li = document.createElement('li');
	li.className = 'collection-item';
	li.setAttribute('title', 'Item');
	li.appendChild(document.createTextNode('ITEM 2'))
	document.querySelector('ul.collection').appendChild(li);
	console.log(li);
	};

function onClick3(){
	console.log('Clicked');
	const li = document.createElement('li');
	li.className = 'collection-item';
	li.setAttribute('title', 'Item');
	li.appendChild(document.createTextNode('ITEM 3'))
	document.querySelector('ul.collection').appendChild(li);
	console.log(li);
	};

function onClick4(a){
	const list = document.querySelectorAll('li');
	list[0].remove();
	};

	// nie mogę ustalić jak powinna wyglądać funkcja usuwająca wszystkie li z listy (bez niszczenia samej ul).
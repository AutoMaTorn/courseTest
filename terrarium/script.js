// // обращаемся к элементам по их ID

dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

let currentZ = 1;

// функция для перетаскивания элементов
function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;
    terrariumElement.onclick = bringToFront; 
    
    // обработчик события нажатия кнопки мыши
    // на элементе terrariumElement
    function pointerDrag(e) {
	e.preventDefault();
    bringToFront();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
    }

    // функция для перетаскивания элемента
    // при движении мыши
    function elementDrag(e) {
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	console.log(pos1, pos2, pos3, pos4);
	terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
	terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
   
    }
    // функция для остановки перетаскивания элемента
    // при отпускании кнопки мыши
    function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
    }

    // функция для поднятия элемента на передний план
    // при клике на него
    function bringToFront() {
        currentZ++;
        terrariumElement.style.zIndex = currentZ;
        
    }
}
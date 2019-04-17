const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messagOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg)

function sendMsg(){
	let content = messageIn.value;
		if (content === ''){
			alert('Please enter a valid value');
		}
			else{
	messagOut.innerHTML = content;
	messageIn.value = '';

}
}

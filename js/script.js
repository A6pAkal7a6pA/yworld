let sections = document.querySelectorAll('section');
document.querySelectorAll('.menu__link').forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault();

		sections.forEach(l => l.classList.remove('active'))
		let text = link.innerText.toLowerCase();
		if (text === 'roadmap') {
			sections[2].classList.add('active')
		} else if (text === 'main') {
			sections[0].classList.add('active')
		} else if (text === 'about') {
			init()
			typewriter()
			sections[1].classList.add('active')
		}
		console.log(text);
	})
});

function getSiblings(elem) {
	var siblings = [];
	var sibling = elem;
	while (sibling.previousSibling) {
		sibling = sibling.previousSibling;
		sibling.nodeType == 1 && siblings.push(sibling);
	}
	sibling = elem;
	while (sibling.nextSibling) {
		sibling = sibling.nextSibling;
		sibling.nodeType == 1 && siblings.push(sibling);
	}
	return siblings;
}

let aText = new Array(
	"<p>Hello!</p>",

	"<p>This is the YWORLD research team</p>",

	"<p>If you are reading this message, then we have choosen you.</p>",

	"<p>Now, the year is <span class='number'>5555</span><br>",
	"Right now, a series of anomalous events have taken place in the<br>",
	"universe. Several thousand flashes materialaized mysterious objects<br>",
	"in space.</p>",

	"<p>I know you have a lot of questions.<br>",
	"But now we need to underastand what is happening with the universe.</p>",

	"<p>And only you can help us with this.</p>",

	"<p>The entire research staff of the mission is waiting for you on<br>",
	"discord and twitter, where you will find all the answers to your questions.</p>",

	"<p>See you. YWORLD</p>"
);

let iSpeed = 50; // time delay of print out
let iIndex = 0; // start printing array at this posision
let iArrLength = aText[0].length; // the length of the text array
let iScrollAt = 20; // start scrolling up at this many lines

let iTextPos = 0; // initialise text position
let sContents = ''; // initialise contents variable
let iRow; // initialise current row

function init() {
	iSpeed = 50; // time delay of print out
	iIndex = 0; // start printing array at this posision
	iArrLength = aText[0].length; // the length of the text array
	iScrollAt = 20; // start scrolling up at this many lines

	iTextPos = 0; // initialise text position
	sContents = ''; // initialise contents variable
	iRow;
}


function typewriter() {
	sContents = ' ';
	iRow = Math.max(0, iIndex - iScrollAt);
	let destination = document.querySelector('.about__content');

	while (iRow < iIndex) {
		sContents += aText[iRow++];
	}
	destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
	if (iTextPos++ == iArrLength) {
		iTextPos = 0;
		iIndex++;
		if (iIndex != aText.length) {
			iArrLength = aText[iIndex].length;
			setTimeout("typewriter()", 500);
		}
	} else {
		setTimeout("typewriter()", iSpeed);
	}
}

typewriter();
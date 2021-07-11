
document.getElementById('mes-2').scrollIntoView({
	    // behavior: 'smooth',
		block:"nearest",
		inline:"center" 
})

document.getElementsByTagName('body').scrollIntoView({
		block:"nearest",
		inline:"center" 
})
// let activePanel = 'NicheResearch'

const users = [
	{
		id:'user-1',
		flag:1,
		img:'../img/Ellipse 3.png',
		userName: 'Sansa',
		message: '../img/Messages/1.png'
	},
	{
		id:'user-2',
		flag:2,
		img:'../img/Ellipse 2.png',
		userName: 'Aria',
		message: '../img/Messages/2.png'
	},
	{
		id:'user-3',
		flag:3,
		img:'../img/Ellipse 1.png',
		userName: 'John',
		message: '../img/Messages/3.png'
	},
	{
		id:'user-4',
		flag:4,
		img:'../img/Ellipse 4.png',
		userName: 'Sofi',
		message: '../img/Messages/1.png'
	},
	{
		id:'user-5',
		flag:5,
		img:'../img/Ellipse 5.png',
		userName: 'Sara',
		message: '../img/Messages/3.png'
	},

]

let activeUser = users[2]
// document.getElementById('userNameMessage').innerText(activeUser.userName)

function resolveItem(id) {
	const element = document.getElementById(id)

	const NicheResearch = document.getElementById('NicheResearch')
	const CompatitiveAdvantage = document.getElementById('CompatitiveAdvantage')
	const Sourcing = document.getElementById('Sourcing')
	const LunchingPlan = document.getElementById('LunchingPlan')
	const borad = document.getElementById('BoardA')
	const BoardName = document.getElementById('BoardNameA')
	
	if(element.id == 'CompatitiveAdvantage') {
		element.src = '../img/Group 6485.png'
		activePanel = 'CompatitiveAdvantage'
		borad.src = '../img/Boards/2.png'
		BoardName.innerHTML = 'Compatitive Advantage'

		NicheResearch.src = '../img/Group 12859.png'
		Sourcing.src = '../img/Group 12855.png'
		LunchingPlan.src = '../img/Group 12856.png'
	}
	else if(element.id == 'Sourcing') {
		element.src = '../img/shop-sd.png'
		activePanel = 'Sourcing'
		borad.src = '../img/Boards/3.png'
		BoardName.innerHTML = 'Sourcing'

		LunchingPlan.src = '../img/Group 12856.png'
		NicheResearch.src = '../img/Group 12859.png'
		CompatitiveAdvantage.src = '../img/Group 12854.png'
	}
	else if(element.id == 'LunchingPlan') {
		element.src = '../img/lunch.png'
		activePanel = 'LunchingPlan'
		borad.src = '../img/Boards/4.png'
		BoardName.innerHTML = 'Lunching Plan'

		CompatitiveAdvantage.src = '../img/Group 12854.png'
		NicheResearch.src = '../img/Group 12859.png'
		Sourcing.src = '../img/Group 12855.png'
	}
	else if(element.id == 'NicheResearch') {
		element.src = '../img/Group 12853.png'
		activePanel = 'NicheResearch'
		borad.src = '../img/Boards/1.png'
		BoardName.innerHTML = 'Niche Research'

		CompatitiveAdvantage.src = '../img/Group 12854.png'
		Sourcing.src = '../img/Group 12855.png'
		LunchingPlan.src = '../img/Group 12856.png'
	}
}

function resolveMessage(id) {
	user = users.filter(u => u.id == id)
	image = document.getElementById('mes-2')

	if(user) {
		image.src = user[0].message

		image.classList.remove('scaleA')

		void image.offsetWidth; 

		image.classList.add('scaleA');

		// image.style.animation = ' ';
		// image.style.animation = scaleAni;
		// image.style.animationDuration = 2;
		userDom = document.getElementById(user[0].id)
		userNameMessage = document.getElementById('userNameMessage')
		// let wrapper = document.getElementById('users-pro')
		active = document.getElementsByClassName('activeUserMessage')[0]
		activeUser =user[0]
		// // console.log(user[0].flag)
		// if(user[0].flag < activeUser.flag) {
		// 	let shift = activeUser.flag - user[0].flag
		// 	console.log(shift)
		// 	// wrapper.style.paddingLeft += 115 * shift
		// }
	
		// if(user[0].flag > activeUser.flag) {
		// 	let shift = user[0].flag - activeUser.flag
		// 	console.log(shift)
		// 	// wrapper.style.paddingRight += 115 * shift
		// }

		// active.classList.remove('activeUserMessage')
		// active.classList.add('UserMessage')

		// userDom.classList.remove('UserMessage')
		// userDom.classList.add('activeUserMessage')
		// activeUser = user[0]
		let src = userDom.src
		let id = userDom.id

		
		userDom.id= active.id
		userDom.src = active.src
		
		active.src =src
		active.id = id
		userNameMessage.innerHTML = activeUser.userName
		// console.log(userNameMessage)

	}

	// if (flag == 'R') {
	// 	messageL[0].classList.add('MS-M')
	// 	messageL[0].classList.remove('MS-L')

	// 	messageM[0].classList.add('MS-R')
	// 	messageM[0].classList.remove('MS-M')

	// }
	// if (flag == 'L') {
	// 	messageR[0].classList.add('MS-M')
	// 	messageR[0].classList.remove('MS-R')

	// 	messageM[0].classList.add('MS-L')
	// 	messageM[0].classList.remove('MS-M')
	// }
}


function resolveUserName(id,mes) {
	let mess = document.getElementsByClassName('mes')
	for( var i=0 ;i < mess.length ; i++){
		mess[i].classList.add('opacity-40')
		mess[i].classList.remove('transation')
	}
	let mesage = document.getElementById(mes)
	mesage.scrollIntoView({
		behavior: 'smooth',
		block:"nearest",
		inline:"center" 
	});

	mesage.classList.add('transation')

	let user = document.getElementById(id)
	member = users.filter(u => u.id == id)
	activeUser =member[0]
	mesage.classList.remove('opacity-40')

	active = document.getElementsByClassName('activeUserMessage')[0]

	active.classList.add('UserMessage')
	active.classList.remove('activeUserMessage')


	user.classList.remove('UserMessage')
	user.classList.add('activeUserMessage')

	userNameMessage.innerHTML = activeUser.userName
}

let activeAnimation =false




function addClass() {
	var element1 = document.getElementById("chart-1");
	var element2 = document.getElementById("chart-2");
	var element3 = document.getElementById("chart-3");
	var element4 = document.getElementById("chart-4");

	element1.classList.add("chart1");
	element2.classList.add("chart2");
	element3.classList.add("chart3");
	element4.classList.add("chart4");

}


function removeClass() {
	var element1 = document.getElementById("chart-1");
	var element2 = document.getElementById("chart-2");
	var element3 = document.getElementById("chart-3");
	var element4 = document.getElementById("chart-4");

	element1.classList.remove("chart1")
	element2.classList.remove("chart2")
	element3.classList.remove("chart3")
	element4.classList.remove("chart4")
}

function overNumberStyle(id) {
	let number =document.getElementById(id)
	// console.log(number)
	number.classList.add('numberAnimation')
	number.classList.remove('numberAnimation-reverse')
	number.classList.add('green')

	if(id == 'number1') {
		number.src = '../img/numbers/01.png'
	}
	if(id == 'number2') {
		number.src = '../img/numbers/02.png'
	}
	if(id == 'number3') {
		number.src = '../img/numbers/03.png'
	}
	if(id == 'number4') {
		number.src = '../img/numbers/04.png'
	}	
}

function outNumberStyle(id) {
	let number =document.getElementById(id)
	// console.log(number)
	number.classList.remove('numberAnimation')
	number.classList.add('numberAnimation-reverse')
	number.classList.remove('green')

	if(id == 'number1') {
		number.src = '../img/numbers/01 (Stroke).png'
	}
	if(id == 'number2') {
		number.src = '../img/numbers/02 (Stroke).png'
	}
	if(id == 'number3') {
		number.src = '../img/numbers/03 (Stroke).png'
	}
	if(id == 'number4') {
		number.src = '../img/numbers/04 (Stroke).png'
	}		
}

function scrolldiv(id) {
  var elem = document.getElementById(id);
  elem.scrollIntoView({
    behavior: 'smooth' 
  });
}

// var modal = document.getElementById("myModal");

// function openModel() {
// 	 modal.style.display = "block";
// }

// window.onclick = function(event) {
//   // if (event.target == modal) {
//     modal.style.display = "none";
//   // }
// }


function visibleModal() {
	document.getElementById('modal1').classList.remove('hidden')
	document.getElementById('modal').classList.add('modal')
	document.getElementById('modal1').scrollIntoView({
		behavior: 'smooth',
		block:"center",
		inline:"center" 
	})
}

// window.onclick = function(event) {
// 	let wrapper = document.getElementById('buttonModal1')
//   if (event.target != wrapper) {
//     document.getElementById('modal1').classList.add('hidden')
//     document.getElementById('modal').classList.remove('modal')
//   }
// }

function hoverNumber(id) {
	const number = document.getElementById(id)
	if(id == 'number1') {
		number.src = '../01.png'
	}
	if(id == 'number2') {
		number.src = '../02.png'
	}
	if(id == 'number3') {
		number.src = '../03.png'
	}
	if(id == 'number4') {
		number.src = '../04.png'
	}			
}
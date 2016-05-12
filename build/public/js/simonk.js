var trace = function(msg){ console.log(msg); };

var nav;
var displayList;


function portfolio_init(event)
{
	trace("loaded!");

	displayList = {};

	displayList.body 					= document.querySelector("body");
	displayList.wrapper 			= document.querySelector(".page-wrapper");
	displayList.hamburger 		= document.querySelector(".nav-hamburger");
	displayList.close 				= document.querySelector(".nav-close");
	displayList.mobileNavMain	= document.querySelector(".mobile-nav-main");

	navigation_add();
}

function navigation_add()
{
	nav = {};
	nav.open = false;

	displayList.hamburger.addEventListener("click", navigation_event, false);
	displayList.close.addEventListener("click", navigation_event, false);
}

function navigation_event(event)
{
	event.preventDefault();

	if(nav.open)
	{
		// CLOSE
		nav.open = false;
		displayList.wrapper.classList.remove("nav-fx-page-wrapper");
		// displayList.body.classList.remove("nav-fx-body");
		displayList.mobileNavMain.classList.remove("nav-fx-mobile-nav-main");
	}

	else
	{
		// OPEN
		nav.open = true;
		displayList.wrapper.classList.add("nav-fx-page-wrapper");
		// displayList.body.classList.add("nav-fx-body");
		displayList.mobileNavMain.classList.add("nav-fx-mobile-nav-main");
	}
}
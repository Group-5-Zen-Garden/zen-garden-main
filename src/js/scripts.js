document.addEventListener('DOMContentLoaded', () => 
{
document.querySelector('body').setAttribute('class', 'no-animation-time') //adds the no-animation class to the body
const menuIcon = document.createElement('div'); //create a div for the menu icon
const line1 = document.createElement('span'); //create the top bar
const line2 = document.createElement('span'); //create the middle bar
const line3 = document.createElement('span'); //create the bottom bar
document.body.prepend(menuIcon); //add the menu-icon div to the top of the body
menuIcon.prepend(line3); //adds the lines inside to top of div
menuIcon.prepend(line2);
menuIcon.prepend(line1);
menuIcon.setAttribute('class', 'menu-icon'); //assigns a class to div
menuIcon.setAttribute('onclick', 'toggleNav()'); //gives a click attribute to the div
line1.setAttribute('class', 'line1'); //assigns a class to line1
line2.setAttribute('class', 'line2'); //assigns a class to line2
line3.setAttribute('class', 'line3'); //assigns a class to line3

const updateSidebar = document.querySelector('.sidebar'); //selects the left-positioned sidebar
const updateMenuIcon = document.querySelector('.menu-icon'); //selects the left-positioned menu
const updateLine1 = document.querySelector('.line1'); //selects the left-positioned first line
const updateLine2 = document.querySelector('.line2'); //selects the left-positioned second line
const updateLine3 = document.querySelector('.line3'); //selects the left-positioned third line

toggleNav = () =>
{
	updateSidebar.classList.toggle('sidebar-right'); //toggles to right-positioned rules for sidebar
	updateMenuIcon.classList.toggle('menu-right'); //toggles to right-positioned rules for menu
	updateLine1.classList.toggle('leftX'); //toggles to right-positioned rules for first line
	updateLine2.classList.toggle('middleX'); //toggles to right-positioned rules for second line
	updateLine3.classList.toggle('rightX'); //toggles to right-positioned rules for third line
}

/*on page load, after 600ms, toggles the "all-in-body" rule from no animation time to a specified animation
time set in an opposing "all-in-body" rule. By doing so this prevents animations being played when page is loaded.*/
setTimeout(allowAnimations = () =>
{
	document.body.classList.toggle('standard-animation-time');
},  600);
})
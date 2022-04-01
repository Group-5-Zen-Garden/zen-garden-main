document.addEventListener('DOMContentLoaded', () => 
{
document.querySelector('body').setAttribute('class', 'no-animation-time')
const menuIcon = document.createElement('div');
const line1 = document.createElement('span');
const line2 = document.createElement('span');
const line3 = document.createElement('span');
document.body.prepend(menuIcon);
menuIcon.prepend(line3);
menuIcon.prepend(line2);
menuIcon.prepend(line1);
menuIcon.setAttribute('class', 'menu-icon');
menuIcon.setAttribute('onclick', 'toggleNav()');
line1.setAttribute('class', 'line1');
line2.setAttribute('class', 'line2');
line3.setAttribute('class', 'line3');

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

setTimeout(function allowAnimations()
{
	document.body.classList.toggle('standard-animation-time');
},  600);
})
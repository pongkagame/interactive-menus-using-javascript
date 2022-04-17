var arrMenus = [
	'home',
	'about',
	'categories',
];

var arrSubmenus = [
	'cars',
	'bicycles',
	'toys',
];

var arrItems = [
	'.nav-item',
	'.submenu-item',
];

function createMenus() {
	const elmNav = document.querySelector('.header-navbar');
	let parentUl = document.createElement('ul');
	parentUl.className = 'header-navbar__wrapper';
	elmNav.appendChild(parentUl);
	arrMenus.forEach(menus => {
		let firstUl = document.querySelector('.header-navbar__wrapper');
		if (firstUl) {
			let parentItems = document.createElement('li');
			parentItems.className = 'nav-item';
			parentItems.id = menus;
			if (menus == "categories") {
				parentItems.textContent = menus;
			}
			firstUl.appendChild(parentItems);
			const primaryItems = document.querySelectorAll('.nav-item');
			primaryItems.forEach(items => {
				if (items.id == menus && items.id != "categories") {
					let linkPrimarys = document.createElement('a');
					linkPrimarys.className = 'linkmain';
					linkPrimarys.href = `${menus}.html`;
					linkPrimarys.textContent = menus;
					items.appendChild(linkPrimarys);
				}
				if (items.id == "categories") {
					items.classList.add('has-submenus');
					let childSubmenus = document.createElement('ul');
					childSubmenus.className = 'nav-item__submenu';
					items.appendChild(childSubmenus);
					arrSubmenus.forEach(submenus => {
						let secondUl = document.querySelector('.nav-item__submenu');
						if (secondUl) {
							secondUl.style.width = `${items.clientWidth}px`;
							let secondaryItems = document.createElement('li');
							secondaryItems.className = 'submenu-item';
							secondaryItems.id = submenus;
							secondUl.appendChild(secondaryItems);
							const thisSubmenus = document.querySelectorAll('.submenu-item');
							thisSubmenus.forEach(elmsub => {
								if (elmsub.id == submenus) {
									let linkSecondary = document.createElement('a');
									linkSecondary.className = 'linksub';
									linkSecondary.href = `${submenus}.html`;
									linkSecondary.textContent = submenus;
									elmsub.appendChild(linkSecondary);
								}
							});
						}
					});
				}
			});
		}
	});
}

function subMenus() {
	const elmMenu = document.querySelectorAll('.nav-item');
	if (elmMenu) {
		elmMenu.forEach(elm => {
			elm.addEventListener('click', function (e) {
				e.preventDefault();
				let elmParentSubmenus = document.querySelector('.has-submenus'),
					elmSubmenu = document.querySelector('.nav-item__submenu');
				if (e.target.classList.contains('has-submenus')) {
					if (!elmParentSubmenus.classList.contains('this-submenus')) {
						elmParentSubmenus.classList.toggle('this-submenus');
						elmSubmenu.classList.toggle('opening');
					} else {
						elmParentSubmenus.classList.remove('this-submenus');
						elmSubmenu.classList.remove('opening');
					}
				} else {
					elmParentSubmenus.classList.remove('this-submenus');
					elmSubmenu.classList.remove('opening');
				}
			}, true);
		});
	}
}

function randomHeaderColor() {
	const changeHeader = document.querySelector('.header'),
		changeOpening = document.querySelector('.nav-item__submenu');
	arrItems.forEach(placeback => {
		const elmBack = document.querySelectorAll(`${placeback}`);
		elmBack.forEach(trigger => {
			trigger.addEventListener('mouseenter', function () {
				arrMenus.forEach(main => {
					if (trigger.id == main) {
						changeHeader.style.background = "#" + ((Math.random() + 2) * 16777216 | 0).toString(16).slice(1);
						changeOpening.style.background = '#FFF';
					}
				});
				arrSubmenus.forEach(sub => {
					if (trigger.id == sub) {
						changeOpening.style.background = "#" + ((Math.random() + 2) * 16777216 | 0).toString(16).slice(1);
						changeHeader.style.background = '#FFF';
					}
				});
			});
			trigger.addEventListener('mouseleave', function () {
				changeOpening.style.background = '#FFF';
				changeHeader.style.background = '#FFF';
			});
		});
	});
}

createMenus();
randomHeaderColor();
subMenus();
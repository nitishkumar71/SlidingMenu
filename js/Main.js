var app=angular.module('sideMenu',['ngAnimate']);
app.controller('SideMenuController',function(){

});

app.directive('menu',['$animate','$document',function($animate,$document){
	return {
		restrict:'A',
		link:function(scope,element,attrs){
			element.on('click',function(){
				var body=angular.element($document[0].body);
				var menu=angular.element(document.getElementById('menu'));
				showHideMenu(body,menu);
			});
		}
	};
}]);

app.directive('menupush',['$animate','$document',function($animate,$document){
	return {
		restrict:'A',
		link:function(scope,element,attrs){
			element.on('click',function(){	
				var body=angular.element($document[0].body);
				var menu=angular.element(document.getElementById('menu'));
				showHideMenu(body,menu);
				pushBody(body,menu);
			});
		}
	};
}]);

function pushBody(body,menu){
	if (menu.hasClass("menu-left")) {	
		if (menu.hasClass("menu-open")) {
			body.addClass('menu-push-toright');
		} else {
			body.removeClass('menu-push-toright');
		}
	}else if (menu.hasClass("menu-right")) {	
		if (menu.hasClass("menu-open")) {
			body.addClass('menu-push-toleft');
		} else {
			body.removeClass('menu-push-toleft');
		}
	}
}

function showHideMenu(body,menu){
	if (menu.hasClass("menu-left")) {	
		if (menu.hasClass("menu-open")) {
			menu.removeClass('menu-open');
		} else {
			menu.addClass('menu-open');
		}
	}else if (menu.hasClass("menu-right")) {	
		if (menu.hasClass("menu-open")) {
			menu.removeClass('menu-open');
		} else {
			menu.addClass('menu-open');
		}
	}
}
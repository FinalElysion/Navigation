angular.module('MyApp', ['ui.router'])
	.controller('MainController', ['$scope','$state',function($scope,$state) {
		console.log('init ctrl');
		$scope.currentType = $state.current.name.split('.')[1];
		$scope.changeTab = function(type){
			$scope.currentType = type;
		};
	}])
	.run(['$state', function($state) {
//		$state.go('app.home');
    }])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/app/home");
		$stateProvider.state('app', {
			url: "/app",
			abstract:true,
			templateUrl: "app/viewport.html",
			controller: 'MainController'
		})
	    .state('app.home', {
	      url: "/home",
	      templateUrl: "app/home/home.html"
	    })
	    .state('app.article', {
	      url: "/article",
	      templateUrl: "app/article/article.html"
	    })
	    .state('app.photo', {
	      url: "/photo",
	      templateUrl: "app/photo/photo.html"
	    })
	    .state('app.music', {
	      url: "/music",
	      templateUrl: "app/music/music.html"
	    })
	    .state('app.comment', {
	      url: "/comment",
	      templateUrl: "app/comment/comment.html"
//	      template: "留言板"
	    })
});
  

angular.module("american")
	.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise("introduction")
		$stateProvider
			.state("introduction",{
				url:"/introduction:title",
				templateUrl:"tpls/introduction.html",
				resolve:{
					listInfo:function($http){
						return $http.get("server/shop.json")
					}
				},
				controller:"introduction"
			})
			.state("introductoryimg",{
				url:"/introductoryimg",
				templateUrl:"tpls/introductoryimg.html",
				resolve:{
					shopInfo:function($http){
						return $http.get("server/shop.json")
					}
				},
				controller:"introductoryimg"
			})
			.state("servicelist",{
				url:"/servicelist:title",
				templateUrl:"tpls/servicelist.html",
				resolve:{
					itemInfo:function($http){
						return $http.get("server/shop.json")
					}
				},
				controller:"servicelist"
			})
	
	})

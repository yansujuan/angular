angular.module('american')
.directive('myHeader',function(){
	return {
		scope : {
			title : '='
		},
		replace:true,
		restrice : 'ACEM',
		templateUrl : 'tpls/base/header/header.html',
		controller : function($scope){
			if(!$scope.title){
			
//		console.log($scope)
			$scope.title="商品介绍"
			}
		}
	}
})

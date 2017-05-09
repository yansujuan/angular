angular.module("american")
	.directive("screen",function(){
	return {
		templateUrl:"tpls/screen.html",
		scope:{
			list:"=",
			items:"="
		},
		replace:true,
		controller:function($scope){
//			console.log($scope.list)
		},
		link:function(scope,ele){
			scope.toggle = function(flag,idx){
				scope.flag = flag
				ele.find("ul").eq(0).find("li").removeClass("on").eq(idx).addClass("on")
				
//				console.log(flag)
//				console.log(ele.find("ul").eq(0).find("li").eq(idx))
			}
		}
	}
})
.directive("order",function(){
	return {
		templateUrl:"tpls/order.html",
		controller:function($scope){
			
		}
	}
})

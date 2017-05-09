angular.module("american")
	.controller("introduction",function(listInfo,$scope){
		$scope.shop=listInfo.data
		$scope.listInfo=listInfo.data.list
//		console.log(listInfo.data)
	})
	.controller("servicelist",function(itemInfo,$scope){
		$scope.itemInfo=itemInfo.data.list
		$scope.list=itemInfo.data.items
		$scope.items=itemInfo.data.project 
		//console.log($scope.list)
//		console.log(itemInfo.data.list)
//		console.log(itemInfo.data.items)
		//console.log(itemInfo.data.project)
		//$scope.flag=$scope.list
//		console.log($scope.flag) 
			$scope.isScreen = true
			$scope.screenClick=function(){
				$scope.isScreen = !$scope.isScreen
				$scope.isOrder = true
			}
			$scope.isOrder = true
			$scope.orderClick=function(){
				$scope.isOrder = !$scope.isOrder
				$scope.isScreen = true
			}
			
			$scope.price=function(price){
				$scope.orderItem =price
				$scope.isOrder = true
			}
			$scope.pf=function(pf){
				$scope.orderItem = pf
				$scope.isOrder = true
			}
	})
	.controller("introductoryimg",function(shopInfo,$scope){
		$scope.shop=shopInfo.data
//		console.log(shopInfo.data)
	})

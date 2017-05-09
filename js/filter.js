angular.module("american")
	.filter("screen",function(){
		return function(data,param){
			if(param==undefined || param=='all'){return data}
			var arr=[];
			angular.forEach(data,function(val,key){
				if(val.a==param){
					arr.push(val)
				}
			})
			return arr
		}
	})

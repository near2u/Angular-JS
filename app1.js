var app = angular.module("sample",[]);

app.controller("test", function($scope){

	
	$scope.search = function($http) {

			$http(

				url: "http://www.google.com/"+$scope.username


				).then(function(resp){



			}, function(){


			});
	}
	$scope.sub = function(){

		alert('data submiteddd: '+$scope.username);
		reset();
	}

	function reset() {
		$scope.username="";
	}
});
function test(){
	/*window.PhoneCaller.call("13810513731", 
		function (arg){
		  $alert(arg);
		}, 
		function (arg){
		  $alert(arg);
		})*/
		summer.call("1381051373",
			function (arg){
			  $alert(arg+'success');
			}, 
			function (arg){
			  $alert(arg+'error');
			})
}
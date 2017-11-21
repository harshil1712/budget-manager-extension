$(function(){
	chrome.storage.sync.get('total',function(budget){
		$('#total').text(budget.total);
	})
	$('#spendAmount').click(function(){
		//Calling the Chrome Storage API to get
		chrome.storage.sync.get('total',function(budget){
			var newTotal =0;
			//checking if total exist
			if(budget.total){
				newTotal += parseInt(budget.total);
			}
			//Getting datat from the input field
			var amount = $('#amount').val();
			if(amount){
				newTotal += parseInt(amount);
			}

			//Storing the value 
			chrome.storage.sync.set({'total':newTotal});
			$('#total').text(newTotal);
			$('#amount').val('');
		});
	});
});
$(function(){
	chrome.storage.sync.get(['total','limit'],function(budget){
		$('#total').text(budget.total);
		$('#limit').text(budget.limit);
	})
	$('#spendAmount').click(function(){
		//Calling the Chrome Storage API to get
		chrome.storage.sync.get('total',function(budget){
			var newTotal =0;
			//checking if total exist
			if(budget.total){
				newTotal += parseInt(budget.total);
			}
			//Getting data from the input field
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
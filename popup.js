$(function(){
	chrome.storage.sync.get(['total','limit'],function(budget){
		$('#total').text(budget.total);
		$('#limit').text(budget.limit);
	})
	$('#spendAmount').click(function(){
		//Calling the Chrome Storage API to get
		chrome.storage.sync.get(['total','limit'],function(budget){
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
			chrome.storage.sync.set({'total':newTotal},function(){
				// notification
				if(amount && newTotal >= budget.limit){
					var notifOptions ={
						type:'basic',
						iconUrl:'icon48.png',
						title: 'Limit Reached',
						message:"Limit has been reached"
					};
					chrome.notifications.create('limitNotif',notifOptions);
				}
			});
			$('#total').text(newTotal);
			$('#amount').val('');
		});
	});
});
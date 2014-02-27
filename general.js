var PubId = 0;
$(document).ready(function() {
	$$("#UniqueSubmit").singleTap(function(e) {
		//$("#PopupWaiting").popup("open");
		$.ajax({
			url: 'http://www.pick-app.co.il:3000/Auth/CheckSessionKey',
			type: 'POST',
			dataType: 'json',
			data: {UniqueCode: $("#UniqueCode").val()},
			success: function(result) {
				if(result.success) {
					PubId = result.data[0].PubID;
					$.mobile.changePage( "#register", { transition: "flow", changeHash: false });
				} else {
					alert("לא נמצאה התאמה");
				}
			},
		});
	});
});
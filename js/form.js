(function ($) {
	'use strict';

	var ajaxForm = function(){
	    $('.ajax-form').each(function() {
	    	var form = $(this);
		    form.submit(function(e) {
		        e.preventDefault();

		        form.addClass('submitting');
			    form.find('button').blur();

		        $.ajax({
		            url: form.attr('action'),
		            type: form.attr('method'),
		            dataType: 'html',
		            data: form.serialize(),
		            success: function(result) {
		            	var message = $(result).find('.form-message').html();
		            	var	status = $(result).find('.form-message').attr('data-status');
		            	$(form)[0].reset();
		            	console.log('form submission success!');
		            	notify(message, status, '#ffffff');
		            	form.removeClass('submitting');
		            },
		            error: function() {
		            	console.log('form submission failed!!!');
		            	notify('<p>Submission failed. Refresh page and retry.<p>', '#f44336', '#ffffff');
		            	form.removeClass('submitting');
		            }
		        });
		    });
	    })
	}

	var init = function () {
		ajaxForm();
	};

	$(init);
})(jQuery);

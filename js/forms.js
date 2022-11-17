var BASE_URL = $('meta[name="base-url"]').attr('content');
var mob_filter = /^\d{10}$/;
var email_filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

$(document).ready(function(){
	//alert(BASE_URL);
});

$('body').on('click', '.btnSubmitEnqure', function() {
	var form_id = $(this).data('form-id');
	var response_container = $(this).data('response');
	//alert(form_id);
	/**/
	var form_data = new FormData(document.getElementById(form_id));
	$.ajax({
        url: BASE_URL + "ajax_SubmitEnq.php",
        type: 'POST',
        data: form_data,
        processData: false, // tell jQuery not to process the data
        contentType: false, // tell jQuery not to set contentType
        dataType: 'json',
        beforeSend: function() {
            $(response_container).html('<p class="text-info text-center"><i class="fa fa-info-circle fa-fw"></i> Processing..</p>');
        },
        success: function(response) {
            if (response.status == 'success') {
                $(response_container).html('');
                $(response_container).html('<p class="text-success text-center"><i class="fa fa-check fa-fw"></i> Thank for contacting us. We will get back to you shortly.</p>');
                $(response_container).slideDown(1000).delay(2000).fadeOut(1000);
                $("#frm_enquire_now").trigger('reset');
                //location.reload();
                setTimeout(function() {
                    location.href = response.returnText;
                }, 2000);
            } else if (response.status == 'mail_failure') {
                $(response_container).html('');
                $(response_container).html('<p class="text-danger text-center"><i class="fa fa-exclamation-triangle fa-fw"></i> Something went wrong while sending email. But your enquiry has been noted with us. And we will get back to you shortly.</p>');
                $(response_container).slideDown(1000).delay(2000).fadeOut(1000);
                $("#frm_enquire_now").trigger('reset');
                //location.reload();
                setTimeout(function() {
                    location.href = response.returnText;
                }, 4000);
            } else {
                $(response_container).html('');
                $(response_container).html('<p class="text-danger text-center"><i class="fa fa-exclamation-triangle fa-fw"></i> Error: ' + response.returnText + '</p>');
            }
        },
        complete: function(data) {
            // Block to execute after ajax operation
        }
    });
	/**/
});


$('body').on('click', '#btnSubmitConsultation', function() {
	var form_id = $(this).data('form-id');
	var response_container = $(this).data('response');
	//alert(form_id);
	/**/
	var form_data = new FormData(document.getElementById(form_id));
	$.ajax({
        url: BASE_URL + "ajax_SubmitConsultation.php",
        type: 'POST',
        data: form_data,
        processData: false,
        contentType: false, 
        dataType: 'json',
        beforeSend: function() {
            $(response_container).html('<p class="text-info text-center"><i class="fa fa-info-circle fa-fw"></i> Processing..</p>');
        },
        success: function(response) {
            if (response.status == 'success') {
                $(response_container).html('');
                $(response_container).html('<p class="text-success text-center"><i class="fa fa-check fa-fw"></i> Thank for contacting us. We will get back to you shortly.</p>');
                $(response_container).slideDown(1000).delay(2000).fadeOut(1000);
                $("#frm_consultation").trigger('reset');
                //location.reload();
                setTimeout(function() {
                    location.href = response.returnText;
                }, 2000);
            } else if (response.status == 'mail_failure') {
                $(response_container).html('');
                $(response_container).html('<p class="text-danger text-center"><i class="fa fa-exclamation-triangle fa-fw"></i> Something went wrong while sending email. But your enquiry has been noted with us. And we will get back to you shortly.</p>');
                $(response_container).slideDown(1000).delay(2000).fadeOut(1000);
                $("#frm_consultation").trigger('reset');
                //location.reload();
                setTimeout(function() {
                    location.href = response.returnText;
                }, 4000);
            } else {
                $(response_container).html('');
                $(response_container).html('<p class="text-danger text-center"><i class="fa fa-exclamation-triangle fa-fw"></i> Error: ' + response.returnText + '</p>');
            }
        },
        complete: function(data) {
            // Block to execute after ajax operation
        }
    });
	/**/
});
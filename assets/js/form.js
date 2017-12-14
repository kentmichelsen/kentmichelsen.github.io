$(document).ready(function() {

    $('#contact_form').on('submit', function(e) {
        e.preventDefault();
        
        //get the name field value
        var name = $('#name').val();
        //get the name field value
        var email = $('#email').val();
		//get thesubject
		var subject = $('#subject').val();
        //get the comments
        var message = $('#message').val();
                    
        //pretend we don't need validation
        
        //send to formspree
        $.ajax({
            url:'https://formspree.io/kentmichelsen@gmail.com',
            method:'POST',
            data:{
                name:name,
                //_replyto:email,
                 email:email,
				_subject:subject,
				subject:subject,
                message:message,
               
            },
            dataType:"json",
            success:function() {
                console.log('success'); 
                //$('#formBlock').hide();
                //$('#thankyouBlock').show();
				top.location.href="/tak.html";
            }   

        });     
        
    });

}); 
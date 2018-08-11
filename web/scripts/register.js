var data_user;
var data_identifier;
var data_access;

var button_next_user;
var button_next_identifier;
var button_next_access;

var button_register;
var link_register;
var button_login;
var link_login;

var form_inputs = {};

function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      rv[i] = arr[i];
    return rv;
}

$(
    function(){
        button_register = $("#button_register");
        link_register = $("#link_register");

        button_login = $("#button_login");
        link_login = $("#link_login");

        data_user = $("#data_user");
        data_identifier = $("#data_identifier");
        data_access = $("#data_access");

        button_next_user = $($(data_user).find("#next"));
        button_next_identifier = $($(data_identifier).find("#next"));
        button_next_access = $($(data_access).find("#next"));

        var interval_mobile_login = setInterval(
            function(){
                if(MobileDetect){		 
                    clearInterval(interval_mobile_login);	 
                     var md=new MobileDetect(window.navigator.userAgent);
                    if(md.mobile()){
                        $(button_login).attr("href","#login_mobile");
                        $(link_login).attr("href","#login_mobile");
                    }
                }
            }
        );

        $(button_register).click(
            function(event){
                $(data_user).removeClass("wow");
                $(data_user).removeClass("fadeInUp");
                $(data_user).removeClass("hidden");
                $(data_user).addClass("wow");
                $(data_user).addClass("fadeInUp");
                $(data_identifier).addClass("hidden");
                $(data_access).addClass("hidden");
                //$("#register").focus();
                try{
                    event.preventDefault();
                }catch(ex){}
            }
        );

        $(link_register).click(
            function(event){
                $(data_user).removeClass("wow");
                $(data_user).removeClass("fadeInUp");
                $(data_user).removeClass("hidden");
                $(data_user).addClass("wow");
                $(data_user).addClass("fadeInUp");
                $(data_identifier).addClass("hidden");
                $(data_access).addClass("hidden");
                try{
                    event.preventDefault();
                }catch(ex){}
            }
        );

        

       

        $(button_next_user).click(
            function(event){
                var user_inputs = new Array();
                user_inputs = [
                    'name',
                    'lastname',
                    'country',
                    'address',
                    'birthday'
                ];
                var input = '';
                for(var i in user_inputs){
                    try{
                        input = $($(data_user).find("#"+user_inputs[i])).val();
                    }catch(ex){}
                    //console.log(input);
                    if(input==null){
                        input='';
                    }
                    if(input.length==0){
                        bootbox.alert("Ingrese la Informacion de forma correcta");
                        $($(data_user).find("#"+user_inputs[i])).focus()
                        return;
                    }else{
                        form_inputs[user_inputs[i]] = input;
                    }                    
                }

                $(data_user).addClass("hidden");
                $(data_identifier).removeClass("hidden");
                $(data_identifier).addClass("wow");
                $(data_identifier).addClass("fadeInUp");
                try{
                    event.preventDefault();
                }catch(ex){}
            }
        );

        

        $(button_next_identifier).click(
            function(event){
                var id_inputs = new Array();
                id_inputs = [
                    'email',
                    'btc',
                    'phone',
                    'identifier'
                ];

                var input = '';
                for(var i in id_inputs){
                    try{
                        input = $($(data_identifier).find("#"+id_inputs[i])).val();
                    }catch(ex){}
                    //console.log(input);
                    if(input==null){
                        input='';
                    }
                    if(input.length==0){
                        bootbox.alert("Ingrese la Informacion de forma correcta");
                        $($(data_identifier).find("#"+id_inputs[i])).focus()
                        return;
                    }else{
                        form_inputs[id_inputs[i]] = input;
                    }                    
                }
                
                $(data_access).removeClass("hidden");
                $(data_access).addClass("wow");
                $(data_access).addClass("fadeInUp");
                $(data_identifier).addClass("hidden");
                try{
                    event.preventDefault();
                }catch(ex){}
            }
        );

        

        $(button_next_access).click(
            function(event){
                var access_inputs = new Array();
                access_inputs = [
                    'user',
                    'password',
                    'code' // sponsor
                ];

                var input = '';
                for(var i in access_inputs){
                    try{
                        input = $($(data_access).find("#"+access_inputs[i])).val();
                    }catch(ex){}
                    //console.log(input);
                    if(input==null){
                        input='';
                    }
                    if(input.length==0){
                        bootbox.alert("Ingrese la Informacion de forma correcta");
                        $($(data_access).find("#"+access_inputs[i])).focus()
                        return;
                    }else{
                        form_inputs[access_inputs[i]] = input;
                    }                    
                }

                form_inputs['voucher'] = '';

                
                //form_inputs = $.parseJSON(JSON.stringify(form_inputs));

                //console.log(form_inputs);
                var url = $("#url_web_register").attr("data-url");
                var redirect = $("#url_web_redirect").attr("data-url");
                $.ajax({
                    type: "POST",
                    url: url,
                    data: form_inputs,
                    success: function(  data,  textStatus,jqXHR ){
                        try{
                            data = $.parseJSON(data);
                        }catch(ex){}
                        if(data['register']=='true'){
                            bootbox.alert("Registro exitoso");
                            window.location = redirect;
                        }else{
                            bootbox.alert("Hubo un error en sus datos de registro!");
                            $(data_user).addClass("hidden");
                            $(data_access).addClass("hidden");
                            $(data_identifier).addClass("hidden");
                            $(button_next_user).trigger('click');
                        }
                    }
                  });

                try{
                    event.preventDefault();
                }catch(ex){}
            }
        );

    }
);
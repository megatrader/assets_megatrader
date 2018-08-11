function create_select(select,url_select){
    $.get(
        url_select,
        function( data ){
          try{
            data = $.parseJSON(data);
          }catch(ex){}
          var html = '';
          html = html + "<option value=\"\"></option>";
          for(var i in data){
            if(data[i]['value']){
                html = html + "<option value=\""+data[i]['value']+"\">"+data[i]['label']+"</option>";
            }
          }
          $(select).html(html);/**/
        }
    );
}

$(
    function(){
        var user_id = $("#user_id");
        var url_user_id = $("#url_user_id").attr("data-url");

        create_select(user_id,url_user_id);
    }
);
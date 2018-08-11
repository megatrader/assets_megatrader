// register student 
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

        var select = $("#user_id");
        var url_select = '';
        try{
        url_select = $("#url_user_id").attr("data-url");
        }catch(ex){}

        create_select(select,url_select);

        select = $("#course_id");
        url_select = '';
        try{
        url_select = $("#url_course_id").attr("data-url");
        }catch(ex){}

        create_select(select,url_select);
        

    }
);
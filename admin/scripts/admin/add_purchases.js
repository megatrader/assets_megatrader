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
      var select = $("#product_id");
      var url_select = $("#url_product_id").attr("data-url");

      create_select(select,url_select);

      select = $("#user_id");
      url_select = $("#url_user_id").attr("data-url");

      create_select(select,url_select);

      select = $("#state");
      url_select = $("#url_state").attr("data-url");

      create_select(select,url_select);
  
  }
);
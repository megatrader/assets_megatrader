function create_select(select,url_select,value){
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
              if(data[i]['value']==value){
                  html = html + "<option value=\""+data[i]['value']+"\" selected=\"true\">"+data[i]['label']+"</option>";
              }else{
                  html = html + "<option value=\""+data[i]['value']+"\">"+data[i]['label']+"</option>";
              }
          }
        }
        $(select).html(html);/**/
      }
  );
}

$(
  function(){
      var url_id = $("#url_id").attr("data-url");
      var url_data = $("#url_data").attr("data-url");      

      $.get(
          url_data+"/"+url_id,
          function(data){
              try{
                  data = $.parseJSON(data);
              }catch(ex){}

              for(var i in data){
                  try{
                      $("#"+i).val(data[i]);
                  }catch(ex){}
              }

          }
      );

  }
);
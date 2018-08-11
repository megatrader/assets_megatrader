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

var select_user='';
var url_select_user='';

var select_course='';
var url_select_course='';

var controller = 'file'
var button_image = $("#button_"+controller);
var uploader_image = $("#uploader_"+controller);
var image = $("#"+controller);
var url_image = $("#url_"+controller).attr("data-url");
var progress_image = $("#progress_"+controller);


$(
    function(){
        // new visualization
        select_user = $("#user_id");
        try{
            url_select_user = $("#url_user_id").attr("data-url");
        }catch(ex){}

        create_select(select_user,url_select_user);

        select_course = $("#course_id");
        try{
            url_select_course = $("#url_course_id").attr("data-url");
        }catch(ex){}

        create_select(select_course,url_select_course);

        $(button_image).click(
            function(event){
              if($(progress_image).length>0){
                  $($(progress_image).find(".progress-bar")).css('width','0%');
              }
            }
      );
      $(uploader_image).fileupload(
          {
              url: url_image,
              dataType: 'json',
              done: function (e, data) {
                  var code = '';
                  var flag =      data.result.success=="true";
                  flag = flag ||  data.result.success==true;
                  if( flag ){
                      try{
                          code = data.result.code;
                      }catch(ex){}
                  }
                  $(image).val(code);
                  $(image_code).val(code);
                  setTimeout(
                      function(){
                          $($(progress_image).find(".progress-bar")).css('width','0%');
                      },
                      3000
                  );
              },
              progressall: function (e, data) {
                  var progress = parseInt(data.loaded / data.total * 100, 10);
                  $($(progress_image).find(".progress-bar")).css('width',progress+'%');
              }
          }
      ).prop('disabled', !$.support.fileInput).parent().addClass($.support.fileInput ? undefined : 'disabled');


    }
);
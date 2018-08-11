
var button_image;
var uploader_image;
var image;
var image_code;
var url_image;
var progress_image;

var button_video;
var textarea_video;
var video;

$(
  function(){
        button_image = $("#button_image");
        uploader_image = $("#uploader_image");
        image = $("#image");
    
        url_image = $("#url_image").attr("data-url");
        progress_image = $("#progress_image");

        button_video = $("#button_videos");
        textarea_video = $("#textarea_videos");
        video = $("#videos");

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
function editor(id){
    CKEDITOR.replace( id , {
          // Define the toolbar: http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_toolbar
          // The standard preset from CDN which we used as a base provides more features than we need.
          // Also by default it comes with a 2-line toolbar. Here we put all buttons in a single row.
          toolbar: [
              { name: 'clipboard', items: [ 'Undo', 'Redo' ] },
              { name: 'styles', items: [ 'Styles', 'Format' ] },
              { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Strike', '-', 'RemoveFormat' ] },
              { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote' ] },
              { name: 'links', items: [ 'Link', 'Unlink' ] },
              { name: 'insert', items: [ 'Image', 'EmbedSemantic', 'Table' ] },
              { name: 'tools', items: [ 'Maximize' ] },
              { name: 'editing', items: [ 'Scayt' ] }
          ],
          // Since we define all configuration options here, let's instruct CKEditor to not load config.js which it does by default.
          // One HTTP request less will result in a faster startup time.
          // For more information check http://docs.ckeditor.com/ckeditor4/docs/#!/api/CKEDITOR.config-cfg-customConfig
          customConfig: '',
          // Enabling extra plugins, available in the standard-all preset: http://ckeditor.com/presets-all
          extraPlugins: 'autoembed,embedsemantic,image2',
          /*********************** File management support ***********************/
          // In order to turn on support for file uploads, CKEditor has to be configured to use some server side
          // solution with file upload/management capabilities, like for example CKFinder.
          // For more information see http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_ckfinder_integration
          // Uncomment and correct these lines after you setup your local CKFinder instance.
          // filebrowserBrowseUrl: 'http://example.com/ckfinder/ckfinder.html',
          // filebrowserUploadUrl: 'http://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
          /*********************** File management support ***********************/
          // Remove the default image plugin because image2, which offers captions for images, was enabled above.
          removePlugins: 'image',
          // Make the editing area bigger than default.
          height: 600,
          // An array of stylesheets to style the WYSIWYG area.
          // Note: it is recommended to keep your own styles in a separate file in order to make future updates painless.
          contentsCss: [ 'https://cdn.ckeditor.com/4.8.0/standard-all/contents.css'],
          // This is optional, but will let us define multiple different styles for multiple editors using the same CSS file.
          bodyClass: 'article-editor',
          // Reduce the list of block elements listed in the Format dropdown to the most commonly used.
          format_tags: 'p;h1;h2;h3;pre',
          // Simplify the Image and Link dialog windows. The "Advanced" tab is not needed in most cases.
          removeDialogTabs: 'image:advanced;link:advanced',
          // Define the list of styles which should be available in the Styles dropdown list.
          // If the "class" attribute is used to style an element, make sure to define the style for the class in "mystyles.css"
          // (and on your website so that it rendered in the same way).
          // Note: by default CKEditor looks for styles.js file. Defining stylesSet inline (as below) stops CKEditor from loading
          // that file, which means one HTTP request less (and a faster startup).
          // For more information see http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_styles
          stylesSet: [
              /* Inline Styles */
              { name: 'Marker',			element: 'span', attributes: { 'class': 'marker' } },
              { name: 'Cited Work',		element: 'cite' },
              { name: 'Inline Quotation',	element: 'q' },
              /* Object Styles */
              {
                  name: 'Special Container',
                  element: 'div',
                  styles: {
                      padding: '5px 10px',
                      background: '#eee',
                      border: '1px solid #ccc'
                  }
              },
              {
                  name: 'Compact table',
                  element: 'table',
                  attributes: {
                      cellpadding: '5',
                      cellspacing: '0',
                      border: '1',
                      bordercolor: '#ccc'
                  },
                  styles: {
                      'border-collapse': 'collapse'
                  }
              },
              { name: 'Borderless Table',		element: 'table',	styles: { 'border-style': 'hidden', 'background-color': '#E6E6FA' } },
              { name: 'Square Bulleted List',	element: 'ul',		styles: { 'list-style-type': 'square' } },
              /* Widget Styles */
              // We use this one to style the brownie picture.
              { name: 'Illustration', type: 'widget', widget: 'image', attributes: { 'class': 'image-illustration' } },
              // Media embed
              { name: '240p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-240p' } },
              { name: '360p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-360p' } },
              { name: '480p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-480p' } },
              { name: '720p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-720p' } },
              { name: '1080p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-1080p' } }
          ]
      } );
  }

var button_image;
var uploader_image;
var image;
var image_code;
var url_image;
var progress_image;

var button_video_1;
var textarea_video_1;
var video_1;

var button_video_2;
var textarea_video_2;
var video_2;

var button_video_3;
var textarea_video_3;
var video_3;

var button_video_4;
var textarea_video_4;
var video_4;

var button_video_5;
var textarea_video_5;
var video_5;

$(
  function(){
    button_image = $("#button_image");
    uploader_image = $("#uploader_image");
    image = $("#image");
    image_code = $("#image_code");
    url_image = $("#url_image").attr("data-url");
    progress_image = $("#progress_image");

    button_video_1 = $("#button_module_1");
    textarea_video_1 = $("#textarea_module_1");
    video_1 = $("#module_1");

    button_video_2 = $("#button_module_2");
    textarea_video_2 = $("#textarea_module_2");
    video_2 = $("#module_2");

    button_video_3 = $("#button_module_3");
    textarea_video_3 = $("#textarea_module_3");
    video_3 = $("#module_3");

    button_video_4 = $("#button_module_4");
    textarea_video_4 = $("#textarea_module_4");
    video_4 = $("#module_4");

    button_video_5 = $("#button_module_5");
    textarea_video_5 = $("#textarea_module_5");
    video_5 = $("#module_5");

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
    

    $(button_video_1).click(
        function(event){
            
            var message = 'Ingrese la url del video';
            bootbox.prompt(message, function(result){
                console.log("video init");
                if(result!=null){
                    var html = $(textarea_video_1).html();                
                    html = html +result+ "<br/>";
                    $(textarea_video_1).html(html);
                    var data = $(video_1).val();
                    data = data+","+result;
                    $(video_1).val(data);
                }
                console.log("video finish");
            });
            try{
                event.preventDefault();
            }catch(ex){}            
        }
    );


    $(button_video_2).click(
        function(event){
            
            var message = 'Ingrese la url del video';
            bootbox.prompt(message, function(result){
                console.log("video init");
                if(result!=null){
                    var html = $(textarea_video_2).html();                
                    html = html +result+ "<br/>";
                    $(textarea_video_2).html(html);
                    var data = $(video_2).val();
                    data = data+","+result;
                    $(video_2).val(data);
                }
                console.log("video finish");
            });
            try{
                event.preventDefault();
            }catch(ex){}            
        }
    );

    $(button_video_3).click(
        function(event){
            
            var message = 'Ingrese la url del video';
            bootbox.prompt(message, function(result){
                console.log("video init");
                if(result!=null){
                    var html = $(textarea_video_3).html();                
                    html = html +result+ "<br/>";
                    $(textarea_video_3).html(html);
                    var data = $(video_3).val();
                    data = data+","+result;
                    $(video_3).val(data);
                }
                console.log("video finish");
            });
            try{
                event.preventDefault();
            }catch(ex){}            
        }
    );

    $(button_video_4).click(
        function(event){
            
            var message = 'Ingrese la url del video';
            bootbox.prompt(message, function(result){
                console.log("video init");
                if(result!=null){
                    var html = $(textarea_video_4).html();                
                    html = html +result+ "<br/>";
                    $(textarea_video_4).html(html);
                    var data = $(video_4).val();
                    data = data+","+result;
                    $(video_4).val(data);
                }
                console.log("video finish");
            });
            try{
                event.preventDefault();
            }catch(ex){}            
        }
    );

    $(button_video_5).click(
        function(event){
            
            var message = 'Ingrese la url del video';
            bootbox.prompt(message, function(result){
                console.log("video init");
                if(result!=null){
                    var html = $(textarea_video_5).html();                
                    html = html +result+ "<br/>";
                    $(textarea_video_5).html(html);
                    var data = $(video_5).val();
                    data = data+","+result;
                    $(video_5).val(data);
                }
                console.log("video finish");
            });
            try{
                event.preventDefault();
            }catch(ex){}            
        }
    );

    editor("description");



  }
);

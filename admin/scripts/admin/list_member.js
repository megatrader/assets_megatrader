var controller;
var url_datatable;
var url_datatable_fields;
var url_remove;
var datatable;
var datatable_object;

function remove(id){
    $.get(
          url_remove+"/"+id,
          function(data){
              datatable_object.ajax.reload();
          }
    );
}

function level(user_id,user_name){
    for(var i =1;i<=11;i++){
      $("#"+level_data+i).attr("data-url","");
      $("#"+level_number+i).attr("data-url","0");
      $($("#"+level_progress+i).find(".progress-bar")).css("width","0%");
      $("#"+level_title+i).html("<strong>0%</strong>");
    }
    $("#sponsor_base").html("Niveles de : "+user_name);
    get_members(user_id,1);
}

$(
  function(){
    controller = $("#controller").attr("data-url");
    url_datatable = $("#url_datatable_"+controller).attr("data-url");
    url_remove = $("#url_remove").attr("data-url");
    url_datatable_fields = $("#url_datatable_fields_"+controller).attr("data-url");
    datatable = $("#datatable_"+controller);
    $.get(
        url_datatable_fields,
        function(data){
            try{
              data = $.parseJSON(data);
            }catch(ex){}
            var html_fields = "";
            for(var i in data){
                html_fields = html_fields + "<th>";
                html_fields = html_fields + data[i];
                html_fields = html_fields + "</th>";
            }
            var html_table = '<thead><tr>';
            html_table = html_table + html_fields;
            html_table = html_table + '</tr></thead>';
            html_table = html_table + '<tfoot><tr>';
            html_table = html_table + html_fields;
            html_table = html_table + '</tr></tfoot>';
            html_table = html_table + '<tbody>';
            html_table = html_table + '</tbody>';

            $(datatable).html(html_table);

            datatable_object=$(datatable).DataTable(
              {
                'ajax': url_datatable,
                "order": [[ 0, "asc" ]]
              }
            );
            $(datatable).addClass('table table-striped table-bordered');

            $('[data-toggle="tooltip"]').tooltip(); 
        }
    );

  }
);




// niveles de genealogia

var url_genealogy='';
var level_data = 'level_users_';
var level_quantity = 'level_quantity_';
var level_number = 'level_number_';
var level_title = "title_level_";
var level_progress = 'progress_level_';
var level_counter = 'level_counter_';
var url_user_id = '';
var url_data_user='';
var datatable_subnivel='';

var level_users_0 = '';

function view_level(level){
    $($(datatable_subnivel).find("#body")).html('');
    $(datatable_subnivel).data("level",level);
    var data_genealogy = $("#"+level_data+level).attr("data-url").split(",");
    var user_id = '';
    for(var i in data_genealogy){
        if(data_genealogy[i]!=null){
            user_id = data_genealogy[i];
        }else{
            user_id = '';
        }
        if(user_id.length>0){
            $.get(
                url_data_user+user_id,
                function(data){
                    try{
                        data = $.parseJSON(data);
                    }catch(ex){}
                    //console.log(data);
                    var user = '';
                    if(data['data']['user']!=null){
                        user = data['data']['user'];
                    }    
                    var sponsor = '';
                    if(data['data']['sponsor']!=null){
                        sponsor = data['data']['sponsor'];
                    }    
                    console.log("user: "+user);
                    var html = $($(datatable_subnivel).find("#body")).html();
                    //console.log(html);
                    var level = $(datatable_subnivel).data("level");
                    html = html + '<tr>';
                    html = html + '<td width="20%">';
                    html = html + level;                
                    html = html + '</td>';
                    html = html + '<td width="40%">';
                    html = html + user;                
                    html = html + '</td>';
                    html = html + '<td width="40%">';
                    html = html + sponsor;                
                    html = html + '</td>';
                    html = html + '</tr>';
                    $($(datatable_subnivel).find("#body")).html(html);
                   
                }
            );
        }        
    }

    $("#modal_members").modal("show");
}

function get_members(id,level){
    if(id.length>0){
        $.post(
            url_genealogy+id,
            function(data){
                try{
                    data = $.parseJSON(data);
                }catch(ex){}
                var genealogy = '';
                var user_id = '';
                var users = new Array();
                for(var i in data['data']){
                    user_id = '';
                    if(data['data'][i]['user_id']!=null){
                        user_id = data['data'][i]['user_id'];                    
                        users.push(user_id);
                        if(level<=10){
                            //console.log(user_id);
                            get_members(user_id,parseInt(level+1));
                        }                
                    }                
                }
                var data_genealogy = $("#"+level_data+level).attr("data-url").split(",");
                for(var j in data_genealogy){
                    if(data_genealogy[i]!=null){
                        users.push(data_genealogy[i]);
                    }                
                }
                genealogy=users.join(",");
                $("#"+level_data+level).attr("data-url",genealogy);
                var count = 0;
                var quantity=0;
                for(var i in users){
                    if(users[i]!='0' && users[i].length>0){
                        count++;
                    }
                }
                $("#"+level_number+level).attr("data-url",count);
                try{
                    quantity = $("#"+level_quantity+level).attr("data-url");
                }catch(ex){}
                
                $("#"+level_data+level).data("percent",parseInt(count*100/quantity));
                console.log("cantidad: "+ parseInt(count));
                try{
                    $("#"+level_counter+level).html('<h4>'+parseInt(count)+'</h4>');
                }catch(ex){}                
                $("#"+level_title+level).html("<strong>"+$("#"+level_data+level).data("percent")+"%</strong>");
                $($("#"+level_progress+level).find(".progress-bar")).css("width",$("#"+level_data+level).data("percent")+"%");
                $($("#"+level_progress+level).find(".progress-bar")).attr("aria-valuenow",$("#"+level_data+level).data("percent"));
            }
        );
    }    
}

$(
    function(){
        url_genealogy = $("#url_genealogy").attr("data-url");
        url_user_id = $("#url_user_id").attr("data-url");
        url_data_user = $("#url_data_user").attr("data-url");
        datatable_subnivel = $("#datatable_subnivel");


        $("#datatable_members").DataTable(
            {        
                "paging":   false,
                "ordering": true,
                "info":     false,
                "order": [[ 0, "asc" ]]
            }
        );


    }
);
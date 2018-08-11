var controller;
var url_datatable;
var url_datatable_fields;
var url_remove;
var datatable;
var datatable_object;

var url_enable;
var url_disable;
var url_voucher;

function remove(id){
    $.get(
          url_remove+"/"+id,
          function(data){
              datatable_object.ajax.reload();
          }
    );
}

function enable(id){
  $.get(
        url_enable+"/"+id,
        function(data){
            datatable_object.ajax.reload();
        }
  );
}

function disable(id){
  $.get(
        url_disable+"/"+id,
        function(data){
            datatable_object.ajax.reload();
        }
  );
}

function voucher(id){
  $.get(
        url_voucher+"/"+id,
        function(data){
            try{
              data = $.parseJSON(data);
            }catch(ex){}
            var image = '';
            if(data['image']!=null){
              image = data['image'];
              $("#image_voucher").attr("src",image);
              $("#modal_voucher").modal("show");
            }else{
              bootbox.alert("BTC: "+data['btc']);
            }
        }
  );
}

$(
  function(){
    controller = $("#controller").attr("data-url");
    url_datatable = $("#url_datatable_"+controller).attr("data-url");
    url_remove = $("#url_remove").attr("data-url");
    url_datatable_fields = $("#url_datatable_fields_"+controller).attr("data-url");
    datatable = $("#datatable_"+controller);
    url_disable = $("#url_disable").attr("data-url");
    url_enable = $("#url_enable").attr("data-url");
    url_voucher = $("#url_voucher").attr("data-url");
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
                'ajax': url_datatable
              }
            );
            $(datatable).addClass('table table-striped table-bordered');
        }
    );

  }
);

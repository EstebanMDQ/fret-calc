/*global define */
define([
    "jquery",
    "jqueryMobile",
    "handlebars"
    ], function ($) {


    $(function(){
        $('#form_options').on('submit', function(ev){
            var c = 17.817,
            s = $('#id_scale').val(),
            f = $('#id_frets').val(),
            // tpl = Handlebars.compile($('#row-template').html()),
            tpl_list = Handlebars.compile($('#list-template').html()),
            list = [],
            r = s;


            for( var i=1; i<=f; i++){
                var len1 = s-r,
                len2 = r/c;
                r -= len2;
                list.push({
                    'pos': i.toFixed(0),
                    'len1': len1.toFixed(3),
                    'len2': len2.toFixed(3),
                });
            }

            // $('#id_scalelist').show().append(list);
            $('#list-container').html('').append(tpl_list({'rows':list}));
            // $('#print-btn').show();
            // $(this).parents('data-role[collapsible]').collapse();
            $('#list-container ul').listview("refresh");
            ev.preventDefault();
            console.log('prevented');
            return false;
        });
        $('#print-btn').on('click', function(){
            // $(this).hide();
            window.print();
        });

    });


});

var rowCount = 0;
function update() {
  var steps=parseInt(document.getElementById('steps').value);
  var minutes=parseInt(document.getElementById('minutes').value);
  var loc=parseInt(document.getElementById('loc').value);
  var object=parseInt(document.getElementById('object').value);
  var scoe=parseInt(document.getElementById('scoe').value);
  var hours=parseInt(document.getElementById('hours').value);

  var subtotal=document.getElementById('subtotal');
  if (minutes>0&&steps>0&&loc>0&&hours>0) {
  subtotal.value= steps*(60/minutes)*loc*hours;
}
}
$(document).ready(function() {
    $(".add-row").click(function() {
        var field = $("#fieldDef").val();
        var value = $("#valueDef").val();
        $(".tracker")
            .append($('<tr>')
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'checkbox')
                        .attr('name', 'record')))
                .append($('<td>')
                    .append($('<form>')
                        .append($('<input>')
                            .attr('type', 'text')
                            .attr('name', 'field')
                            .attr('placeholder', '# of steps'))))
                .append($('<td>')
                    .append($('<form>')
                        .append($('<input>')
                            .attr('type', 'text')
                            .attr('name', 'field')
                            .attr('placeholder', 'minutes'))))
                .append($('<td>')
                    .append($('<form>')
                        .append($('<input>')
                            .attr('type', 'text')
                            .attr('name', 'field')
                            .attr('placeholder', '# of loc.'))))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'checkbox')
                        .attr('name', 'object')))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'checkbox')
                        .attr('name', 'scoe')))
                .append($('<td>')
                    .append($('<form>')
                        .append($('<input>')
                            .attr('type', 'text')
                            .attr('name', 'field')
                            .attr('placeholder', 'hours'))))

            );
    });

    // Find and remove selected table rows
    $(".delete-row").click(function() {
        $("table tbody").find('input[name="delete"]').each(function() {
            if ($(this).is(":checked")) {
                $(this).parents("tr").remove();
            }
            // else {
            //   $('#table tr:last').remove();
            // }
        });
    });

    $(".toggle").click(function() {
        $(".settings").slideToggle();
    });

});

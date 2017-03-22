function update(row) {
    var stepsPlace = 'steps' + row;
    var minutesPlace = 'minutes' + row;
    var locPlace = 'loc' + row;
    var objectPlace = 'object' + row;
    var scoePlace = 'scoe' + row;
    var hoursPlace = 'hours' + row;
    var subtotalPlace = 'subtotal' + row;

    var steps = parseInt(document.getElementById(stepsPlace).value);
    var minutes = parseInt(document.getElementById(minutesPlace).value);
    var loc = parseInt(document.getElementById(locPlace).value);
    var object = document.getElementById(objectPlace);
    var scoe = document.getElementById(scoePlace).value;
    var hours = parseInt(document.getElementById(hoursPlace).value);

    var subtotal = document.getElementById(subtotalPlace);
    if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
        subtotal.value = steps * (60 / minutes) * loc * hours;
    }
}
$(document).ready(function() {
    var rowCount=0;
    $(".add-row").click(function() {
        rowCount++;
        $(".tracker")
            .append($('<tr>')
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'checkbox')
                        .attr('id','delete'+rowCount)
                        .attr('onchange','update('+rowCount+');')
                        .attr('name', 'delete')))
                .append($('<td>')
                    .append($('<form>')
                        .append($('<input>')
                            .attr('type', 'text')
                            .attr('id','steps'+rowCount)
                            .attr('onchange','update('+rowCount+');')
                            .attr('name', 'steps')
                            .attr('placeholder', '# of steps'))))
                .append($('<td>')
                    .append($('<form>')
                        .append($('<input>')
                            .attr('type', 'text')
                            .attr('id','minutes'+rowCount)
                            .attr('onchange','update('+rowCount+');')
                            .attr('name', 'minutes')
                            .attr('placeholder', 'minutes'))))
                .append($('<td>')
                    .append($('<form>')
                        .append($('<input>')
                            .attr('type', 'text')
                            .attr('id','loc'+rowCount)
                            .attr('onchange','update('+rowCount+');')
                            .attr('name', 'loc')
                            .attr('placeholder', '# of loc.'))))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'checkbox')
                        .attr('id','object'+rowCount)
                        .attr('onchange','update('+rowCount+');')
                        .attr('name', 'object')))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'checkbox')
                        .attr('id','scoe'+rowCount)
                        .attr('onchange','update('+rowCount+');')
                        .attr('name', 'scoe')))
                .append($('<td>')
                    .append($('<form>')
                        .append($('<input>')
                            .attr('type', 'text')
                            .attr('id','hours'+rowCount)
                            .attr('onchange','update('+rowCount+');')
                            .attr('name', 'hours')
                            .attr('placeholder', 'hours'))))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'text')
                        .attr('id','subtotal'+rowCount)
                        .attr('name', 'subtotal')
                        .attr('readonly','true')
                        .attr('placeholder', 'subtotal')))


            );
    });

    // Find and remove selected table rows
    $(".delete-row").click(function() {
        $("table tbody").find('input[name="delete"]').each(function() {
            if ($(this).is(":checked")) {
                $(this).parents("tr").remove();
            }
            // else {
            //     alert('Attn: Row must be selected to delete.');
            // }
        });
    });

    $(".toggle").click(function() {
        $(".settings").slideToggle();
    });

});

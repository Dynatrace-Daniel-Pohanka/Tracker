function multiRadio() {

}
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
    var object = document.getElementById(objectPlace).checked;
    var scoe = document.getElementById(scoePlace).checked;
    var hours = parseInt(document.getElementById(hoursPlace).value);

    var objOn = 1.0;
    var objOff = 0.2;
    var scoeOn = 1.3;

    var subtotal = document.getElementById(subtotalPlace);


    switch ($("input[type='radio'][name='optradio']:checked").val()) {
        case "dayRad":
            document.getElementById('multi').setAttribute('placeholder','Days');
            if (object === true && scoe === true) {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = steps * (60 / minutes) * loc * hours * objOn * scoeOn;
                }
            } else if (object === true && scoe === false) {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = steps * (60 / minutes) * loc * hours * objOn;
                }
            } else if (object === false && scoe === true) {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = steps * (60 / minutes) * loc * hours * objOff * scoeOn;
                }
            } else {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = steps * (60 / minutes) * loc * hours * objOff;
                }
            }
            break;
        case "monthRad":
            document.getElementById('multi').setAttribute('placeholder','Months');
            if (object === true && scoe === true) {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = 30.4 * steps * (60 / minutes) * loc * hours * objOn * scoeOn;
                }
            } else if (object === true && scoe === false) {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = 30.4 * steps * (60 / minutes) * loc * hours * objOn;
                }
            } else if (object === false && scoe === true) {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = 30.4 * steps * (60 / minutes) * loc * hours * objOff * scoeOn;
                }
            } else {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = 30.4 * steps * (60 / minutes) * loc * hours * objOff;
                }
            }
            break;
        case "yearRad":
            document.getElementById('multi').setAttribute('placeholder','Years');
            if (object === true && scoe === true) {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = 365 * steps * (60 / minutes) * loc * hours * objOn * scoeOn;
                }
            } else if (object === true && scoe === false) {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = 365 * steps * (60 / minutes) * loc * hours * objOn;
                }
            } else if (object === false && scoe === true) {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = 365 * steps * (60 / minutes) * loc * hours * objOff * scoeOn;
                }
            } else {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = 365 * steps * (60 / minutes) * loc * hours * objOff;
                }
            }
            break;
    }

    // if (object === true && scoe === true) {
    //     if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
    //         subtotal.value = steps * (60 / minutes) * loc * hours * objOn * scoeOn;
    //     }
    // } else if (object === true && scoe === false) {
    //     if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
    //         subtotal.value = steps * (60 / minutes) * loc * hours * objOn;
    //     }
    // } else if (object === false && scoe === true) {
    //     if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
    //         subtotal.value = steps * (60 / minutes) * loc * hours * objOff * scoeOn;
    //     }
    // } else {
    //     if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
    //         subtotal.value = steps * (60 / minutes) * loc * hours * objOff;
    //     }
    // }
}

$(document).ready(function() {
    var rowCount = 0;
    $(".add-row").click(function() {
        rowCount++;
        $(".tracker")
            .append($('<tr>')
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'checkbox')
                        .attr('id', 'delete' + rowCount)
                        .attr('onchange', 'update(' + rowCount + ');')
                        .attr('name', 'delete')))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'text')
                        .attr('id', 'steps' + rowCount)
                        .attr('onchange', 'update(' + rowCount + ');')
                        .attr('name', 'steps')
                        .attr('placeholder', '# of steps')))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'text')
                        .attr('id', 'minutes' + rowCount)
                        .attr('onchange', 'update(' + rowCount + ');')
                        .attr('name', 'minutes')
                        .attr('placeholder', 'minutes')))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'text')
                        .attr('id', 'loc' + rowCount)
                        .attr('onchange', 'update(' + rowCount + ');')
                        .attr('name', 'loc')
                        .attr('placeholder', '# of loc.')))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'checkbox')
                        .attr('id', 'object' + rowCount)
                        .attr('checked', 'true')
                        .attr('onchange', 'update(' + rowCount + ');')
                        .attr('name', 'object')))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'checkbox')
                        .attr('id', 'scoe' + rowCount)
                        .attr('onchange', 'update(' + rowCount + ');')
                        .attr('name', 'scoe')))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'text')
                        .attr('id', 'hours' + rowCount)
                        .attr('onchange', 'update(' + rowCount + ');')
                        .attr('name', 'hours')
                        .attr('placeholder', 'hours')))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'text')
                        .attr('id', 'subtotal' + rowCount)
                        .attr('name', 'subtotal')
                        .attr('readonly', 'true')
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

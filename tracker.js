var totalRowCount = 0;

function multiRadio() {
    var multiplier = parseInt(document.getElementById('multi').value);
    if (multiplier > 0) {
        for (var i = 0; i < $('#calculator tr').length; i++) {
            update(i, multiplier);
        }
    } else {

        for (var j = 0; j < $('#calculator tr').length; j++) {
            update(j, 1);
        }
    }
}

function update(row, multiplier) {

    var checkMulti = parseInt(document.getElementById('multi').value);

    if (checkMulti > 0) {
        multiplier = checkMulti;
    }
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
    var scoeOn = 1.2;

    var subtotal = document.getElementById(subtotalPlace);


    switch ($("input[type='radio'][name='optradio']:checked").val()) {
        case "dayRad":
            document.getElementById('multi').setAttribute('placeholder', '# of days');
            if (object === true && scoe === true) {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = steps * (60 / minutes) * loc * hours * objOn * scoeOn * multiplier;
                }
            } else if (object === true && scoe === false) {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = steps * (60 / minutes) * loc * hours * objOn * multiplier;
                }
            } else if (object === false && scoe === true) {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = steps * (60 / minutes) * loc * hours * objOff * scoeOn * multiplier;
                }
            } else {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = steps * (60 / minutes) * loc * hours * objOff * multiplier;
                }
            }
            break;
        case "monthRad":
            document.getElementById('multi').setAttribute('placeholder', '# of months');
            if (object === true && scoe === true) {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = 30.4 * steps * (60 / minutes) * loc * hours * objOn * scoeOn * multiplier;
                }
            } else if (object === true && scoe === false) {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = 30.4 * steps * (60 / minutes) * loc * hours * objOn * multiplier;
                }
            } else if (object === false && scoe === true) {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = 30.4 * steps * (60 / minutes) * loc * hours * objOff * scoeOn * multiplier;
                }
            } else {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = 30.4 * steps * (60 / minutes) * loc * hours * objOff * multiplier;
                }
            }
            break;
        case "yearRad":
            document.getElementById('multi').setAttribute('placeholder', '# of years');
            if (object === true && scoe === true) {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = 365 * steps * (60 / minutes) * loc * hours * objOn * scoeOn * multiplier;
                }
            } else if (object === true && scoe === false) {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = 365 * steps * (60 / minutes) * loc * hours * objOn * multiplier;
                }
            } else if (object === false && scoe === true) {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = 365 * steps * (60 / minutes) * loc * hours * objOff * scoeOn * multiplier;
                }
            } else {
                if (minutes > 0 && steps > 0 && loc > 0 && hours > 0) {
                    subtotal.value = 365 * steps * (60 / minutes) * loc * hours * objOff * multiplier;
                }
            }
            break;
    }

}

$(document).ready(function() {

    $(".add-row").click(function() {
        totalRowCount++;
        $("#tracker")
            .append($('<tr>')
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'checkbox')
                        .attr('id', 'delete' + totalRowCount)
                        .attr('onchange', 'update(' + totalRowCount + ',1);')
                        .attr('name', 'delete')))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'text')
                        .attr('id', 'testname' + totalRowCount)
                        .attr('onchange', 'update(' + totalRowCount + ',1);')
                        .attr('placeholder', 'name')
                        .attr('name', 'testname')))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'text')
                        .attr('id', 'steps' + totalRowCount)
                        .attr('onchange', 'update(' + totalRowCount + ',1);')
                        .attr('name', 'steps')
                        .attr('placeholder', '# of steps')))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'text')
                        .attr('id', 'minutes' + totalRowCount)
                        .attr('onchange', 'update(' + totalRowCount + ',1);')
                        .attr('name', 'minutes')
                        .attr('placeholder', 'minutes')))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'text')
                        .attr('id', 'loc' + totalRowCount)
                        .attr('onchange', 'update(' + totalRowCount + ',1);')
                        .attr('name', 'loc')
                        .attr('placeholder', '# of loc.')))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'checkbox')
                        .attr('id', 'object' + totalRowCount)
                        .attr('checked', 'true')
                        .attr('onchange', 'update(' + totalRowCount + ',1);')
                        .attr('name', 'object')))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'checkbox')
                        .attr('id', 'scoe' + totalRowCount)
                        .attr('onchange', 'update(' + totalRowCount + ',1);')
                        .attr('name', 'scoe')))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'text')
                        .attr('id', 'hours' + totalRowCount)
                        .attr('onchange', 'update(' + totalRowCount + ',1);')
                        .attr('name', 'hours')
                        .attr('placeholder', 'hours')))
                .append($('<td>')
                    .append($('<input>')
                        .attr('type', 'text')
                        .attr('id', 'subtotal' + totalRowCount)
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
                totalRowCount--;
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

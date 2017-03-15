var rowCount = 0;
$(document).ready(function() {
    $(".add-row").click(function() {
        var field = $("#fieldDef").val();
        var value = $("#valueDef").val();
        $("table tbody")
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
                            .attr('placeholder', 'test')
                            .attr('value', field))))
                .append($('<td>')
                    .append($('<form>')
                        .append($('<input>')
                            .attr('type', 'text')
                            .attr('name', 'field')
                            .attr('placeholder', 'test2')
                            .attr('value', value))))
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
        $("#settings").slideToggle();
    });

});

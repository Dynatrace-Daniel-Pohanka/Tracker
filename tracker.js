var rowCount = 0;
$(document).ready(function() {
    $(".add-row").click(function() {
        rowCount++;
        var field=$("#fieldDef").val();
        var value=$("#valueDef").val();
        var markup = "<tr><td><input type='checkbox' name='record'></td><td><form><input type='text' name=field" + rowCount + " placeholder=test value="+field+"></form></td><td><form><input type='text' name=value" + rowCount + " placeholder=test2 value="+value+"></form></td></tr>";
        $("table tbody").append(markup);
    });

    // Find and remove selected table rows
    $(".delete-row").click(function() {
        $("table tbody").find('input[name="record"]').each(function() {
            if ($(this).is(":checked")) {
                $(this).parents("tr").remove();
            }
        });
    });
});

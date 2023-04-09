{
    let labelList = $('#labels_list');
    labelList.hide();
    labels_holder = $('#labels_holder');
    let x = document.getElementById("labels_holder");
    x.addEventListener('click', function (e) {
        labelList.show();
    })

    document.getElementById("new_label_add_btn").addEventListener('click', function (e) {
        let val=$("#new_label_add").val();
        if (val.length > 0) {
            $("#labels_list").prepend(`
                <input type="checkbox" name="labels" id=${val} value=${val} >${val}
                `)
        }

    })
}
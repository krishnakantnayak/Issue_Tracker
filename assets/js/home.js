{
    let x = document.getElementById("searchtext");
    let searchform = $('#search-form');

    function render(data) {
        let htmldata = '';
        for (i of data) {
            htmldata += `
            <li>
                <a href="/show-project/?id=${i._id}">
                    <span>
                        ${i.Name}
                    </span>
                    <span>
                        ${i.Author}
                    </span>
                </a>
            </li>`
        }
        console.log(htmldata);
        $('#projects_list').innerHTML=htmldata;
    }

    searchform.submit(async function (e) {
        e.preventDefault();
        var data = [];
        await $.ajax({
            type: 'post',
            url: '/',
            // contentType: "application/json; charset=utf-8",
            data: searchform.serialize(),
            success: function (rcvdData) {
                data = rcvdData['data']['list'];
                // console.log(rcvdData);
            },
            error: function (err) {
                console.log(err);
            }
        });
        let name = $('#searchName').val();
        let labels = $('#searchLabel').val();
        let author = $('#searchAuthor').val();
        let rdata = [];
        for (i of data) {
            if ((i.Author == author || author == '') && (i.Name == name || name == '') && (labels == '')) {
                rdata.push(i);
                console.log(i);
            }
        }
        let htmldata = '';
        for (i of rdata) {
            htmldata += `
            <li>
                <a href="/show-project/?id=${i._id}">
                    <span>
                        ${i.Name}
                    </span>
                    <span>
                        ${i.Author}
                    </span>
                </a>
            </li>`
        }
        console.log(htmldata);
        document.getElementById('projects_list').innerHTML=htmldata;
    });

}
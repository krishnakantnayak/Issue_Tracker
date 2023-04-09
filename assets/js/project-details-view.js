{
    let x = document.getElementById("searchtext");
    let searchform = $('#search-form');

    
    function subset(qlabel,Label){
        return qlabel.every(val => Label.includes(val));
    }


    searchform.submit(async function (e) {
        // console.log('inside from submit');
        e.preventDefault();
        var rdata = [];
        await $.ajax({
            type: 'post',
            url: '/show-project',
            // contentType: "application/json; charset=utf-8",
            data: searchform.serialize(),
            success: function (rcvdData) {
                rdata = rcvdData['data'];
                // console.log(rdata);
            },
            error: function (err) {
                console.log(err);
            }
        });

        let ihtml='';
        let title=$("#searchName").val();
        let author=$("#searchAuthor").val();
        let labelsArray=$('input[name="labels"]:checked').serializeArray();
        let labels=[];
        for(i of labelsArray){
            labels.push(i['value'])
        }
        // console.log(labels);
        for( i of rdata){
            console.log(i['Labels']);
            if((i.Title==title || title=='')&&(i.Author==author || author=='')&&(labels.length==0 || subset(labels,i['Labels']))){
                ihtml+=`.
                <li>
            <div>
                <span>Issue Name: ${i.Title} <br> Author: ${i.Author} </span> <br>
                IssueLabels: ${i.Labels} <br>
                Description: ${i['Description']}
            </div>
            </li>
            `
            }
            
        }
        document.getElementById('issuelist').innerHTML=ihtml;
    });

}
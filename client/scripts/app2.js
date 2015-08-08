$(document).ready(function (){
    $("#inputForm").submit(function(event){
        event.preventDefault();
        var formData = $("#inputForm").serialize();
        console.log(formData);
        $.ajax({
            type: "POST",
            url: "/post",
            data: formData,
            success: function(){
                getData();

            }
        });
    });

    //with .data its 'kittyfoofoo
    //with the attribute its data-kittyfoofoo
    $('#results').on('click', 'button', function(){
        //var $el =$(this)
        //hard mode
        $.ajax({
            type: 'DELETE',
            url: '/post/'+ $(this).data('id'),
            success: function() {
                console.log("He's dead Jim!")

            },
            //XHR: avoided through libraries and frameworks
            error: function(xhr, status){
                alert("Error: ", status )
            },
            complete: function(){
                console.log("DELETE COMPLETE!!!");
            }
        });
        $(this).parent().remove();
    })
    getData();
});

function getData(){
    $.ajax({
        type:"GET",
        url: "/post",
        success: function(data){
            console.log(data)
            $.each(data, function(){
                //$('#results').append('<p>'+this.name + "</p>");
                updateContainer(data);
            });

        }
    })
}

function updateContainer(data){
    $('#results').empty();
    for (var i=0; i<data.length;i++){
        var d = data[i].date
        var n = d.toLocaleString('en-us');
        $('#results').append("<div></div>")
        var $el = $('#results').children().last();
        $el.append("<p>" + data[i].username +"<br>" +data[i].message + "<br>"+"Time posted: " +n+"</p>");
        $el.append("<button data-id="+data[i]._id +">DELETE</button>");


    }
}


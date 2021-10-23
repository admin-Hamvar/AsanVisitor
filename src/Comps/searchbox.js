<form>
  <label>Search:</label>
  <input type="text" id="myText"> </input>
  <button id="search" type="button">Search</button>
</form>

function markSelection(){
    clearSelection()
    var myText = $('#myText').val();
    var regExp = new RegExp(myText,'g')
    $('p').each(function(){
        var html = $(this).html();
        var newHtml = html.replace(regExp,'<mark>'+myText+'</mark>');
        $(this).html(newHtml);
    })
}
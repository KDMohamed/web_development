$(document).ready(function(){
    $("input:button").click(function(){
        var row =$("input:text").val();
        var s ;
        for(i=0;i<row-1;i++)
        {   
            s=i+1;           
            $(`<tr>
                     <td><p>`+s+`</p></td>
                     <td><input type="text" name="" id=""></td>
                     <td><input type="text" name="" id=""></td>
                     <td><input type="text" name="" id=""></td>
                    <td>
                        <input type="button" value="Editer">
                        <input type="button" value="Supprimer">
                    </td>
                </tr>`).appendTo($("tbody"));            
        }
    });

});
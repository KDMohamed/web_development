/*

    _                                  _       _   
   (_)                                (_)     | |  
    _  __ ___   ____ _   ___  ___ _ __ _ _ __ | |_ 
   | |/ _` \ \ / / _` | / __|/ __| '__| | '_ \| __|
   | | (_| |\ V / (_| | \__ \ (__| |  | | |_) | |_ 
   | |\__,_| \_/ \__,_| |___/\___|_|  |_| .__/ \__|
  _/ |                                  | |        
 |__/                                   |_|        


*/
// function verifier(elt){
//     if(elt.value=="") {
//         elt.className="erreur";
//         span=document.createElement("span"); 
//         span.innerText="coche le "+elt.id;
//         form.insertBefore(span,elt.nextSibling);
//     }
//     else {
//         elt.className="";
//         span.innerText="";
//     }
    
// }
// function OnLoad(){
//      inp = document.forms[0].elements;
//       spa = document.getElementsByTagName("span");  
      
//       form=document.getElementById("form");
//     for(i=3;i<14;i++)
//     {
//         if(i==10||i==11||i==12)
//             continue;
//         else{
//             inp[i].onfocus = function(){
//                  this.className="focus";
//                  if(!inp[0].checked&&!inp[1].checked&&!inp[2].checked)
//                  spa[0].innerText="forget to chose";
//                  else 
//                  spa[0].innerText="*";
//             }
//             //inp[i].onblur = "verifier()";
//             inp[i].setAttribute("onblur","verifier(this)");
//         }
        
//     }
    
    
// }
// function valide(){
//     if(!inp[14].checked)
//     alert("cochez svp");
//     for(i=3;i<14;i++){
//         if(i==10||i==11||i==12)
//             continue;
//         verifier(inp[i]);
//     }
// }
/*

       _  ____                        
      | |/ __ \                       
      | | |  | |_   _  ___ _ __ _   _ 
  _   | | |  | | | | |/ _ \ '__| | | |
 | |__| | |__| | |_| |  __/ |  | |_| |
  \____/ \___\_\\__,_|\___|_|   \__, |
                                 __/ |
                                |___/ 

*/
$(document).ready(function(){
    $("input[type='text'],select,textarea").focus(function(){
        $(this).addClass("focus");
    });
    $("input[type='text'],select,textarea").not("#tele,#fax,#mobile").blur(function(){
       if( $(this).val()=="")
            $(this).addClass("erreur");
       else
            $(this).removeClass();
    });
    $("#tele,#fax,#mobile").blur(function(){
       
             $(this).removeClass();
    });
    $("#button").click(function(){
       $(".clo").remove() ; 
        if(!$("[name='civilite']")[0].checked&&!$("[name='civilite']")[1].checked&&!$("[name='civilite']")[2].checked )
        {
            $("#cloo").hide();
            $("#Mme").after($("<span id='cloo'></span>").text("checkhhhhhhhhh"));
        }
        else 
        $("#cloo").hide();
       
            var j = $("input[type='text'],select,textarea").not("#tele,#fax,#mobile");
             j.each(function(){
            if($(this).val()=="")
               {                 
                    $(this).after($("<span class='clo'></span>").text("check "));
                }
            else
            $(this).next("span").remove(); }); 
            var d=$('input[type=checkbox]');
            if(!d.is(':checked'))
                $("#lab").after($("<span class='clo'></span>").text("check "));
            else 
                $("#lab").next("span").remove();    
    });
});
/*


██████╗ ██╗   ██╗     ██╗  ██╗ █████╗ ██████╗ ██████╗  █████╗ ███╗   ██╗██╗
██╔══██╗╚██╗ ██╔╝     ██║ ██╔╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗████╗  ██║██║
██████╔╝ ╚████╔╝      █████╔╝ ███████║██║  ██║██║  ██║███████║██╔██╗ ██║██║
██╔══██╗  ╚██╔╝       ██╔═██╗ ██╔══██║██║  ██║██║  ██║██╔══██║██║╚██╗██║██║
██████╔╝   ██║███████╗██║  ██╗██║  ██║██████╔╝██████╔╝██║  ██║██║ ╚████║██║
╚═════╝    ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝
                                                                           

                                      

*/
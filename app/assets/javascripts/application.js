// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
var Raju = [];
function raju(a)
{
 Raju.push(a);
//alert(Raju);
var len=Raju.length;
//alert(len);
var tot=0;
    
    for(var i=0;i<len;i++)
    {
  //var text = parseInt(Raju[i]);

      tot= parseInt(Raju[i]) + tot;
    
    }
    var arg=tot/len;
var per=(40*arg)/100
    $('#result_of_normal_user').html(per);
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}



// navbar animation adding and removing the class
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('#dynamic').addClass('navbar_fixed');
    } else {
        $('#dynamic').removeClass('navbar_fixed');
    }
});



// api using fetch for all death active etc...

const url = "https://api.rootnet.in/covid19-in/stats/latest";


async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    const total = data.data['unofficial-summary'][0].total;
    const active = data.data['unofficial-summary'][0].active;
    const recovered = data.data['unofficial-summary'][0].recovered;
    const death = data.data['unofficial-summary'][0].deaths;
    document.getElementById("confirmed").textContent = total;
    document.getElementById("active").textContent = active;
    document.getElementById("recovered").textContent = recovered;
    document.getElementById("deaths").textContent = death;

    var d = new Date();
    document.getElementById("fyear").textContent = d.getFullYear();
    document.getElementById("fmonth").textContent = d.getMonth();
    document.getElementById("fdate").textContent = d.getDate();

    var n = d.toLocaleTimeString();
    document.getElementById("ftime").textContent = n;
}

getData();




$(document).ready(function(){




$("button").click(function(){
  var buttonValue=$(this).attr("data-filter");

  if(buttonValue=="*"){
    $(".police").show("1000");
      $(".doctor").show("1000");
        $(".worker").show("1000");
        $(".cw-container").removeClass("conatainer-padding2");
        $(".cw-container").removeClass("container-padding");


  }
else if(buttonValue==".doctor"){
  $(".doctor").show("1000");
  $(".element-item").not(".doctor").hide("2000");
  $(".cw-container").addClass("container-padding");
}
else if(buttonValue==".police")
{
  $(".police").show("1000");
  $(".element-item").not(".police").hide("2000");
  $(".cw-container").addClass("container-padding");
  $(".cw-container").addClass("container-padding2");
}
  else if(buttonValue==".worker"){
    $(".worker").show("1000");
    $(".element-item").not(".worker").hide("2000");
    $(".cw-container").addClass("container-padding");

  }


});


});

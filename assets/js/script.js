const konten = document.querySelector('.tab-content')
let url = ''
$(document).ready(function(){
  $('.nav').on('click', function(e){
    if (e.target.hash == "#table") {
      url = 'latihan-table.html'
    }else if(e.target.hash == "#alert"){
      url = 'latihan1.html'
    }else if(e.target.hash == "#badge"){
      url = 'latihan2.html'
    }else if(e.target.hash == "#breadcrumb"){
      url = 'latihan3.html'
    }else if(e.target.hash == "#card"){
      url = 'latihan4.html'
    }else if(e.target.hash == "#button"){
      url = 'latihan5.html'
    }else if(e.target.hash == "#carousel"){
      url = 'latihan6.html'
    }else if(e.target.hash == "#collapse"){
      url = 'latihan7.html'
    }else if(e.target.hash == "#dropdown"){
      url = 'latihan8.html'
    }else if(e.target.hash == "#form"){
      url = 'latihan9.html'
    }else if(e.target.hash == "#input-group"){
      url = 'latihan10.html'
    }else if(e.target.hash == "#jumbotron"){
      url = 'latihan11.html'
    }else if(e.target.hash == "#list-group"){
      url = 'latihan12.html'
    }else if(e.target.hash == "#media-object"){
      url = 'latihan13.html'
    }else if(e.target.hash == "#modals"){
      url = 'latihan14.html'
    }else if(e.target.hash == "#navs"){
      url = 'latihan15.html'
    }else if(e.target.hash == "#navbar"){
      url = 'latihan16.html'
    }else if(e.target.hash == "#pagination"){
      url = 'latihan17.html'
    }else if(e.target.hash == "#popovers"){
      url = 'latihan18.html'
    }else if(e.target.hash == "#progress-bar"){
      url = 'latihan19.html'
    }else if(e.target.hash == "#scrollspy"){
      url = 'latihan20.html'
    }else if(e.target.hash == "#spinner"){
      url = 'latihan21.html'
    }else if(e.target.hash == "#toasts"){
      url = 'latihan22.html'
    }else if(e.target.hash == "#tooltip"){
      url = 'latihan23.html'
    }
    $.ajax({
      url: url,
      data: "",
      method: 'GET',
      success: function(e){
        konten.innerHTML = e
      }
    })
  })
})

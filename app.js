const button = document.querySelector('#getQuote');
const qBody = document.querySelector('#quote-body');
const qTitle = document.querySelector('#quote-title');
const qBox = document.querySelector('#quoteBox');

let categories = [
"explicit",
"dev",
"movie",
"food",
"celebrity",
"science",
"political",
"sport",
"religion",
"animal",
"music",
"history",
"travel",
"career",
"money",
"fashion"
];

let randomCategory = categories[Math.floor(Math.random()*categories.length)];

button.addEventListener('click',function(){

    $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: 'chuck norris',
            tagmode: "any",
            format: "json"
        },
        function(data) {
            var rnd = Math.floor(Math.random() * data.items.length);
            var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");
            $('body').css('background-image', "url('" + image_src + "')");
        });
      
    let randomCategory = categories[Math.floor(Math.random()*categories.length)];
    qTitle.innerHTML = '';
    qBody.textContent = '';
    
  $.getJSON('https://api.chucknorris.io/jokes/random?category=' + randomCategory,function(data){
    qBox.style.backgroundColor = "orange";
    qTitle.innerHTML = `<img src=${data.icon_url}>`;
    qBody.textContent = data.value;
  });
});
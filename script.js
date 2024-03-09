let toggles = document.querySelectorAll('.toggle')
let gridItems = document.querySelectorAll('.grid-item')
let text = document.querySelectorAll('.text')

toggles.forEach((toggle, index) => {
    let toggleType = toggle.dataset.type

 toggle.addEventListener('click', (e) => {
    gridItems.forEach((item, index) => {
         if (item.dataset.type == toggleType) {
            item.classList.remove('hidden')
         } else(
            item.classList.add('hidden')
         )
    })

    text.forEach((textItem) => {
      if (textItem.dataset.type == toggleType) {
          textItem.classList.remove('hidden')
      } else {
          textItem.classList.add('hidden')
      }
  })

 })
})


gridItems.forEach((item) => {
   item.addEventListener('click', (e) => {
       let itemType = item.dataset.type

       gridItems.forEach((gridItem) => {
           if (gridItem.dataset.type == itemType) {
               gridItem.classList.remove('hidden')
           } else {
               gridItem.classList.add('hidden')
           }
       })

       text.forEach((textItem) => {
           if (textItem.dataset.type == itemType) {
               textItem.classList.remove('hidden')
           } else {
               textItem.classList.add('hidden')
           }
       })
   })
})

text.forEach((textItem) => {
   textItem.addEventListener('click', (e) => {
       let itemType = textItem.dataset.type

       gridItems.forEach((gridItem) => {
           if (gridItem.dataset.type == itemType) {
               gridItem.classList.remove('hidden')
           } else {
               gridItem.classList.add('hidden')
           }
       })

       text.forEach((item) => {
           if (item.dataset.type == itemType) {
               item.classList.remove('hidden')
           } else {
               item.classList.add('hidden')
           }
       })
   })
})


window.addEventListener('load', function() {

   setTimeout(function() {
     var loadingPage = document.getElementById('loading-page');
     loadingPage.style.opacity = 0;
     setTimeout(function() {
       loadingPage.style.display = 'none';
     }, 1000); 
   }, 3000);
 });

 var music = document.getElementById("music");
 var myaudio = document.getElementById("myaudio");
 var pausedTime = 0;

 music.addEventListener("click", function() {

     if (myaudio.paused) {
         myaudio.play();
         music.textContent = "⏸️"; 
     } else {
         myaudio.pause();
         pausedTime = myaudio.currentTime; 
         music.textContent = "🎵"; 
     }
 });


 myaudio.addEventListener("ended", function() {
     music.textContent = "🎵"; 
 });
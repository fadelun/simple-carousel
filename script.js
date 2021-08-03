const carousel = document.querySelector('.carousel');
const btnCarousel = document.querySelectorAll('button');
const images = document.querySelectorAll('img');
const dots = document.getElementsByClassName('dot');
let imageIndex = 1;


btnCarousel.forEach( button => {
    button.addEventListener('click', event => {
        if(event.target.id == 'prev'){
            if(imageIndex != 1){
                imageIndex--;
                
            }else{
                imageIndex = images.length;
            }
        // if you click next button
        }else{
            if(imageIndex != images.length){
                imageIndex++;

            }else{
                imageIndex = 1
            }
        }

        images.forEach((img, index ) => {
           if(index == imageIndex - 1){
               img.classList.add('active')
               dots[index].classList.add('active')
           }else{
               img.classList.remove('active')
               dots[index].classList.remove('active')
           }
        })

    })
})

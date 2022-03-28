

    function animatePreloader() {

        $({ Counter: 0 }).animate({
          Counter: $('.percentage').text()
        }, {
          duration: 6000,
          easing: 'swing',
          step: function () {
            $('.percentage').text(Math.ceil(this.Counter) + '%');
          },
          complete: ()=>{
            $('.percentage').animate({
              height: -200,
              opacity: 0
              }, 1000,()=>{$('.percentage').text('something ...')})
              .animate({
                height: 100,
                opacity:1
              },1000)
          
        }
        });
  
  
   
  /*
        $({deg: 0}).animate({deg: 360}, {
          duration: 6000,
          queue: false,
          step: function(now) {
  
              $('.preloader-svg').css({
                  transform: 'rotate(' + now + 'deg)'
              });
          }
      });
  
  
   
      $({scale: 1}).animate({scale: 0.206}, {
          duration: 4000,
          step: function(s) {
  
              $('.preloader-svg').css({
                  transform: 'scale('+ s +')'
              });
  
              
          }
      });
  */
 
  
   
    }
  
  
      
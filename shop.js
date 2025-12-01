






const buttons = document.querySelectorAll('.button');
const text = document.getElementById('text');


buttons.forEach(button => {
    let isincrement = true;  

    button.addEventListener('click', function() {
        let currentnumber = parseInt(text.textContent);

        if (isincrement) {

            currentnumber += 1;
            button.textContent = 'Remove';  
        } else {
            
            currentnumber -= 1;
            button.textContent = 'Add to cart';  
        }

        
        text.textContent = currentnumber;
        
        
        isincrement = !isincrement;
    });
});

Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
    // debug:true,
  });                                      





const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

          
          
          
         const openModel = document.getElementById('openbtn');
        const closeModel = document.getElementById('closebtn');
        const watchModel = document.getElementById('modal');


        openModel.addEventListener('mouseover',()=>{
            watchModel.classList.remove("open");
        })

        closeModel.addEventListener('click',()=>{
            watchModel.classList.add('open');
        })
const counters = document.querySelectorAll('.container')

counters.forEach((container) => {
    // console.log(container)

    container.innerHTML = 0
    
    const updatecounter = () =>{
        const targetcont = +container.getAttribute('data-target')
        // console.log(typeof targetcont)

        const startingcont = +container.innerHTML

        const inc  = targetcont / 1000

        if(startingcont < targetcont){
            container.innerHTML = `${Math.round(startingcont + inc)}`
            setTimeout(updatecounter, 10)
        }else{
            container.innerHTML = targetcont
        }

    } 

    updatecounter()

})
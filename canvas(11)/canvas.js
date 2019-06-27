let canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d"),
    counter = 1;
    canvas.height = screen.height
    canvas.width = screen.width

    window.addEventListener('click', selectPictures)
    function selectPictures() {
        counter++
        if (counter==1) russia()
        else if (counter==2) rostov()
            else italia()

          
    }

    function russia() {
        ctx.clearRect(0, 0, 1000, 1000)
        ctx.fillStyle = 'grey'
        ctx.strokeRect(40, 40,  150, 50)
        ctx.fillStyle = 'blue'
        ctx.fillRect(40, 91,  150, 50)
        ctx.fillStyle = '#ff0000'
        ctx.fillRect(40, 141,  150, 50)
    }

    function rostov(){
        ctx.clearRect(0, 0, 1000, 1000)
        ctx.fillStyle = 'grey'
        ctx.strokeRect(40, 40,  50, 150)
        ctx.fillStyle = 'blue'
        ctx.fillRect(91, 40,  150, 50)
        ctx.fillStyle = 'yellow'
        ctx.fillRect(91, 90,  150, 50)
        ctx.fillStyle = '#ff0000'
        ctx.fillRect(91, 140,  150, 50)
    }

    function italia(){
        ctx.clearRect(0, 0, 1000, 1000)
        ctx.fillStyle = 'green'
        ctx.fillRect(40, 40,  50, 150)
        ctx.fillStyle = 'grey'
        ctx.strokeRect(91, 40,  50, 150)
        ctx.fillStyle = '#ff0000'
        ctx.fillRect(142, 40,  50, 150)
        counter = 0
    }
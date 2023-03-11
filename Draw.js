var current_x = 0, current_y = 0, previous_x = 0, previous_y = 0
var is_hold = false
var is_touch = false
var context_canvas, my_canvas

function Cavas_setup(){
    
    // console.log('Another file')
    my_canvas = document.getElementById("canvas")
    context_canvas = my_canvas.getContext('2d')

    context_canvas.fillStyle = '#000000'
    context_canvas.fillRect(0, 0, my_canvas.clientWidth, my_canvas.clientHeight)
    context_canvas.strokeStyle = '#FFFFFF'
    context_canvas.lineWidth = 16
    context_canvas.lineJoin = 'round'

    document.addEventListener('mousedown', function (event){
        console.log('Mouse is holding')
        is_hold = true
        current_x = event.clientX - my_canvas.offsetLeft
        current_y = event.clientY - my_canvas.offsetTop
        
    })

    document.addEventListener('mousemove', function (event){
        
        if (is_hold){
            previous_x = current_x
            current_x = event.clientX - my_canvas.offsetLeft

            previous_y = current_y
            current_y = event.clientY - my_canvas.offsetTop

            context_canvas.beginPath()
            context_canvas.moveTo(previous_x, previous_y)
            context_canvas.lineTo(current_x, current_y)
            context_canvas.closePath()
            context_canvas.stroke()
        }
        
    })

    document.addEventListener('mouseup', function (event){
        console.log("Mouse is free")
        is_hold = false
    })

    my_canvas.addEventListener('mouseleave', function (event){
       is_hold = false
    })

    // for ipad "touch event"
    my_canvas.addEventListener('touchstart', function (event){
        console.log("touch")
        is_touch = true
        current_x = event.touches[0].clientX - my_canvas.offsetLeft
        current_y = event.touches[0].clientY - my_canvas.offsetTop
    })

    my_canvas.addEventListener('touchcancel', function (event){
        is_touch = false
     })

    my_canvas.addEventListener('touchmove', function (event){
        
        if (is_touch){
            previous_x = current_x
            current_x = event.touches[0].clientX - my_canvas.offsetLeft

            previous_y = current_y
            current_y = event.touches[0].clientY - my_canvas.offsetTop

            context_canvas.beginPath()
            context_canvas.moveTo(previous_x, previous_y)
            context_canvas.lineTo(current_x, current_y)
            context_canvas.closePath()
            context_canvas.stroke()
        }
        
    })
     
}

function Clear_my_canvas(){
    current_x = 0
    current_y = 0
    previous_x = 0
    previous_y = 0
    context_canvas.fillRect(0, 0, my_canvas.clientWidth, my_canvas.clientHeight)
}


// async function load_model(){
//     const model_loaing = await tf.loadGraphModel("Model_js/model.json")
//     console.log(model_loaing)
// }

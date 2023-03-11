var answer
var score = 0

function Make_question(){
    const n1 = Math.floor(Math.random() * 5)
    document.getElementById('n1').innerHTML = n1

    const n2 = Math.floor(Math.random() * 6)
    document.getElementById('n2').innerHTML = n2
    answer = n1 + n2
}

function check(){
    const prediction = predic_image()
    console.log("this is ans prediction")
    console.log(prediction)

    console.log("this is true ans")
    console.log(answer)


    if (prediction == answer){
        score += 1
        alert(`Correct! your score is: ${score}`)
    } else{
        if(score != 0){
            score -= 1
            alert(`Wrong! your score is: ${score}`)
        }
    }
    console.log(score)
    
}
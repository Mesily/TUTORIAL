let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const content = e.currentTarget.classList;
        if(content.contains("increment")){
            count++;
        }
        else if(content.contains("decrement")){
            count--;
        }
        else{
            count = 0
        }
        value.textContent = count;
    })
})
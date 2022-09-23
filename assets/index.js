const bars = document.querySelector('.grafic-bars');

function paintBars() {
    fetch('/assets/data.json')
        .then(a => a.json())
        .then(b => {
            console.log(b)
            
            b.forEach(element => {
            bars.innerHTML += `
            <div class='grafic-bars-days'>
                <div class='grafic-bars-price hidden'>$${element.amount}</div>
                <div class='individual-bar' 
                    style='height:${element.amount}%;
                            width:30px;
                            background-color: ${element.amount <= 50 ? 'rgb(225, 116, 96)' : 'rgb(127, 180, 186)'} ;'>
                </div>
                <div class='small-letters'>${element.day}</div>
            </div>`   
        });
    })
}




paintBars();

setTimeout(() => {
        const individualBars = document.querySelectorAll('.individual-bar');

        individualBars.forEach(ele => {
            ele.addEventListener('mouseover' , (e) => {
                e.path[1].childNodes[1].classList.remove('hidden')
            })
        })

        individualBars.forEach(ele => {
            ele.addEventListener('mouseout' , (e) => {
                e.path[1].childNodes[1].classList.add('hidden')
            })
        })
    },100)
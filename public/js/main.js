const deleteBtn = document.querySelectorAll('.del')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteDish)
})

async function deleteDish(){
    const dishId = this.parentNode.dataset.id
    try{
        const response = await fetch('dishes/deleteDish', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'dishIdFromJSFile': dishId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
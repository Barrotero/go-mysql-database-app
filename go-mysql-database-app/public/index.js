function removeFromDb(item){
    fetch(`/delete?item=${item}`, {method: "Delete"}).then(res =>{
        if (res.status == 200){
            window.location.pathname = "/"
        }
    })
 }
 
 function updateDb(item) {
    let input = document.getElementById(item)
    let newitem = input.value
    fetch(`/update?olditem=${item}&newitem=${newitem}`, {method: "PUT"}).then(res =>{
        if (res.status == 200){
        alert("Banco de dados atualizado")
            window.location.pathname = "/"
        }
    })
 }
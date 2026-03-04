type Status = "entregue" | "pendente" | "enviado"

function exibirStatus(status: Status){
    switch (status) {
        case "cancelado":
            console.log("Pedido cancelado")
            break;
        case "entregue":
            console.log("Pedido entregue")
            break;
        case "pendente":
            console.log("Pedido pendente")
            break;
        case "enviado":
            console.log("Pedido enviado")
            break;
    }
}

exibirStatus("entregue")
// os pacotes entram com fila 
// quando entrando no caminhão entram em uma pilha 
// menu 
const CAP = 5;
fila = []
pilha = []

function Incluir(carga){
  if (fila.length === CAP){
    console.log("Capacidade cheia")
    return
  }
    console.log("Inserindo " + carga + " na Fila...")
    fila.push(carga)
}

function RemoverFila(carga){
  
    if (fila.length === 0){
      console.log("Lista vazia")
      return
  }
  
  if (pilha.length === CAP) {
    console.log("Caminhão cheio");
    return;
}
  carga = fila[0]
  console.log("adcionando " + carga + " na pilha...")
  AdcionandoPilha(carga)
  console.log(carga + " Removendo da fila...")
  fila.shift()
}

function AdcionandoPilha(carga){
    if (pilha.length === CAP){
      console.log("Capacidade pilha cheia")
      return
  }
  console.log(carga  + " Adcionando na pilha...")
  pilha.push(carga)
  
}
function RetirarPilha(){
  if (pilha.length === 0){
      console.log("pilha vazia")
      return
    }
  carga = pilha[pilha.length - 1]
  console.log(carga + " removendo")
  pilha.pop()
}
function Imprimir(){
  console.log("========= FILA =========")
  
  for (i = 0; i < fila.length; i++){
    if (fila.length === 0) {
        console.log("Fila vazia");
    }
        console.log("["+i+"] "+ fila[i])

    }
  
  console.log("========= PILHA =========")
  
    for (i = pilha.length -1; i >= 0; i--){
      
      if (pilha.length === 0){
      console.log("pilha vazia")
      return
    }
      console.log("["+i+"] "+ pilha[i])
      

    }
  }

function Menu(){
    while (true) {
    console.log("========================")
    console.log("SOFTWARE DE ROMANEIO")
    console.log("1- Incluir pacote no romaneio")
    console.log("2- Retirar da fila e carregar")
    console.log("3- Retirar pacote do caminhão")
    console.log("4- Mostrar romaneio e caminhão")
    console.log("0- Encerrar operação")
    console.log("========================")
    let opcao = parseInt(prompt("Insira uma opção: "))
    
    switch (opcao){
      case 1: 
          carga = prompt("Insira a carga: ")
          Incluir(carga)
          break
      case 2 :
          RemoverFila()
          break
      case 3:
          RetirarPilha()
          break
      case 4:
          Imprimir()
          break
      case 0:
          return 
      default:
          console.log("Opção incorreta digite uma opção...")
          break
    }

      }
    }
Menu()

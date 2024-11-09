function mascara_telefone ()
{
    var telefone = 
    document.getElementById("telefone").value
    console.log(telefone)
    telefone = telefone.slice(0,14)
    console.log(telefone)
    document.getElementById("telefone").value = telefone

    telefone=document.getElementById("telefone").value.slice(0,10)

    console.log(telefone)

    var telefone_formatado = document.getElementById("telefone").value
        if (telefone_formatado[0] != "("){
            if (telefone_formatado[0] != undefined){
                     document.getElementById("telefone").value = "(" + telefone_formatado[0];
                    }
                }

                if (telefone_formatado[3] != ")"){
                    if (telefone_formatado[3] != undefined){
                        document.getElementById("telefone").value = telefone_formatado.slice(0,3) + ")" + telefone_formatado[3];
                    }
                }

                if (telefone_formatado[9] != "-"){
                    if(telefone_formatado[9] != undefined){
                        document.getElementById("telefone").value = telefone_formatado.slice(0,9) + "-" + telefone_formatado[9];
                    }
                }

                localStorage.setItem("telefone", telefone_formatado)

            }
            addEventListener("DOMContentLoaded", () =>{
                var recebe_telefone = localStorage.getItem("telefone")
                document.getElementById("recebe_telefone").value = recebe_telefone
            })

function mascara_cep(){
    var cep = document.getElementById("CEP").value
    console.log(cep)
    cep = cep.slice(0,10)
    console.log(cep)
    document.getElementById("CEP").value = cep

    cep = document.getElementById("CEP").value.slice(0,7)
    console.log(cep)

    var cep_formatado = document.getElementById("CEP").value
    if (cep_formatado[2] != "."){
        if(cep_formatado[2] != undefined){
            document.getElementById("CEP").value = cep_formatado.slice(0,2) + "." + cep_formatado[2]; 
        }
    }

    if (cep_formatado[6] != "-"){
        if(cep_formatado[6] != undefined){
            document.getElementById("CEP").value = cep_formatado.slice(0,6) + "-" + cep_formatado[6];
        }
    }

    localStorage.setItem("cep", cep_formatado)

}

addEventListener("DOMContentLoaded", () => {
    var recebe_cep = localStorage.getItem("cep")
    document.getElementById("recebe_cep").value = recebe_cep
})

function mascara_cpf(){
    var cpf = document.getElementById("CPF").value
    console.log(cpf)
    cpf = cpf.slice(0,14)
    console.log(cpf)
    document.getElementById("CPF").value = cpf
    
    cpf = document.getElementById("CPF").value.slice(0,11)
    console.log(cpf)

    var cpf_formatado = document.getElementById("CPF").value

    if (cpf_formatado[3] != "."){
        if(cpf_formatado[3] != undefined){
            document.getElementById("CPF").value = cpf_formatado.slice(0,3) + "." + cpf_formatado[3];
        }
    }

    if (cpf_formatado[7] != "."){
        if(cpf_formatado[7] != undefined){
            document.getElementById("CPF").value = cpf_formatado.slice(0,7) + "." + cpf_formatado[7];
        }
    }

    if (cpf_formatado[11] != "-"){
        if (cpf_formatado[11] != undefined){
            document.getElementById("CPF").value = cpf_formatado.slice(0,11) + "-" + cpf_formatado[11];
        }
    }

    localStorage.setItem("cpf", cpf_formatado)
}

addEventListener("DOMContentLoaded", () =>{
    var recebe_cpf = localStorage.getItem("cpf")
    document.getElementById("recebe_cpf").value = recebe_cpf
})

function mascara_cnpj(){
    var cnpj = document.getElementById("cnpj").value
    console.log(cnpj)
    cnpj = cnpj.slice(0,18)
    console.log(cnpj)
    document.getElementById("cnpj").value = cnpj
    
    cnpj = document.getElementById("cnpj").value.slice(0,14)
    console.log(cnpj)

    var cnpj_formatado = document.getElementById("cnpj").value

    if (cnpj_formatado[2] != "."){
        if (cnpj_formatado[2] != undefined){
            document.getElementById("cnpj").value = cnpj_formatado.slice(0,2) + "." + cnpj_formatado[2];
        }
    }

    if (cnpj_formatado[6] != "."){
        if (cnpj_formatado[6] != undefined){
            document.getElementById("cnpj").value = cnpj_formatado.slice(0,6) + "." + cnpj_formatado[6];
        }
    }

    if (cnpj_formatado[10] != "/"){
        if (cnpj_formatado[10] != undefined){
            document.getElementById("cnpj").value = cnpj_formatado.slice(0,10) + "/" + cnpj_formatado[10];
        }
    }

    if (cnpj_formatado[11] != "0"){
        if (cnpj_formatado[11] != undefined){
            document.getElementById("cnpj").value = cnpj_formatado.slice(0,11) + "0" + cnpj_formatado[11];
     }
   }

   if (cnpj_formatado[12] != "0"){
        if (cnpj_formatado[12] != undefined){
            document.getElementById("cnpj").value = cnpj_formatado.slice(0,12) + "0" + cnpj_formatado[12];
        }
    }

   if (cnpj_formatado[13] != "0"){
        if (cnpj_formatado[13] != undefined){
            document.getElementById("cnpj").value = cnpj_formatado.slice(0,13) + "0" + cnpj_formatado[13];
       }
    }

   if (cnpj_formatado[14] != "1"){
        if (cnpj_formatado[14] != undefined){
           document.getElementById("cnpj").value = cnpj_formatado.slice(0,14) + "1" + cnpj_formatado[14];
        }
    }  

    if (cnpj_formatado[15] != "-"){
        if (cnpj_formatado[15] != undefined){
            document.getElementById("cnpj").value = cnpj_formatado.slice(0,15) + "-" + cnpj_formatado[15];
        }
    }

    localStorage.setItem("cnpj", cnpj_formatado)

}

addEventListener("DOMContentLoaded", () => {
    var recebe_cnpj = localStorage.getItem("cnpj")
    document.getElementById("recebe_cnpj").value = recebe_cnpj
})


function mascara_codigo(){
    var cod = document.getElementById("codigo").value
    console.log(cod)
    cod = cod.slice(0,20)
    console.log(cod)
    document.getElementById("codigo").value = cod

    cod = document.getElementById("codigo").value.slice(0,14)
    console.log(cod)

    var cod_formatado = document.getElementById("codigo").value

    if (cod_formatado[2] != "_"){
        if (cod_formatado[2] != undefined){
            document.getElementById("codigo").value = cod_formatado.slice(0,2) + "_" + cod_formatado[2];
        }
    }

    if (cod_formatado[5] != "/"){
        if (cod_formatado[5] != undefined){
            document.getElementById("codigo").value = cod_formatado.slice(0,5) + "/" + cod_formatado[5];
        }
    }

    if (cod_formatado[6] != "/"){
        if (cod_formatado[6] != undefined){
            document.getElementById("codigo").value = cod_formatado.slice(0,6) + "/" + cod_formatado[6];
        }
    }

    if (cod_formatado[10] != "-"){
        if (cod_formatado[10] != undefined){
            document.getElementById("codigo").value = cod_formatado.slice(0,10) + "-" + cod_formatado[10];
        }
    }

    if (cod_formatado[14] != "."){
        if (cod_formatado[14] != undefined){
            document.getElementById("codigo").value = cod_formatado.slice(0,14) + "." + cod_formatado[14];
        }
    }

    if (cod_formatado[15] != "9"){
        if (cod_formatado[15] != undefined){
            document.getElementById("codigo").value = cod_formatado.slice(0,15) + "9" + cod_formatado[15];
        }
    }

    if (cod_formatado[16] != "."){
        if (cod_formatado[16] != undefined){
            document.getElementById("codigo").value = cod_formatado.slice(0,16) + "." + cod_formatado[16];
        }
    }

    localStorage.setItem("codigo", cod_formatado)
}

addEventListener("DOMContentLoaded", () => {
    var recebe_cod = localStorage.getItem("codigo")
    document.getElementById("recebe_codigo").value = recebe_cod
})
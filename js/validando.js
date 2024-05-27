
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('form').addEventListener('submit', validarFormulario); 
  
});

function validarFormulario(evento) {
  evento.preventDefault();
  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value.trim();

  
  if((email.length == 0) &&(password.length ==0)){
   /* alert('No has escrito tu mail ni has escrito tu contraseña');*/
  Swal.fire({
    title: "Ooops...\nNo has escrito tu mail\n ni tu contraseña",
    text: "",
    imageUrl: "img/ninguno.png",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image"
  })
    return;
  }


  if ((password.length <= 6)&&(email.length == 0)){
   /* alert('La contraseña no es válida, debe tener más de 6 caracteres ');
    alert('además olvidaste ingresar tu mail');*/
    
    Swal.fire({
      title: "Contraseña inválida debe tener más de 6 caracteres\nOlvidaste de ingresar tu mail!!",
      text: "",
      imageUrl: "img/inv_pass.webp",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image"
    })

    return;
  }

  if ((password.length >= 6)&&(email.length == 0)){
    /*  alert('La contraseña es correcta ');
      alert('Falta ingresar tu mail');*/
      Swal.fire({
        title: "La contraseña es correcta\nPero.. olvidaste ingresar tu mail!!!",
        text: "",
        imageUrl: "img/faltaMail.webp",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
      return;
      }

  if((password.length ==0)&&(!(email.length == 0))){
      /*alert('olvidaste ingresar tu contraseña'); */
      Swal.fire({
        title: "Ingresá tu contraseña!!!\nDatos incompletos",
        text: "",
        imageUrl: "img/faltaContr.webp",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
      return;
      }


  if(password.length<=6)  {
    /*  alert('La contraseña no es válida, debe tener más de 6 caracteres ');*/
      Swal.fire({
        title: "La contraseña no es válida,\ndebe tener más de 6 caracteres",
        text: "",
        imageUrl: "img/inv_pass.webp",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
      return;
      }
  if((password.length>=6)&&(!(email.length == 0))){
   /*  alert('exitos!!');  */
   Swal.fire({
    title: "Inicio de sesión exitoso!!!",
    text: "Bienvenido",
    imageUrl: "img/okk.webp",
    imageWidth: 200,
    imageHeight: 300,
    imageAlt: "Custom image"
  });

   return
     } 
          
 this.submit()

};


 

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++form contact us send emailValue
  var butSendContact = document.getElementById('send-bt');
  butSendContact.addEventListener('click', function(e) {
    e.preventDefault();
    var ajax = {
      send: function() {
        var uName = document.getElementById('name').value;
        var uTel = document.getElementById('phone').value;
        var uEmail = document.getElementById('email').value;
        var uComment = document.getElementById('message').value;
        var textErrorForm = "Form is not completed ! \n";
        var notForm = document.createElement("p");
        var neText = document.createTextNode(textErrorForm);
        notForm.appendChild(neText);
        notForm.className = 'contactNotifDiv';
        // notForm.className = "validate-me";

        if (uName == "" || uEmail == "" || uTel== ""  ||uComment== "" ) {
          // alert("Form is not completed");
          butSendContact.parentElement.appendChild(notForm);
        } //end if
        else if (uName !== "" && uTel!== "" && uComment!== "" &&(validateEmail(uEmail))) {
          //remove child
          var listPF = document.querySelectorAll(".contactNotifDiv");
          for (var i = 0; i < listPF.length; i++) {
            butSendContact.parentElement.removeChild(listPF[i]);
          }
          //
          ajax.SetText("Sending...");
          $.post("assets/php/sendcontact.php", {
            name: uName,
            tel:uTel,
            email: uEmail,
            message: uComment
          }, function(data) {
            if (data.includes("true")) {
              ajax.SetText("Sent !");
              // butSendContact.style.backgroundColor = "#0054A6";
              // butSendContact.style.color = "#fff";

              document.getElementById('name').value="";
               document.getElementById('phone').value="";
              document.getElementById('email').value="";
              document.getElementById('message').value="";

            } else {
              ajax.SetText("Send");
            }
          }); //end post
        } else {
          textErrorForm += "Email is not Valid !"
          neText.textContent=textErrorForm;
          butSendContact.parentElement.appendChild(notForm);
        } //end else
      },
      SetText: function(text) {
        butSendContact.textContent = text;
      }
    } //end ajax
    ajax.send();
  }, false);

  // });
  //-----------------------------------------------------------form contact us send email

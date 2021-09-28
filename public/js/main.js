console.log('Hello World!');

window.onscroll = function() {
  let el = document.getElementsByClassName('header')[0];
  let className = 'small';
  if (el.classList) {
    if (window.scrollY > 10)
      el.classList.add(className);
    else
      el.classList.remove(className);
  }
};

popupWhatsApp = () => {
  
  let btnClosePopup = document.querySelector('.closePopup');
  let btnOpenPopup = document.querySelector('.whatsapp-button');
  let popup = document.querySelector('.popup-whatsapp');
  let sendBtn = document.getElementById('send-btn');

  btnClosePopup.addEventListener("click",  () => {
    popup.classList.toggle('is-active-whatsapp-popup')
  })
  
  btnOpenPopup.addEventListener("click",  () => {
    popup.classList.toggle('is-active-whatsapp-popup')
     popup.style.animation = "fadeIn .6s 0.0s both";
  })
  
  sendBtn.addEventListener("click", () => {
  let msg = document.getElementById('whats-in').value;
  let relmsg = msg.replace(/ /g,"%20");
    //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
   window.open('https://wa.me/+254712679390?text='+relmsg, '_blank'); 
  
  });

  setTimeout(() => {
    popup.classList.toggle('is-active-whatsapp-popup');
  }, 3000);
}

popupWhatsApp();

/*LINK SHARING ON SOCIALS*/
window.onload = setShareLinks;

function setShareLinks() {
    var pageUrl = encodeURIComponent(document.URL);
    var description = document.querySelector("meta[name='description']").getAttribute("content");
    var description = encodeURIComponent(description);

    elements = document.querySelectorAll(".social-share.facebook");
    Array.prototype.forEach.call(elements, function(el) {
        el.addEventListener("click", function() {
            url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
            socialWindow(url);
        });
    });

    elements = document.querySelectorAll(".social-share.twitter");
    Array.prototype.forEach.call(elements, function(el) {
        el.addEventListener("click", function() {
            url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + description;
            socialWindow(url);
        });
    });

    elements = document.querySelectorAll(".social-share.linkedin");
    Array.prototype.forEach.call(elements, function(el) {
        el.addEventListener("click", function() {
            url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
            socialWindow(url);
        });
    });
};

function socialWindow(url) {
    var left = (screen.width - 570) / 2;
    var top = (screen.height - 570) / 2;
    var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
    window.open(url,"NewWindow",params);
};

/*No Right Click*/
function f1() {
  if(document.all) { return false; }
}
function f2(e) {
  if(document.layers || (document.getElementById &! document.all)) {
    if(e.which==2 || e.which==3) { return false; }
  }
}
if(document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown = f1;
}
else {
  document.onmouseup = f2;
  document.oncontextmenu = f1;
}
document.oncontextmenu = function() {
  return false;
};


//EMAIL VALIDATION

function validateEmail(theForm) {
if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(theForm.email-id.value)){
return(true);
}
alert("Invalid e-mail address! Please enter again carefully!.");
return(false);
}
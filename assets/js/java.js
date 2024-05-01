const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scroll > 0);
})
const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });
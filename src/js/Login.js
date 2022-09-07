import { request, showError } from "./servicesFunctions.js";
import MRB from "./MRB.js";

export default class Login {
    constructor() {
        this.user = null;

        this.mrbWrapper = document.querySelector('[data-mrb="mrbWrapper"]');
        this.loginWindow = this.mrbWrapper.querySelector('[data-loginWindow="loginWindow"]');
        this.login = this.mrbWrapper.querySelector('[data-loginWindow="loginInput"]');
        this.password = this.mrbWrapper.querySelector('[data-loginWindow="passInput"]');
        this.enterBtn = this.mrbWrapper.querySelector('[data-loginWindow="enterBtn"]');
        this.regBtn = this.mrbWrapper.querySelector('[data-loginWindow="regBtn"]');
        this.errorBox = this.mrbWrapper.querySelector('[data-mrb="errorBox"]');
        this.error = this.mrbWrapper.querySelector('[data-mrb="errorText"]');

        this.logOrReg();
    }

    logOrReg(){
        this.enterBtn.addEventListener('click', () => {
            if(this.loginFormValidator()){
                const params = new URLSearchParams();
                params.set('email', this.login.value);
                params.set('pass', this.password.value);
                params.set('loggedIn', 'checkUser');

                request('GET', params).then(async resolve => {
                    const answer = JSON.parse(await resolve.text());
                    if(answer.status) {
                        this.user = answer.user;
                        this.loginWindow.remove();

                        const params = new URLSearchParams();
                        params.set('getWindow', 'appWindow')

                        request('GET', params).then(async resolve => {
                            this.mrbWrapper.insertAdjacentHTML('beforeend', await resolve.text());

                            new MRB(this.user);
                        });
                    } else {
                        showError(answer.text);
                    }
                })
            }
        })

        this.regBtn.addEventListener('click', () => {
            this.loginWindow.remove();
            const params = new URLSearchParams();
            params.set('getWindow', 'regWindow');
            request('GET', params).then(async resolve => {
                console.log(await resolve.text());
            });
        })
    }

    loginFormValidator() {
        if(this.login.value.length === 0 || this.password.value.length === 0){
            showError('Заполните все поля.');
            return false;
        }

        return true;
    }
}
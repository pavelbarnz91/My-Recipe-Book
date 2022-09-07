import { request, showError } from "./servicesFunctions.js";

export default class Registration {
    constructor() {
        this.user = null;

        this.mrbWrapper = document.querySelector('[data-mrb="mrbWrapper"]');
        this.regWindow = this.mrbWrapper.querySelector('[data-regWindow="window"]');
        this.regWindowForm = this.regWindow.querySelector('[data-regWindow="regForm"]');
        this.regComplieteBtn = this.regWindow.querySelector('[data-regWindow="regComplieteBtn"]');
        this.regCancelBtn = this.regWindow.querySelector('[data-regWindow="regCancelBtn"]');
        this.regWindowErrorBox = this.mrbWrapper.querySelector('[data-mrb="errorBox"]');
        this.regWindowError = this.mrbWrapper.querySelector('[data-mrb="errorText"]');

        this.regOrCancel();
    }

    regOrCancel() {
        this.regWindow.addEventListener('click', e => {
            if(e.target.dataset.regwindow === 'regComplieteBtn') {
                if(this.formValidator()) {
                    const fd = new FormData(this.regWindowForm);
                    fd.set('tag', 'registration');

                    request('POST', fd).then(async resolve => {
                        const answer = JSON.parse(await resolve.text());
                        if(answer.status) {
                            this.user = answer.user;
                            console.log(this.user);
                        } else {
                            showError(answer.text);
                        }
                    })
                };
            } else if(e.target.dataset.regwindow === 'regCancelBtn'){
                let params = new URLSearchParams();
                params.set('getWindow', 'loginWindow');

                request('GET', params).then( async resolve => {
                    let answer = await resolve.text();
                    this.regWindow.remove();
                    this.mrbWrapper.insertAdjacentHTML('beforeend', answer);
                })

                if(!this.regWindowErrorBox.classList.contains('hidden')) {
                    this.regWindowErrorBox.classList.add('hidden');
                }
            }
        })
    }

    formValidator() {
        if(
            this.regWindowForm.elements.name.value.length < 2 ||
            this.regWindowForm.elements.lastname.value.length < 2
        ) {
            showError('Имя или фамилия не могут содержать меньше 2 символов.');
            return false;
        }

        if(this.regWindowForm.elements.email.value.indexOf('@') == -1) {
            showError('В email должен присутствовать символ собачки - "@".');
            return false;
        }

        if(this.regWindowForm.elements.pass.value.length < 4) {
            showError('Пароль должен содержать минимум 4 символа.');
            return false;
        }

        if(this.regWindowForm.elements.pass.value !== this.regWindowForm.elements.pass2.value) {
            showError('Пароли не совпадают. Проверьте правильность данных.');
            return false;
        }

        let result = true;

        let a = Array.from(this.regWindowForm.elements);
        a.forEach(item => {
            if(item.tagName === 'BUTTON') return;
            if(item.value === '') {
                showError('Пожалуйста заполните все поля.');
                result = false;
                return;
            }
        })

        return result;
    }
}
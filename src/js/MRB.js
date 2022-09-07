export default class MRB {
    constructor(user) {
        this.user = user;
        this.mrb = document.querySelector('[data-mrb="mrb"]');
        this.userNameBox = this.mrb.querySelector('[data-mrb="userName"]');
        this.userAvatar = this.mrb.querySelector('[data-mrb="userSettings"]');
        this.settings = this.mrb.querySelector('[data-mrb="userSettings"]');

        this.startMRB();
    }

    startMRB() {
        console.log('mrb is starting');
        this.userNameBox.textContent = this.user.name;     
    }
}
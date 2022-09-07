export default class ProfileSettings {
    constructor() {
        this.mrb = document.querySelector('[data-mrb="mrb"]');
        this.userName = this.mrb.querySelector('[data-mrb="userName"]');
        this.userSettings = this.mrb.querySelector('[data-mrb="userSettings"]');
        this.mrbSettings = this.mrb.querySelector('[data-mrb="mrbSettings"]');
        
        this.startSettings();
    }

    startSettings() {
        
    }
}
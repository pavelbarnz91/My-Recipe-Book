export function request(method, data) {
    const url = 'http://localhost:9090';

    if(method === 'POST') {
        return fetch(url, {
            body: data,
            method: method,
        })
    }

    if(method === 'GET') {
        return fetch(`${url}?${data}`);
    }
}


export function showError(text) {
    const errorBox = document.querySelector('[data-mrb="errorBox"]');
    const error = document.querySelector('[data-mrb="errorText"]');
    errorBox.classList.remove('hidden');
    error.textContent = text;

    setTimeout(() => {
        errorBox.classList.add('hidden');
    }, 5000)
}
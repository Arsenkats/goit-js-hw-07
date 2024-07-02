const formElem = document.querySelector('.login-form');
formElem.addEventListener('submit', event => {
      event.preventDefault();

            const form = new FormData(formElem);
            const data = {};
            let isFormValid = true;

            form.forEach((value, key) => {
                const trimmedValue = value.trim();
                if (trimmedValue === "") {
                    isFormValid = false;
                    alert('All fields must be filled out.');
                    return;
                }
                data[key] = trimmedValue;
            });

            if (isFormValid) {
                console.log(data);
                formElem.reset(); 
            }
});

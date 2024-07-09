document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const notification = document.getElementById('notification');

    // Verificar si el modo oscuro está habilitado
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Modo Claro';
    }

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        // Mostrar notificación
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.textContent = 'Modo Claro';
            showNotification('Estás en modo oscuro');
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.textContent = 'Modo Oscuro';
            showNotification('Estás en modo claro');
        }
    });

    function showNotification(message) {
        notification.textContent = message;
        notification.classList.remove('d-none');
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
            notification.classList.add('d-none');
        }, 3000);
    }
});


document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let subject = document.getElementById('subject').value.trim();
    let message = document.getElementById('message').value.trim();

    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let subjectError = document.getElementById('subjectError');
    let messageError = document.getElementById('messageError');
    let isValid = true;

    nameError.textContent = '';
    emailError.textContent = '';
    subjectError.textContent = '';
    messageError.textContent = '';

    // Validación
    if (name === '') {
        nameError.textContent = 'Por favor, ingrese su nombre';
        isValid = false;
    }

    if (email === '') {
        emailError.textContent = 'Por favor, ingrese su correo electrónico';
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Por favor, ingrese un correo electrónico válido';
        isValid = false;
    }

    if (subject === '') {
        subjectError.textContent = 'Por favor, ingrese un asunto';
        isValid = false;
    }

    if (message === '') {
        messageError.textContent = 'Por favor, ingrese un mensaje';
        isValid = false;
    }

    if (isValid) {
        const fd = new FormData(this);

        try {
            const response = await fetch('https://formspree.io/f/mjkbvzry', {
                method: 'POST',
                body: fd,
                headers: {
                    Accept: 'application/json'
                }
            });

            if (response.ok) {
                this.reset();
                document.getElementById('contactAlert').classList.remove('d-none');
                document.getElementById('contactErrorAlert').classList.add('d-none');
            } else {
                document.getElementById('contactErrorAlert').classList.remove('d-none');
            }
        } catch (error) {
            document.getElementById('contactErrorAlert').classList.remove('d-none');
        }
    }
});

function validateEmail(email) {
    // Expresión regular para validar un correo electrónico
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}




document.addEventListener('DOMContentLoaded', function() {
    const togglePrivacidad = document.getElementById('toggle-privacidad');
    const politicasSection = document.getElementById('politicas');
    const politicasContent = document.getElementById('politicas-content');

    togglePrivacidad.addEventListener('click', function() {
        politicasSection.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Evita el scroll en el fondo

        // Cerrar al hacer clic fuera de la ventana
        document.addEventListener('click', closePoliticasOutside);
        politicasSection.addEventListener('click', function(event) {
            event.stopPropagation(); // Evita que se cierre al hacer clic dentro de la ventana
        });
    });

    function closePoliticasOutside(event) {
        if (!politicasContent.contains(event.target) && event.target !== togglePrivacidad) {
            politicasSection.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restablece el scroll del cuerpo
            document.removeEventListener('click', closePoliticasOutside);
        }
    }
});










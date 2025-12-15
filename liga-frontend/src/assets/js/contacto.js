/**
 * JavaScript para la página de Contacto
 */

/**
 * Envía el formulario de contacto y muestra un toast
 */
function enviarContacto() {
    const formulario = document.getElementById('formContacto');
    
    if (formulario && formulario.checkValidity()) {
        // Obtener datos del formulario
        const datos = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            asunto: document.getElementById('asunto').value,
            mensaje: document.getElementById('mensaje').value
        };
        
        console.log('Datos de contacto:', datos);
        
        // Validar email
        if (!validarEmail(datos.email)) {
            alert('Por favor, introduce un email válido.');
            return;
        }
        
        // Resetear formulario
        formulario.reset();
        
        // Mostrar toast de confirmación
        mostrarToast('toastContacto');
        
        // Aquí se podría enviar los datos a un servidor
        // fetch('/api/contacto', { method: 'POST', body: JSON.stringify(datos) })
    } else {
        // Si el formulario no es válido, mostrar validación
        formulario.reportValidity();
    }
}

// Inicializar eventos de collapse para FAQs
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const collapse = item.querySelector('.collapse');
        if (collapse) {
            collapse.addEventListener('show.bs.collapse', function() {
                console.log('FAQ abierta:', item.querySelector('.accordion-button').textContent.trim());
            });
            
            collapse.addEventListener('hide.bs.collapse', function() {
                console.log('FAQ cerrada:', item.querySelector('.accordion-button').textContent.trim());
            });
        }
    });
    
    console.log('Página de contacto cargada');
});



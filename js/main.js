// Este archivo contiene interacciones de prueba.
// Más adelante puedes crear Tags en Google Tag Manager para medir estas acciones.

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.product-btn').forEach(button => {
    button.addEventListener('click', () => {
      const product = button.dataset.product;
      const price = button.dataset.price;
      const message = document.getElementById('message');

      if (message) {
        message.textContent = `Agregaste "${product}" por S/ ${price}.`;
        message.classList.add('show');
      }

      // Ejemplo de evento personalizado que podrás capturar desde GTM:
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'add_to_cart_demo',
        product_name: product,
        product_price: Number(price)
      });
    });
  });

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.hidden = true;
      const success = document.getElementById('form-success');
      if (success) success.hidden = false;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'generate_lead_demo'
      });
    });
  }
});


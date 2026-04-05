(function (Drupal, once) {
  'use strict';

  Drupal.behaviors.contentHubFacets = {
    attach: function (context) {
      // Animate cards on load
      once('ch-card-animate', '.content-hub-view .views-row', context).forEach(function (card, index) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        setTimeout(function () {
          card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 60);
      });

      // Auto-submit when search input is cleared
      once('ch-auto-clear', '.content-hub-view input[name="search"]', context).forEach(function (input) {
        var lastValue = input.value;

        input.addEventListener('input', function () {
          // Submit form when input is cleared (empty)
          if (this.value === '' && lastValue !== '') {
            var form = this.closest('form');
            if (form) {
              form.querySelector('input[type="submit"]').click();
            }
          }
          lastValue = this.value;
        });

        // Also handle the clear button on search inputs (X button)
        input.addEventListener('search', function () {
          if (this.value === '') {
            var form = this.closest('form');
            if (form) {
              form.querySelector('input[type="submit"]').click();
            }
          }
        });
      });
    }
  };

})(Drupal, once);

(function (Drupal, once) {
  'use strict';

  /**
   * Enhance facet interactions on the Content Hub page.
   */
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

      // Add result count header
      once('ch-result-count', '.content-hub-view .view-content', context).forEach(function (viewContent) {
        var rows = viewContent.querySelectorAll('.views-row');
        var existing = viewContent.parentNode.querySelector('.content-hub-results-count');
        if (existing) {
          existing.textContent = rows.length + ' result' + (rows.length !== 1 ? 's' : '') + ' found';
        }
        else if (rows.length > 0) {
          var counter = document.createElement('div');
          counter.className = 'content-hub-results-count';
          counter.style.cssText = 'color: #64748b; font-size: 0.9rem; margin-bottom: 1rem; font-weight: 500;';
          counter.textContent = rows.length + ' result' + (rows.length !== 1 ? 's' : '') + ' found';
          viewContent.parentNode.insertBefore(counter, viewContent);
        }
      });
    }
  };

})(Drupal, once);

(function (Drupal, once) {
  Drupal.behaviors.accordion = {
    attach(context) {
      const accordions = once('accordion', '.ib-accordion__item', context);
      if (!accordions) {
        return;
      }

      const openAccordion = (accordion) => {
        const content = accordion.querySelector(".ib-accordion__body");
        accordion.classList.add("ib-accordion__active");
        content.style.maxHeight = content.scrollHeight + "px";
        content.setAttribute('aria-expanded', true);
      }

      const closeAccordion = (accordion) => {
        const content = accordion.querySelector(".ib-accordion__body");
        accordion.classList.remove("ib-accordion__active");
        content.style.maxHeight = null;
        content.setAttribute('aria-expanded', false)
      }

      accordions.forEach((accordion) => {
        const headline = accordion.querySelector(".ib-accordion__headline");
        const content = accordion.querySelector(".ib-accordion__body");

        headline.onclick = () => {
          if (content.style.maxHeight) {
            closeAccordion(accordion);
          } else {
            accordions.forEach((accordion) => closeAccordion(accordion));
            openAccordion(accordion);
          }
        };
      });
    }
  };
}(Drupal, once));

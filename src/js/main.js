import { modals } from "./modules/modals";
import sliders from "./modules/sliders";

document.addEventListener('DOMContentLoaded', () => {
  modals();
  sliders('.feedback-slider-item', '', '.main-next-btn', '.main-prev-btn');
  sliders('.main-slider-item', 'vertical', '', '', 4000);
});
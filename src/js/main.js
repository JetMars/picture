import { modals } from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import tabs from "./modules/tabs";

document.addEventListener('DOMContentLoaded', () => {

  const stateForm = {};

  modals();
  sliders('.feedback-slider-item', '', '.main-next-btn', '.main-prev-btn');
  sliders('.main-slider-item', 'vertical', '', '', 10000);
  forms(stateForm);
  mask('[name="phone"');
  checkTextInputs('[name="name"');
  checkTextInputs('[name="message"');
  showMoreStyles('.button-styles', '#styles .row');
  calc('#size', '#material', '#options', '.promocode', '.calc-price', stateForm);
  tabs('.portfolio-menu li', '.portfolio-block', '.portfolio-menu', 'active');
});
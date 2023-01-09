import { modals } from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import myFilter from "./modules/myFilter";
import puctureSize from "./modules/puctureSize";

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
  myFilter('.portfolio-wrapper>.all', '.portfolio-menu', '.portfolio-menu>li', '.portfolio-no', 'active');
  puctureSize('.sizes-block');
});
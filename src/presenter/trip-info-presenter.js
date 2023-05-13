import TripInfoView from '../view/trip-info-view.js';
import { RenderPosition } from '../render.js';
import { render } from '../render.js';

export default class TripInfoPresenter {
  constructor({ tripInfoContainer }) {
    this.tripInfoContainer = tripInfoContainer;
  }

  init() {
    render(new TripInfoView, this.tripInfoContainer, RenderPosition.AFTERBEGIN);
  }
}

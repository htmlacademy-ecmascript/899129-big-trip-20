import TripInfoPresenter from './presenter/trip-info-presenter.js';
import EventPresenter from './presenter/event-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';

const eventElement = document.querySelector('.trip-events');
const tripInfoElement = document.querySelector('.trip-main');
const filterElement = document.querySelector('.trip-controls__filters');

const tripInfoPresenter = new TripInfoPresenter({tripInfoContainer: tripInfoElement});
const eventPresenter = new EventPresenter({eventContainer: eventElement});
const filterPresenter = new FilterPresenter({filterContainer: filterElement});

tripInfoPresenter.init();
filterPresenter.init();
eventPresenter.init();

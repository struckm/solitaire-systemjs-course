/* global angular */
import 'klondike/klondike.js';
import angular from 'angular';

angular.module('solitaire', ['klondike']);

angular.element(document).ready(() => {
	angular.bootstrap(document, ['solitaire']);
});

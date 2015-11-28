/* global angular */

import './game.js';
import './board.js';
import {Scoring} from './scoring.js';
import angular from 'angular';

angular.module('klondike.scoring', [])
	.service('scoring', [Scoring]);

angular.module("klondike", [
  "klondike.game",
  "klondike.board",
  "klondike.scoring"
]);

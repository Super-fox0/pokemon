"use strict";

(function () {

    angular.module('pokeApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/pokeSearch");

        $stateProvider.state("pokeSearch", {
            url: "/pokeSearch",
            templateUrl: "app/feature/pokesearch/pokesearch.html"
        }).state("pokeBattle", {
                url: "/pokeBattle",
                templateUrl: "app/feature/pokebattle/pokebattle.html"
        }).state("pokeBox", {
            url: "/pokeBox",
            templateUrl: "app/feature/pokebox/pokebox.html"
        })
    });
}());
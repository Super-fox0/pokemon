"use strict";

(function () {

    angular.module("pokeApp").service("pokeDal", ["dal", PokeDal]);

    function PokeDal (dal) {

        this.getPokemon = function () {
            var pokemonID = document.getElementById("pokeId").value;
            console.log("http://pokeapi.co/api/v2/"+ pokemonID);
            return dal.http.GET("http://pokeapi.co/api/v2/pokemon/"+ pokemonID);
        };

    }
}());

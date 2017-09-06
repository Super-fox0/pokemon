(function() {

    var PokeService =  function(pokeDal) {

        this.getPokemon = function()
        {
            return pokeDal.getPokemon();
        };
    };

    angular.module('pokeApp').service('pokeService', ['pokeDal', PokeService]);
}());
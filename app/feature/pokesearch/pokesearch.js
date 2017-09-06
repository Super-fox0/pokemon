(function() {

    var PokeSeachController =  function(pokeService) {
        var vm = this;

        function init() {
            pokeService.getPokemon().then(function (results) {
                console.log("This is the value of results");
                console.log(results);
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        }

        vm.test1 = function test1(){
            pokeService.getPokemon().then(function (results) {
                console.log("This is the value of results");
                console.log(results);
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        }

       // init();
    };

    angular.module('pokeApp').controller('pokeSeachController', ['pokeService', PokeSeachController]);
}());
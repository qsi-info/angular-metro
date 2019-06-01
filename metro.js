angular.module('ngMetro', [])


.directive('metroList', [function () {

  var directive = {
    restrict: 'AE',
    scope: {
      newItemHref: '@',
      newItemTitle: '@',
      manageItemHref: '@',
      title: '@',
      items: '=',
    },
    templateUrl: 'bower_components/angular-metro/templates/metro-list.html',
  };

  return directive;

}])



  .directive('metroTiles', [function () {

    var directive = {
      restrict: 'AE',
      scope: {
        tiles: '='
      },
      templateUrl: 'bower_components/angular-metro/templates/metro-tiles.html',
    };

    return directive;

  }]);
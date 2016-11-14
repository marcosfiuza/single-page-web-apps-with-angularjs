(function() {
  "use strict";

  angular.module("MenuApp").component("items", {
    templateUrl: "tpl/items_list.tpl.html",
    bindings: {
      items: "<"
    }
  });
})();

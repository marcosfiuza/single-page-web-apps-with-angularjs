(function() {
  "use strict";

  angular.module("MenuApp").component("categories", {
    templateUrl: "tpl/categories_list.tpl.html",
    bindings: {
      categories: "<"
    }
  });
})();

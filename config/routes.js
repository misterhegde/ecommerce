/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  "/": {
    view: "pages/homepage",
    locals: {
      flash: function (request, response) {
        request.addFlash("success", "A success message.");
      },
    },
  },

  "GET /": "StorecollectionsController.list",

  "GET /category/fashion/items": "StorecollectionsController.fashion",

  "GET /category/electronics/items": "StorecollectionsController.electronics",

  "GET /category/kitchenware/items": "StorecollectionsController.kitchenware",

  "GET /setindex": "StorecollectionsController.setindex",

  "GET /search": "StorecollectionsController.search",

  "GET /checkout": "StorecollectionsController.checkout",

  "GET /add/:itemid": "StorecollectionsController.addToCart",

  "GET /category/:category/items/:itemid":
    "StorecollectionsController.itemDetail",
};

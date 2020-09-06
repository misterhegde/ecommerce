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

  "GET /": "StoreController.list",

  "GET /category/fashion/items": "StoreController.fashion",

  "GET /category/electronics/items": "StoreController.electronics",

  "GET /category/kitchenware/items": "StoreController.kitchenware",

  "GET /setindex": "StoreController.setindex",

  "GET /search": "StoreController.search",

  "GET /checkout": "StoreController.checkout",

  "GET /add/:itemid": "StoreController.addToCart",

  "GET /category/:category/items/:itemid": "StoreController.itemdetail",
};

/**
 * StoreController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
let cart = null;

module.exports = {
  list: async (req, res) => {
    try {
      const items = await Store.find({});
      res.view("list", { items: items });
    } catch (error) {
      res.send(error);
    }
  },

  fashion: async (req, res) => {
    try {
      const items = await Store.find({ category: "fashion" });
      res.view("fashion", { items: items });
    } catch (error) {
      res.send(error);
    }
  },

  electronics: async (req, res) => {
    try {
      const items = await Store.find({ category: "electronics" });
      res.view("electronics", { items: items });
    } catch (error) {
      res.send(error);
    }
  },

  kitchenware: async (req, res) => {
    try {
      const items = await Store.find({ category: "kitchenware" });
      res.view("kitchenware", { items: items });
    } catch (error) {
      res.send(error);
    }
  },

  // setindex: async (req, res) => {
  //   let db = sails.getDatastore().manager;
  //   await db
  //     .collection(sails)
  //     .createIndex({ name: "text", description: "text" });

  //   // Store.createIndex({ name: "text", description: "text" })
  //   //   .then((res) => res.json("crreated index successfully"))
  //   //   .catch((error) => res.json("error", error));
  // },

  search: async (req, res) => {
    try {
      let itemsearch = req.query.itemsearch;

      const items = await Store.find({ name: itemsearch });
      res.view("list", { items: items });
    } catch (error) {
      res.send(error);
    }
  },

  itemdetail: async (req, res) => {
    try {
      const item = await Store.find({
        id: req.params.itemid,
      });

      res.view("product", { item: item });
    } catch (error) {
      res.send(error);
    }
  },

  addToCart: async (req, res) => {
    try {
      let itemid = req.params.itemid;
      const product = await Store.findOne({ id: itemid });
      // res.json(product);

      if (cart) {
        let doesProductExist = cart.products.findIndex(
          (item) => item.id === product.id
        );
        if (doesProductExist !== -1) {
          let existingProduct = cart.products[doesProductExist];
          existingProduct.qty++;
          cart.totalPrice += existingProduct.price;
        } else {
          cart.products.push({
            id: product.id,
            name: product.name,
            qty: 1,
            price: product.price,
            image: product.image,
          });
          cart.totalPrice += product.price;
        }
      } else {
        cart = { products: [], totalPrice: 0 };
        cart.products.push({
          id: product.id,
          name: product.name,
          qty: 1,
          price: product.price,
          image: product.image,
        });

        cart.totalPrice = product.price;
      }
      res.redirect("back");
    } catch (error) {
      res.send(error);
    }
  },

  checkout: (req, res) => {
    res.view("checkout", {
      cartitems: cart.products,
      totalPrice: cart.totalPrice,
    });
  },
};

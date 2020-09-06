/**
 * Datastores
 * (sails.config.datastores)
 *
 * A set of datastore configurations which tell Sails where to fetch or save
 * data when you execute built-in model methods like `.find()` and `.create()`.
 *
 *  > This file is mainly useful for configuring your development database,
 *  > as well as any additional one-off databases used by individual models.
 *  > Ready to go live?  Head towards `config/env/production.js`.
 *
 * For more information on configuring datastores, check out:
 * https://sailsjs.com/config/datastores
 */

module.exports.datastores = {
  default: {
    adapter: "sails-mongo",
    // url: "mongodb://root@localhost/storebase",
    url:
      "mongodb://storeusername:storepassword@cluster0-shard-00-00.tj57e.gcp.mongodb.net:27017,cluster0-shard-00-01.tj57e.gcp.mongodb.net:27017,cluster0-shard-00-02.tj57e.gcp.mongodb.net:27017/storedatabase?ssl=true&replicaSet=atlas-6lgfeq-shard-0&authSource=admin&retryWrites=true&w=majority",
  },

  // mongodb: {
  //   adapter: require("sails-mongo"),
  //   host: "cluster0.tj57e.gcp.mongodb.net",
  //   port: 27017,
  //   user: "storeusername",
  //   password: "storepassword",
  //   database: "storedatabase",
  // },
};

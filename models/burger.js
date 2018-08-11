const ormFile = require("../config/orm.js");

const burger = {
  all: function(cb) {
    ormFile.all("burger_name", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    ormFile.create("burger_name", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    ormFile.update("burger_name", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    ormFile.delete("burger_name", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
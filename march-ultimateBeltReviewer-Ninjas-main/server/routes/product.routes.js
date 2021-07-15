const productController = require("../controllers/product.controller")

module.exports = app => {
    app.get("/api/products/all", productController.findAllThings)
    app.post("/api/products/create", productController.createOneThing)
    app.get("/api/products/:thingid", productController.findOneThing)
    app.put("/api/products/update/:thingid", productController.updateOneThing)
    app.delete("/api/products/delete/:thingid", productController.deleteThing)
}

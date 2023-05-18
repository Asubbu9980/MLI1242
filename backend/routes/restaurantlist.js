var express=require("express")
var router=express.Router();
var cont=require("../controllers/controller")


router.get("/",cont.getlist)
router.get("/items",cont.items)
router.get("/maincourse",cont.maincourse)
router.get("/desserts",cont.desserts)
router.get("/beverages",cont.beverages)
router.post("/sign",cont.postuser)
router.post("/login",cont.loginuser)
router.post("/refresh",cont.refresh)
router.post("/logout",cont.logout)
router.post("/protected",cont.protected)
router.post("/postrest",cont.postrest)
router.post("/postmenu",cont.postmenu)
router.post("/maincourse1",cont.maincourse1)
router.post("/desserts1",cont.desserts1)
router.post("/beverages1",cont.beverages1)

module.exports=router;

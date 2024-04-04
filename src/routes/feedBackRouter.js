import express from "express";
import feedBackController from "../controllers/feedBackController";
let router = express.Router();

router.post("/create-feedback", feedBackController.handleCreateNewFeedBack);
router.delete("/delete-feedback", feedBackController.handleDeleteFeedBack);
router.put("/update-feedback", feedBackController.handleUpdateFeedBack);
router.get("/get-all-feedback", feedBackController.handleGetAllFeedBack);

export default router;

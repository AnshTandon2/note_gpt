const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");

// Route to fetch video transcript
router.get("/transcript", videoController.getVideoTranscript);

// Route to generate summary
router.post("/generate-summary", videoController.generateSummary);

// Route to generate flashcards
router.post("/generate-flashcards", videoController.generateFlashcards);

// Route to generate presentation slides
router.post("/generate-slides", videoController.generateSlides);

router.post("/ask-question", videoController.askQuestion);

module.exports = router;

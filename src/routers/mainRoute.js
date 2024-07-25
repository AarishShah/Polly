const express = require("express");
const { synthesizeSpeech } = require("../utils/polly");

const router = new express.Router();

router.post("/synthesize", async (req, res) => {
    try {
        const text = req.body.text;
        const audioStream = await synthesizeSpeech(text);
        res.set({
            'Content-Type': 'audio/mp3',
            'Content-Length': audioStream.length
        });
        res.send(audioStream);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error synthesizing speech');
    }
});

module.exports = router;

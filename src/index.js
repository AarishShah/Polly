const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const cors = require('cors');
const { Readable } = require('stream');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Get AWS credentials and region from environment variables
const awsAccessKeyId = process.env.AWS_ACCESS_KEY_ID;
const awsSecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const awsRegion = process.env.AWS_REGION;

// Create a Polly client
const polly = new AWS.Polly({
    accessKeyId: awsAccessKeyId,
    secretAccessKey: awsSecretAccessKey,
    region: awsRegion
});

app.post('/synthesize', (req, res) => {
    const text = req.body.text;

    const params = {
        Engine: 'standard',
        Text: text,
        OutputFormat: 'mp3',
        VoiceId: 'Joanna'
    };

    polly.synthesizeSpeech(params, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error synthesizing speech');
        } else if (data && data.AudioStream instanceof Buffer) {
            const audioStream = new Readable();
            audioStream._read = () => {}; // _read is required but you can noop it
            audioStream.push(data.AudioStream);
            audioStream.push(null);

            res.set({
                'Content-Type': 'audio/mp3',
                'Content-Length': data.AudioStream.length
            });

            audioStream.pipe(res);
        } else {
            res.status(500).send('Could not generate audio file');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

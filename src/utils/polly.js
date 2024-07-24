const AWS = require('aws-sdk');
const { Readable } = require('stream');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

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

const synthesizeSpeech = async (text) => {
    const params = {
        Engine: 'generative',
        Text: text,
        OutputFormat: 'mp3',
        VoiceId: 'Ruth'
    };

    return new Promise((resolve, reject) => {
        polly.synthesizeSpeech(params, (err, data) => {
            if (err) {
                reject(err);
            } else if (data && data.AudioStream instanceof Buffer) {
                resolve(data.AudioStream);
            } else {
                reject(new Error('Could not generate audio file'));
            }
        });
    });
};

module.exports = { synthesizeSpeech };

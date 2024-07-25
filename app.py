from flask import Flask, request, send_file
from flask_cors import CORS
import boto3
import os
from dotenv import load_dotenv
from io import BytesIO

# Load environment variables from .env file
load_dotenv()

# Get AWS credentials and region from environment variables
aws_access_key_id = os.getenv('AWS_ACCESS_KEY_ID')
aws_secret_access_key = os.getenv('AWS_SECRET_ACCESS_KEY')
aws_region = os.getenv('AWS_REGION')

# Create a Polly client
polly = boto3.client('polly', region_name=aws_region, 
                     aws_access_key_id=aws_access_key_id, 
                     aws_secret_access_key=aws_secret_access_key)

app = Flask(__name__)
CORS(app)

@app.route('/synthesize', methods=['POST'])
def synthesize():
    data = request.get_json()
    text = data['text']

    response = polly.synthesize_speech(
        Engine='generative',
        Text=text,
        OutputFormat='mp3',
        VoiceId='Ruth'
    )

    if "AudioStream" in response:
        audio_stream = BytesIO(response["AudioStream"].read())
        return send_file(audio_stream, mimetype='audio/mp3')
    else:
        return "Could not generate audio file", 500

if __name__ == '__main__':
    app.run(debug=True)
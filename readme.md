# AWS Polly Text-to-Speech Script

This Python script uses AWS Polly to convert text into speech.

## Prerequisites

Before running this script, make sure you have the following:

1. **Python 3.x**: Ensure you have Python 3.x installed on your system.
2. **AWS Credentials**: You need AWS access key ID and secret access key.
3. **Environment Variables**: Store your AWS credentials and region in a `.env` file.

## Setup

### Install Required Packages

Install the required Python packages using pip:

```bash
pip install boto3 python-dotenv flask flask-cors

```
If you encounter an error:

```bash
ModuleNotFoundError: No module named 'urllib3.packages.six.moves'

```
Install the required following Python packages using pip:

```bash
pip install --upgrade urllib3 botocore
```


### Create a .env File

Create a `.env` file in the same directory as your script and add your AWS credentials and region:

```
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
AWS_REGION=your_aws_region

```

### Explanation

1. **Load Environment Variables**: The script loads AWS credentials and region from a `.env` file.
2. **Create Polly Client**: It creates an AWS Polly client using the provided credentials.
3. **Synthesize Speech**: The script sends a request to AWS Polly to synthesize speech from the given text.
4. **Save Audio File**: If the response contains an audio stream, the script writes the audio stream to an MP3 file. If there's an error, it prints an error message.

## Error Handling

The script handles potential IO errors when writing the audio stream to the file. It also checks if the `AudioStream` is present in the response to ensure that the synthesis was successful.

---
## Developers

- [Syed Aarish Shah](https://www.linkedin.com/in/syed-aarish-shah-6a4811249/)
- [Khushboo Hamid](https://www.linkedin.com/in/khushboo-hamid-709967224/)

## Contribution

We welcome contributors to our project!

1. **Fork** the repository.
2. Create your **Feature Branch** (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. **Push** to the branch (`git push origin feature/AmazingFeature`).
5. Open a **Pull Request**.

## 📜 License

This project is licensed under the MIT License. For more details, please refer to the [LICENSE.md](https://opensource.org/license/mit/) file.

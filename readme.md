# Text-to-Speech Application

This project is a Text-to-Speech (TTS) application that allows users to input text and receive synthesized speech in the form of an audio file. The application uses AWS Polly for speech synthesis and consists of a React frontend and an Express backend.

## Getting Started

### Prerequisites

- Node.js
- npm
- AWS Account with Polly service access
- Environment variables set for AWS credentials

### Installation

1. **Clone the repository:**

```bash
git clone <https://github.com/AarishShah/Text-to-Speech.git>

```

1. **Install backend dependencies:**

```bash
cd backend
npm install

```

1. **Install frontend dependencies:**

```bash
cd ../frontend
npm install

```

### Running the Application Locally

1. **Start the backend server:**

```bash
cd backend
npm start

```

1. **Start the frontend application:**

```bash
cd ../frontend
npm start

```

### Usage

- Open your browser and navigate to `http://localhost:3000`.
- Enter the text you want to convert to speech.
- Click the "Convert to Speech" button.
- An audio player will appear with the synthesized speech.

### Environment Variables

Create a `.env` file in the root of your backend directory with the following content:

```
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
AWS_REGION=your_aws_region

```

### Deployment

The application is deployed on Vercel and can be accessed at: [Text to Speech](https://frontend-seven-lac-46.vercel.app/)

### File Structure

### Backend

```
backend
│
├── src
│   ├── routers
│   │   └── mainRoute.js
│   └── utils
│       └── polly.js
│   └── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── vercel.json

```

### Frontend

```
frontend
│
├── node_modules
├── public
├── src
│   ├── components
│   │   └── TextToSpeech.jsx
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

```

### Contributing

Feel free to submit issues and pull requests to contribute to the project.

### License

This project is licensed under the MIT License.
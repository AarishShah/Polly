import React, { useState } from 'react';

const TextToSpeech = () => {
    const [text, setText] = useState('');
    const [audioUrl, setAudioUrl] = useState('');

    const synthesizeSpeech = async () => {
        try {
            const response = await fetch('http://localhost:5000/synthesize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: text }),
            });

            if (!response.ok) {
                throw new Error('Error synthesizing speech');
            }

            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setAudioUrl(url);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <h1>Text to Speech</h1>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Enter text here" 
            />
            <br />
            <button onClick={synthesizeSpeech}>Convert to Speech</button>
            <br />
            {audioUrl && <audio id="audio" controls style={{ display: 'block', marginTop: '20px' }} src={audioUrl}></audio>}
        </div>
    );
};

export default TextToSpeech;

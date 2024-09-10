import React, { useState, useEffect } from 'react';
import './TeksAnimation.css';

function TeksAnimation() {
  const [text, setText] = useState('PT.BANGUN CIPTA NUSAKARYA MERUPAKAN PT KONSTRUKSI YANG LAGI DALAM PRODUKSI YANG AKAN MENJADI KONSTRUKTOR TERNAMA YANG DIBANGUN OLEH MR ZAKI');

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);

    fetch('/text-to-speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        
        // Memainkan suara yang telah dihasilkan oleh server
        const audio = new Audio('output.mp3');
        audio.play();
      })
      .catch((error) => {
        console.error('Error:', error);
      });    
  };

  useEffect(() => {
    // Set timeout untuk menjalankan handleSpeak secara otomatis setelah misalnya 2 detik
    const timeoutId = setTimeout(() => {
      handleSpeak(2);
    }, 2000); // Waktu delay dalam milidetik (misalnya 2000ms = 2 detik)

    // Membersihkan timeout jika komponen dibongkar sebelum waktunya
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="App">
      <h1>React TTS App</h1>
      <textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="4"
        cols="50"

        className='animated-text'
        // onClick={handleSpeak}
      />
      {/* <button onClick={handleSpeak}>Bacakan</button> */}
    </div>
  );
}

export default TeksAnimation;
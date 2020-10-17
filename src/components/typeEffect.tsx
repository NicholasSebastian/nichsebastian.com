import React, { useState, useEffect } from 'react';

const TypeEffect = ({ text }) => {
    const [typingText, setTypingText] = useState<string>('');
    useEffect(() => {
        if (typingText.length < text.length)
            setTimeout(() => 
                setTypingText(text.substr(0, typingText.length + 1)), 
                100);
    }, [typingText]);

    return (
        <div>{`${typingText}_`}</div>
    );
}

export default TypeEffect;
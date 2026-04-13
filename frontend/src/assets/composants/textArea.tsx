import React, { TextAreaHTMLAttributes, useRef, useEffect } from 'react';
import './textArea.css';

interface TextAreaProps extends TextAreaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, id, ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, '-');


  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // const resize = () => {
    //   textarea.style.height = 'auto';
    //   textarea.style.height = textarea.scrollHeight + 'px';
    // };

    resize();
    textarea.addEventListener('input', resize);

    return () => textarea.removeEventListener('input', resize);
  }, []);

  return (
    <div className="textarea-wrapper">
      {label && (
        <label className="textarea-label" htmlFor={textareaId}>
          {label}
        </label>
      )}
      <textarea
        ref={textareaRef}
        id={textareaId}
        className="textarea-field"
        rows={1}
        {...props}
      />
    </div>
  );
};

export default TextArea;
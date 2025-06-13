
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './PageElements';
import { PlayCircleIcon } from '../constants';

// CodeBlock Component (for displaying static code snippets)
interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'plaintext', showLineNumbers = true }) => {
  // Basic syntax highlighting can be added here using a library like Prism.js or highlight.js
  // For simplicity, this example uses a preformatted block.
  // A real implementation would parse and colorize tokens.

  const lines = code.split('\n');

  return (
    <div className="bg-neutral-800 dark:bg-black rounded-md shadow-lg my-4 overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 bg-neutral-700 dark:bg-neutral-900 text-xs text-neutral-300 dark:text-neutral-400">
        <span>{language.toUpperCase()}</span>
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="hover:text-white transition-colors"
          title="Copy to clipboard"
        >
          Copy
        </button>
      </div>
      <pre className="p-4 text-sm text-neutral-100 dark:text-neutral-200 overflow-x-auto custom-scrollbar">
        {showLineNumbers ? (
          <code className={`language-${language} flex`}>
            <span className="text-neutral-500 dark:text-neutral-600 mr-4 select-none flex-shrink-0">
              {lines.map((_, i) => `${i + 1}\n`).join('')}
            </span>
            <span className="flex-grow">{code}</span>
          </code>
        ) : (
          <code className={`language-${language}`}>{code}</code>
        )}
      </pre>
    </div>
  );
};


// CodePlayground Component (interactive HTML/CSS/JS editor)
export const CodePlayground: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState('<h1>Hello, Tech Teach!</h1>\n<p>Edit the code and click Run.</p>\n<style>\n  body { font-family: sans-serif; background-color: #f0f0f0; padding: 1rem; }\n  h1 { color: #2563eb; }\n</style>');
  const [cssCode, setCssCode] = useState('/* Add your CSS here */\nbody {\n  /* Example: overridden by style tag in HTML if present there */\n}');
  const [jsCode, setJsCode] = useState('// Add your JavaScript here\nconsole.log("Playground loaded!");');
  const [output, setOutput] = useState('');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const runCode = () => {
    const combinedHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Output</title>
        <style>
          ${cssCode}
        </style>
      </head>
      <body>
        ${htmlCode}
        <script>
          try {
            ${jsCode}
          } catch (e) {
            console.error(e);
          }
        </script>
      </body>
      </html>
    `;
    setOutput(combinedHtml);
  };

  useEffect(() => {
    runCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount with default code

  useEffect(() => {
    if (iframeRef.current && output) {
        iframeRef.current.srcdoc = output;
    }
  }, [output]);

  const EditorTextarea: React.FC<{value: string, onChange: (val: string) => void, placeholder: string, rows?: number}> = ({value, onChange, placeholder, rows = 10}) => (
    <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full p-2.5 font-mono text-sm bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-primary focus:border-primary focus:outline-none custom-scrollbar"
        spellCheck="false"
    />
  );

  return (
    <div className="bg-white dark:bg-neutral-900 shadow-xl rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-neutral-200 dark:bg-neutral-700">
        {/* Code Editors Pane */}
        <div className="p-4 bg-neutral-50 dark:bg-neutral-800/60 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">HTML</label>
            <EditorTextarea value={htmlCode} onChange={setHtmlCode} placeholder="HTML Code" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">CSS</label>
            <EditorTextarea value={cssCode} onChange={setCssCode} placeholder="CSS Code" rows={6} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">JavaScript</label>
            <EditorTextarea value={jsCode} onChange={setJsCode} placeholder="JavaScript Code" rows={6} />
          </div>
          <Button onClick={runCode} className="w-full flex items-center justify-center space-x-2">
            <PlayCircleIcon className="w-5 h-5" />
            <span>Run Code</span>
          </Button>
        </div>

        {/* Output Pane */}
        <div className="bg-white dark:bg-neutral-800">
          <iframe
            ref={iframeRef}
            title="Code Output"
            className="w-full h-[calc(3*10rem+3*6rem+120px)] lg:h-full border-none" // Adjust height based on editor sizes or make it fixed
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>
    </div>
  );
};
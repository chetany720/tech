
import React, { useState } from 'react';
import { Button } from './PageElements';

// JSON Formatter Tool
export const JsonFormatter: React.FC = () => {
  const [inputJson, setInputJson] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [error, setError] = useState('');

  const handleFormat = () => {
    try {
      if (!inputJson.trim()) {
        setError('Input JSON cannot be empty.');
        setFormattedJson('');
        return;
      }
      const parsed = JSON.parse(inputJson);
      setFormattedJson(JSON.stringify(parsed, null, 2));
      setError('');
    } catch (e: any) {
      setFormattedJson('');
      setError(`Invalid JSON: ${e.message}`);
    }
  };

  const handleClear = () => {
    setInputJson('');
    setFormattedJson('');
    setError('');
  };

  return (
    <div className="space-y-4">
      <textarea
        value={inputJson}
        onChange={(e) => setInputJson(e.target.value)}
        placeholder="Paste your JSON here..."
        rows={10}
        className="w-full p-2.5 font-mono text-sm bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-primary focus:border-primary focus:outline-none custom-scrollbar"
        spellCheck="false"
      />
      <div className="flex space-x-2">
        <Button onClick={handleFormat}>Format JSON</Button>
        <Button onClick={handleClear} variant="outline">Clear</Button>
      </div>
      {error && <p className="text-red-500 text-sm p-2 bg-red-100 dark:bg-red-900/30 rounded-md">{error}</p>}
      {formattedJson && (
        <pre className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md overflow-x-auto text-sm border border-neutral-300 dark:border-neutral-600 custom-scrollbar">
          <code>{formattedJson}</code>
        </pre>
      )}
    </div>
  );
};

// Regex Tester Tool
export const RegexTester: React.FC = () => {
  const [regexPattern, setRegexPattern] = useState('');
  const [testString, setTestString] = useState('');
  const [flags, setFlags] = useState('g');
  const [matches, setMatches] = useState<RegExpMatchArray[]>([]);
  const [error, setError] = useState('');
  const [hasTested, setHasTested] = useState(false);


  const handleTestRegex = () => {
    setHasTested(true);
    if (!regexPattern) {
        setError('Regex pattern cannot be empty.');
        setMatches([]);
        return;
    }
    try {
      const regex = new RegExp(regexPattern, flags);
      const results = Array.from(testString.matchAll(regex));
      setMatches(results);
      setError('');
    } catch (e: any) {
      setMatches([]);
      setError(`Invalid Regex: ${e.message}`);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="regex-pattern" className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">Regular Expression</label>
        <input
          id="regex-pattern"
          type="text"
          value={regexPattern}
          onChange={(e) => setRegexPattern(e.target.value)}
          placeholder="/pattern/"
          className="w-full p-2.5 font-mono text-sm bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-primary focus:border-primary focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="regex-flags" className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">Flags (e.g., gi, g, i, m)</label>
        <input
          id="regex-flags"
          type="text"
          value={flags}
          onChange={(e) => setFlags(e.target.value)}
          placeholder="g"
          className="w-full p-2.5 font-mono text-sm bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-primary focus:border-primary focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="regex-test-string" className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">Test String</label>
        <textarea
          id="regex-test-string"
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          placeholder="Enter string to test regex against..."
          rows={6}
          className="w-full p-2.5 text-sm bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-primary focus:border-primary focus:outline-none custom-scrollbar"
        />
      </div>
      <Button onClick={handleTestRegex}>Test Regex</Button>
      {error && <p className="text-red-500 text-sm p-2 bg-red-100 dark:bg-red-900/30 rounded-md">{error}</p>}
      
      {hasTested && !error && (
        <div>
          <h3 className="text-lg font-semibold mt-4 mb-2 text-neutral-800 dark:text-neutral-200">Matches ({matches.length})</h3>
          {matches.length > 0 ? (
            <ul className="list-disc list-inside bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md border border-neutral-300 dark:border-neutral-600 space-y-2">
              {matches.map((match, index) => (
                <li key={index} className="font-mono text-sm mb-1 text-neutral-700 dark:text-neutral-300">
                  <span className="bg-primary/20 dark:bg-primary-light/20 px-1 rounded">{match[0]}</span> (Index: {match.index})
                  {match.length > 1 && (
                    <ul className="list-inside list-[circle] ml-4 text-xs mt-1 space-y-0.5">
                      {Array.from(match).slice(1).map((group, groupIndex) => (
                         group !== undefined && <li key={groupIndex}>Group {groupIndex + 1}: <span className="bg-secondary/20 dark:bg-secondary-light/20 px-1 rounded">{group || 'undefined'}</span></li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-neutral-500 dark:text-neutral-400 text-sm p-2 bg-neutral-100 dark:bg-neutral-800 rounded-md border border-neutral-300 dark:border-neutral-600">No matches found.</p>
          )}
        </div>
      )}
    </div>
  );
};


// Code Minifier Tool
type Language = 'javascript' | 'css' | 'html';

export const CodeMinifier: React.FC = () => {
  const [inputCode, setInputCode] = useState('');
  const [minifiedCode, setMinifiedCode] = useState('');
  const [language, setLanguage] = useState<Language>('javascript');
  const [error, setError] = useState('');

  const minifyJS = (code: string): string => {
    // Basic: remove comments and extra whitespace.
    // Remove single line comments that are not part of a URL (e.g. http://...)
    code = code.replace(/(^|[^:])\/\/.*$/gm, '$1');
    // Remove multi-line comments
    code = code.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
    // Remove extra whitespace (very basic, might break some code if not careful with regex)
    // Preserve newlines that might be significant (e.g., for ASI) by first replacing them with a placeholder
    // This is a simplified approach, a proper minifier uses AST parsing.
    code = code.split('\n').map(line => line.trim()).filter(line => line.length > 0).join(' ');
    // Aggressively remove spaces around operators, delimiters, etc.
    code = code.replace(/\s*([;,{}()=\+\-\*\/%&|!\[\]<>?:]BA)\s*/g, '$1'); // Added more operators
    code = code.replace(/\s+/g, ' ').trim();
    return code;
  };

  const minifyCSS = (code: string): string => {
    // Basic: remove comments and extra whitespace
    code = code.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1'); // Remove comments
    code = code.replace(/\s+/g, ' '); // Collapse whitespace
    code = code.replace(/\s*([{};:,])\s*/g, '$1'); // Remove space around delimiters
    code = code.replace(/;\s*}/g, '}'); // Remove last semicolon in a block
    code = code.replace(/:\s*0(px|em|%|rem|vw|vh|vmin|vmax)/g, ':0'); // 0px -> 0
    code = code.replace(/0\s*([a-zA-Z%])/g, '0$1'); // 0 px -> 0px
    return code.trim();
  };
  
  const minifyHTML = (code: string): string => {
    // Very basic: remove comments and collapse multiple spaces.
    // This is NOT robust for complex HTML. A proper HTML minifier is much more complex.
    code = code.replace(/<!--[\s\S]*?-->/g, ''); // Remove HTML comments
    code = code.replace(/\s+/g, ' '); // Collapse whitespace
    code = code.replace(/>\s+</g, '><'); // Remove space between tags
    return code.trim();
  };

  const handleMinify = () => {
    if (!inputCode.trim()) {
        setError('Input code cannot be empty.');
        setMinifiedCode('');
        return;
    }
    try {
      let result = '';
      switch (language) {
        case 'javascript':
          result = minifyJS(inputCode);
          break;
        case 'css':
          result = minifyCSS(inputCode);
          break;
        case 'html':
          result = minifyHTML(inputCode);
          break;
        default:
          throw new Error('Unsupported language');
      }
      setMinifiedCode(result);
      setError('');
    } catch (e: any) {
      setMinifiedCode('');
      setError(`Minification error: ${e.message}. Note: This is a basic minifier and may not handle all edge cases.`);
    }
  };
  
  const handleClear = () => {
    setInputCode('');
    setMinifiedCode('');
    setError('');
  };


  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="minify-language" className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">Language</label>
        <select
          id="minify-language"
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
          className="w-full p-2.5 bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-primary focus:border-primary focus:outline-none"
        >
          <option value="javascript">JavaScript</option>
          <option value="css">CSS</option>
          <option value="html">HTML</option>
        </select>
      </div>
      <textarea
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
        placeholder={`Paste your ${language.toUpperCase()} code here...`}
        rows={10}
        className="w-full p-2.5 font-mono text-sm bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-primary focus:border-primary focus:outline-none custom-scrollbar"
        spellCheck="false"
      />
      <div className="flex space-x-2">
        <Button onClick={handleMinify}>Minify Code</Button>
        <Button onClick={handleClear} variant="outline">Clear</Button>
      </div>
      {error && <p className="text-red-500 text-sm p-2 bg-red-100 dark:bg-red-900/30 rounded-md">{error}</p>}
      {minifiedCode && (
        <div>
            <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">Minified Code</label>
            <pre className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md overflow-x-auto text-sm border border-neutral-300 dark:border-neutral-600 custom-scrollbar">
            <code>{minifiedCode}</code>
            </pre>
        </div>
      )}
    </div>
  );
};
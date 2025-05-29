export function processText(selectedText: string): string {
    const lines = selectedText.split('\n');
    
    return lines.map(line => {
        const trimmedLine = line.trim();
        
        // Skip empty lines
        if (trimmedLine === '') {
            return line;
        }
        
        // Skip lines that already have bullet points
        if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ') || trimmedLine.startsWith('+ ')) {
            return line;
        }
        
        // Skip numbered lists
        if (/^\d+\.\s/.test(trimmedLine)) {
            return line;
        }
        
        // Skip headers
        if (trimmedLine.startsWith('#')) {
            return line;
        }
        
        // Add bullet point to the line
        const leadingWhitespace = line.match(/^\s*/)?.[0] || '';
        return leadingWhitespace + '- ' + trimmedLine;
    }).join('\n');
}
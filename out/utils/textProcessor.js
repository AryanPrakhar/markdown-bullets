"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processText = void 0;
function processText(selectedText) {
    const lines = selectedText.split('\n');
    return lines.map(line => {
        var _a;
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
        const leadingWhitespace = ((_a = line.match(/^\s*/)) === null || _a === void 0 ? void 0 : _a[0]) || '';
        return leadingWhitespace + '- ' + trimmedLine;
    }).join('\n');
}
exports.processText = processText;

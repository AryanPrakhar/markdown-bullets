import * as vscode from 'vscode';
import { processText } from '../utils/textProcessor';

export function addBulletPoints() {
    const editor = vscode.window.activeTextEditor;

    if (editor) {
        const selection = editor.selection;
        const selectedText = editor.document.getText(selection);

        if (selectedText) {
            const processedText = processText(selectedText);
            editor.edit(editBuilder => {
                editBuilder.replace(selection, processedText);
            });
        }
    }
}
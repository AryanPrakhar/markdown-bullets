import * as vscode from 'vscode';
import { addBulletPoints } from './commands/addBulletPoints';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('markdown-bullet-extension.addBulletPoints', addBulletPoints);
    context.subscriptions.push(disposable);
}

export function deactivate() {}
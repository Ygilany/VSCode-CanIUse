import * as vscode from 'vscode';
import { canIUseAPI as canIUse} from './canIuseAPI';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.canIUse', () => {
        const api = new canIUse();

        return vscode.window.showInputBox({
            prompt: `Search Query`,
            placeHolder: `type in what you're looking for ...`
        })
        .then(query => {
            var searchResults = api.find(query);
            
            vscode.window.showQuickPick(searchResults, {
                placeHolder: "What?"
            })
            .then(onResolve, onRejected);   
        });

    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}

function onResolve(selected) {
    if(!selected) {
        return;
    }
    vscode.window.showInformationMessage(selected);
}

function onRejected(selected) {
    if(!selected) {
        return;
    }
    vscode.window.showInformationMessage(`rejected: ${selected}`);
}
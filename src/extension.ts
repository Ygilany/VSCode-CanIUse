import * as vscode from 'vscode';
import { canIUseAPI as canIUse} from './canIuseAPI';
const api = new canIUse();

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.canIUse', () => {

        return vscode.window.showInputBox({
            prompt: `Search Query`,
            placeHolder: `type in what you're looking for ...`
        })
        .then(query => {
            var searchResults = api.find(query);
            
            vscode.window.showQuickPick(searchResults, {
                placeHolder: "What?"
            })
            .then(onFeatureSelection, onRejected);   
        });

    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}

function onFeatureSelection(selected) {
    if(!selected) {
        return;
    }
    let support = api.getSupport(selected)
    vscode.window.showQuickPick(support, {})
}

function onRejected(selected) {
    if(!selected) {
        return;
    }
    vscode.window.showInformationMessage(`rejected: ${selected}`);
}
import { Component, Input } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';


@Component({
    selector: 'lt-copy-text',
    templateUrl: 'copy-text.component.html',
    styleUrls: ['copy-text.directive.less']
})
export class CopyTextComponent {
    @Input() value: string;

    constructor(private toastr: ToastsManager) { }

    onCopy(): void {
        this.toastr.success('Текст был успешно скопирован');
    }
}

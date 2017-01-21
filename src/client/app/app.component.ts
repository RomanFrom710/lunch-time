import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';


@Component({
    selector: 'lt-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(toastsManager: ToastsManager, viewContainer: ViewContainerRef) {
        toastsManager.setRootViewContainerRef(viewContainer);
    }
}

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ImageResult } from 'ng2-imageupload';

import { Config } from '../config';


@Component({
    selector: 'lt-image-uploader',
    templateUrl: 'image-uploader.component.html',
    styleUrls: ['image-uploader.component.less']
})
export class ImageUploaderComponent implements OnInit {
    @Input() url: string;
    @Output() imageUrlChange: EventEmitter<string> = new EventEmitter<string>();

    private imageSrc: string;
    private uploader: FileUploader;

    constructor(private config: Config) { }

    ngOnInit(): void {
        this.uploader = new FileUploader({ url: this.url });
    }

    private imageSelected(imageResult: ImageResult): void {
        this.imageSrc = imageResult.dataURL;
    }
}

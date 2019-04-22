import { Component, Input, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FileRef, FileStore } from '../../services/file-store.service';
import { FormComponent } from '../form-component';

@Component({
  selector: 'files-attach',
  templateUrl: './files-attach.component.html',
  styleUrls: ['./files-attach.component.css'],
  host: {
    "(change)": "onChange($event.target.files)",
    "(blur)": "onTouched()"
  }
})
export class FilesAttachComponent implements OnInit {

  @Input() id: string;

  private formPath: string;
  private _maxFileNumber: number;

  faTrash = faTrash;
  faUpload = faUpload;

  files: Observable<FileRef[]>;

  @Input('max-files')
  set maxFileNumber(value: number) {
    this._maxFileNumber = value;
  }

  get maxFileNumber(): number {
    return this._maxFileNumber;
  }

  constructor(private formGroupDirective: FormGroupDirective,
    private fileStore: FileStore,
    public containerForm: FormComponent) { }

  ngOnInit() {
    
    if (this.maxFileNumber < 1) {
      throw new Error("'max-files' attribute must be > 0.");
    } 

    this.formPath = `${this.containerForm.formPath}-${this.id}`;
  
    this.files = this.fileStore.files.pipe(
      map(files => files.filter(fileRef => fileRef.formPath === this.formPath))
    );    

  }

  onTouched() {  }

  onChange(event) {

    const newFile: FileList = event;

    if (newFile.length > 0) {
      const fileAttachment = newFile[0];

      const newFileRef = {
        id: this.fileStore.createId(),
        formPath: this.formPath,
        file: fileAttachment
      }

      this.fileStore.addFile(newFileRef);
    }
  }

  removeFile(fileId: string): void {

    this.fileStore.removeFile(fileId);

  };

}

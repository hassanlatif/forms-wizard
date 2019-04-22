import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type FileRef = {
  formPath: string,
  id: string,
  file: File
};

@Injectable({
  providedIn: 'root'
})
export class FileStore {

  private _files: BehaviorSubject<Array<FileRef>> = new BehaviorSubject([]);
  
  public readonly files: Observable<Array<FileRef>> = this._files.asObservable();

  constructor() {  }

  createId(): string {
    return new Date().getMilliseconds().toString();
  }

  addFile(fileRef: FileRef) {
    this._files.getValue().push(fileRef);
    this._files.next(this._files.getValue());
  }


  removeFile(fileId: string) {
    const index= this._files.getValue().findIndex(fileRef=> fileRef.id === fileId);
    this._files.getValue().splice(index, 1);
    this._files.next(this._files.getValue());
  }

  clearFiles() {
    this._files.getValue().splice(0, this._files.getValue().length);
    this._files.next(this._files.getValue());
  }
}

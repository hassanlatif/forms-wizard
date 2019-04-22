import { Component, TemplateRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Address } from '../../models/address';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'address-control',
  templateUrl: './address-control.component.html',
  styleUrls: ['./address-control.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: AddressControlComponent, multi: true }
  ]
})
export class AddressControlComponent implements ControlValueAccessor {

  modalRef: NgbModalRef;
  private _address: Address;
  submitted = false;
  addressTextForm: FormGroup;
  addressForm: FormGroup;
  addressValue: Address;

  faHome = faHome;

  onChange = (value: any) => { };

  constructor(private fb: FormBuilder,
    private modalService: NgbModal) {

    this.addressTextForm = fb.group({
      addressText: ['', Validators.required],
    });

    this.addressForm = fb.group({
      BuildingName: [''],
      StreetNumber: [''],
      StreetName: ['', Validators.required],
      StreetNumberAndName: [''],
      Suburb: ['', Validators.required],
      Postcode: ['', Validators.required],
      State: ['', Validators.required],
    });

  }

  ngOnInit() {
    this.onChange(this.addressValue)
  }

  writeValue(value: Address) {

    if (value) {
      this.addressValue = value;
      this.addressForm.patchValue(this.addressValue);
      this.addressTextForm.get('addressText').setValue(this.parseAddress(this.addressValue));
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched() { }

  get address() {
    return this._address;
  }

  set address(value: Address) {
    this._address = value;
    this.addressForm.setValue(this._address);
  }

  get f() { return this.addressForm.controls; }

  updateAddress() {
    this.submitted = true;
    this.address = this.addressForm.value;
    if (this.addressForm.invalid) {
      return;
    }
    this.modalRef.close(JSON.stringify(this.address));
  }

  openAddressForm(addressForm: TemplateRef<any>) {

    if (this.addressTextForm.get('addressText').value === '' || this.addressTextForm.get('addressText').value == null) {
      this.addressForm.reset();
    }

    this.modalRef = this.modalService.open(addressForm);

    this.modalRef.result.then((result) => {
      if (result !== 'dismissed') {
        this.addressValue = JSON.parse(result);
        this.onChange(this.addressValue);
        this.addressTextForm.get('addressText').setValue(this.parseAddress(this.addressValue));
      }
      this.submitted = false;
    }, (reason) => {
      console.log(`Address modal dismissed`);
      this.submitted = false;
    });
  }

  parseAddress(addressValue: Address) {
    const buildingName = (addressValue.BuildingName) ? addressValue.BuildingName + " " : "";
    const streetNumber = (addressValue.StreetNumber) ? addressValue.StreetNumber + " " : "";
    const streetName = (addressValue.StreetName) ? addressValue.StreetName + ", " : "";
    const suburub = (addressValue.Suburb) ? addressValue.Suburb + " " : "";    
    const postcode = (addressValue.Postcode) ? addressValue.Postcode + " " : "";    
    const state = (addressValue.State) ? addressValue.State + " " : "";    

    const address = buildingName + streetNumber + streetName + suburub + state + postcode ;
    return address;
  }

  close() {
    this.modalRef.close('dismissed');
    this.submitted = false;
  }

}

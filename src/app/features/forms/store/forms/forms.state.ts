import { FormComponent } from "../../../../shared/components/form-component";
import { HeroInfoComponent } from "../../hero-info/hero-info.component";
import { HeroFilesComponent } from "../../hero-files/hero-files.component";
import { HeroContactComponent } from "../../hero-contact/hero-contact.component";


export interface FormState {
  value: FormComponent,
  status: string,
  visited: boolean
}

export interface FormsState {
  heroInfo: FormState;
  heroFiles: FormState;
  heroContact: FormState;
  submission: { result: string, response: any }
}

export const initialState: FormsState = {

  heroInfo: {
    value: HeroInfoComponent.buildForm().value,
    status: "",
    visited: false
  },

  heroContact: {
    value: HeroContactComponent.buildForm().value,
    status: "",
    visited: false
  }, 

  heroFiles: {
    value: HeroFilesComponent.buildForm().value,
    status: "",
    visited: false
  },

  submission: {
    result: "",
    response: null
  }

};
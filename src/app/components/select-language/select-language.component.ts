import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-language',
  template: `
  <div >
    <select class="form-select" aria-label="Default select example" #langSelect (change)="translate.use(langSelect.value)">
      <option
        *ngFor="let lang of translate.getLangs()"
        [value]="lang"
        [attr.selected]="lang === translate.currentLang ? '' : null"
      >{{lang}}</option>
    </select>
    </div>


  `,
})
export class SelectLanguageComponent {
  constructor(public translate: TranslateService) { }
}

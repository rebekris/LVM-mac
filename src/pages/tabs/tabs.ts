import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ProgramacionPage } from '../programacion/programacion';
import { AportacionPage } from '../aportacion/aportacion';
import { ContactanosPage } from '../contactanos/contactanos';


@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

  inicioRoot = HomePage;
  programacionRoot = ProgramacionPage;
  aportacionRoot = AportacionPage;
  contactanosRoot = ContactanosPage;


  constructor() {}

}

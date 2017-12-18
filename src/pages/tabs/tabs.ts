import { Component } from '@angular/core';

import { ConfiguracoesPage } from '../configuracoes/configuracoes';
import { FeedPage } from '../feed/feed';
import { AtletasPage } from '../atletas/atletas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = FeedPage;  
  tab2Root = ConfiguracoesPage;
  tab3Root = AtletasPage;
  constructor() {

  }
}

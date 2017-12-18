import { Component } from '@angular/core';

import { ConfiguracoesPage } from '../configuracoes/configuracoes';
import { FeedPage } from '../feed/feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = FeedPage;  
  tab2Root = ConfiguracoesPage;

  constructor() {

  }
}

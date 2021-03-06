import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { HttpModule} from "@angular/http";
import { ConfiguracoesPageModule} from "../pages/configuracoes/configuracoes.module";
import { SobrePageModule } from "../pages/sobre/sobre.module";
import { PerfilPageModule} from "../pages/perfil/perfil.module";
import { FilmeDetalhesPageModule } from "../pages/filme-detalhes/filme-detalhes.module";
import { AtletasPageModule } from "../pages/atletas/atletas.module";
import { CartolaProvider } from '../providers/cartola/cartola';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    HttpModule,
    ConfiguracoesPageModule,
    SobrePageModule,
    PerfilPageModule,
    FilmeDetalhesPageModule,
    AtletasPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CartolaProvider    
  ]
})
export class AppModule {}

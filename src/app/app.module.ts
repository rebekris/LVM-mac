import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CallNumber } from '@ionic-native/call-number';


import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ProgramacionPage } from '../pages/programacion/programacion';
import { AportacionPage } from '../pages/aportacion/aportacion';
import { ContactanosPage } from '../pages/contactanos/contactanos';
import { NewsPage } from '../pages/news/news';

import { ConexionProvider } from '../providers/conexion/conexion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ProgramacionPage,
    AportacionPage,
    NewsPage,
    ContactanosPage
  ],
  imports: [
    BrowserModule,HttpClientModule, HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ProgramacionPage,
    AportacionPage,
    NewsPage,
    ContactanosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    InAppBrowser,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConexionProvider
  ]
})
export class AppModule {}

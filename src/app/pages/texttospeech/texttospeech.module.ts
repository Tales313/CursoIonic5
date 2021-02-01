import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';

import { IonicModule } from '@ionic/angular';

import { TexttospeechPageRoutingModule } from './texttospeech-routing.module';

import { TexttospeechPage } from './texttospeech.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TexttospeechPageRoutingModule
  ],
  declarations: [TexttospeechPage],
  providers: [TextToSpeech]
})
export class TexttospeechPageModule {}

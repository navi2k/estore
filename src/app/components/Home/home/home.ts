import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { Catnavigation } from '../components/catnavigation/catnavigation';
import { Sidenavigation } from '../components/sidenavigation/sidenavigation';
import { Productscomponent } from '../../productscomponent/productscomponent';
@Component({
  selector: 'app-home',
  imports: [ Header, Catnavigation,Sidenavigation,Productscomponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

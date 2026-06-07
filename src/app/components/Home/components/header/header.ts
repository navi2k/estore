import { Component } from '@angular/core';
import{FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  imports: [ FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
    
  faSearch= faMagnifyingGlass;
  usericon= faUserCircle;
  hearticon=faHeart;
  shoppingcarticon=faShoppingCart;


}

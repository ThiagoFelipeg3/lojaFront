import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lojaFront';

  constructor(
    private translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.translate.addLangs(['fr'])
    this.translate.setDefaultLang('fr');
  }

  ngOnInit() {

  }

  mudarIdioma(lang: string) {
    this.translate.use(lang);
  }
}

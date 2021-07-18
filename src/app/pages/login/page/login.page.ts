import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@app/modules/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {}
}

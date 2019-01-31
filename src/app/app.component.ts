import { Component } from '@angular/core';
const HTTP_TIMEOUT: number = 60000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp';
}

export interface Environment {
    mainApi: string;
    imgApi:string;
    dealImg:string;
    dealDoc:string;
    analytics?: string;
    timeout: number;
    debug: boolean;
    bypass: boolean;
    angularProd: boolean;
}
export const PROD: Environment = {
    mainApi: 'https://app.themindfulscholar.com:3000',
    imgApi:'https://app.themindfulscholar.com:3000/thumbnails/',
    dealImg:'http://18.220.217.121',
    dealDoc:'http://18.220.217.121',
    timeout: HTTP_TIMEOUT,
    debug: false,
    bypass: false,
    angularProd: false
};
export const DEV: Environment = {
    mainApi: 'https://app.themindfulscholar.com:3000',
    imgApi:'https://app.themindfulscholar.com:3000/thumbnails/',
    dealImg:'http://18.220.217.121',
    dealDoc:'http://18.220.217.121',
    timeout: HTTP_TIMEOUT,
    debug: false,
    bypass: false,
    angularProd: false
};

export const ENV: Environment = PROD;

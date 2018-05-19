import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private accessToken: string = null;
  private apiURL: string = "http://192.168.18.1:8080/api/";
  private loginURL: string = "http://192.168.18.1:9999/uaa/oauth/authorize";
  private logoutURL: string = "http://192.168.18.1:9999/uaa/logout";
  private loginClientId: string = "sample";
  private loginCallback: string = "http://localhost:8888/ionic-callback";
  public authenticatedUser: string = null;

  constructor(public navCtrl: NavController, public iab: InAppBrowser, public client: HttpClient, public change: ChangeDetectorRef) {

  }

  public getUserInfo() {
    this.client.get(this.apiURL + "user", {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.accessToken
      })
    }).subscribe(resp => {
      this.authenticatedUser = resp['details']['decodedDetails']['displayName'];

      this.change.detectChanges();
    });
  }

  public logout() {
    const browser = this.iab.create(this.logoutURL, '_blank', 'location=no,hidden=yes');

    browser.on('loadstop').subscribe(event => {
      this.accessToken = null;
      this.authenticatedUser = null;

      browser.close();
      this.change.detectChanges();
    });
  }

  public login() {

    const browser = this.iab.create(this.loginURL + '?client_id=' + this.loginClientId + '&redirect_uri=' + this.loginCallback + '&response_type=token', '_blank', 'location=no');

    browser.on('loadstop').subscribe(event => {
      if (event.url.indexOf(this.loginCallback) === 0) {
        browser.close();

        var responseParameters = ((event.url).split("#")[1]).split("&");
        var parsedResponse = {};
        for (var i = 0; i < responseParameters.length; i++) {
          parsedResponse[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
        }

        if (parsedResponse["access_token"] !== undefined && parsedResponse["access_token"] !== null) {
          this.accessToken = parsedResponse["access_token"];

          this.getUserInfo();
        }
      }
    });
  }
}

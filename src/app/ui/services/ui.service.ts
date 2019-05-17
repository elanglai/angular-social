import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(private titleService: Title, private metaService: Meta) { }

  private appColor = '#C3002F';
  private appImage = '/assets/logo.svg';
  private appTitle = 'Angular Social';
  private appDescription = 'Angular Social is a Social Netowrking App build in Angular';

  public setMetaData(config) {
    // Get the description of the config, or use the default App Description
    const description = config.description || this.appDescription

    // Get the title of the config and append the App Title, or just use the App Title
    const title = config.title ? `${config.title} - ${this.appTitle}` : this.appTitle;

    // Set the Application Title
    this.titleService.setTitle(title);

    // Add the Application Meta tags
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'theme-color', content: this.appColor });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary' });
    this.metaService.updateTag({ name: 'twitter:image', content: this.appImage });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
    this.metaService.updateTag({ name: 'apple-mobile-web-app-capable', content: 'yes' });
    this.metaService.updateTag({ name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' });
    this.metaService.updateTag({ name: 'apple-mobile-web-app-title', content: title });
    this.metaService.updateTag({ name: 'apple-touch-startup-image', content: this.appImage });
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:image', content: this.appImage });
  }

}

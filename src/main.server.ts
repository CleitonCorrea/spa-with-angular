import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api/v1',
};

export default bootstrap;

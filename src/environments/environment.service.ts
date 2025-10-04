import { Injectable } from '@angular/core';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  private _environment = environment;

  get apiUrl(): string {
    return this._environment.apiUrl;
  }

  get backendUrl(): string {
    return this._environment.backendUrl;
  }

  get isProduction(): boolean {
    return this._environment.production;
  }

  get appName(): string {
    return this._environment.appName;
  }

  get version(): string {
    return this._environment.version;
  }

  getEnvironment(): any {
    return this._environment;
  }
}

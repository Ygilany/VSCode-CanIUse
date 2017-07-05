import * as canIUse from 'caniuse-api';
import { parseSupportResponse } from './responseParse'

export class canIUseAPI {
  constructor() { 
  }

  public find(query:string): string[] { 
    const results = canIUse.find(query);
    return typeof results == `string` ? [ results ] : results;
  }

  public getSupport(feature:string) {
    const results = canIUse.getSupport(feature);

    return parseSupportResponse(results);
  }

  public setBrowserScope(scope) {
    canIUse.setBrowserScope(scope);
  }
}
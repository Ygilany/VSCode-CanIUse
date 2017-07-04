import * as canIUse from 'caniuse-api';

export class canIUseAPI {
  constructor() { 
  }

  public find(query) { 
    const results = canIUse.find(query);
    return typeof results == `string` ? [ results ] : results;
  }
}
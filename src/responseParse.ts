import { browsersHash } from "./browserHash";
export function parseSupportResponse(response) {
  const retval = [];

  for (let key in response) {
    let support_string;
    support_string = `${browsersHash[key]} `
    if(response[key].hasOwnProperty(`y`)){
      support_string += `is supported since v. ${response[key].y}`;
    }
    if(response[key].hasOwnProperty(`a`)){
      support_string += `, partially supported since v. ${response[key].a}`;
    }
    if(response[key].hasOwnProperty(`x`)){
      support_string += `, prefixed up to v. ${response[key].x}`;
    }
    if(response[key].hasOwnProperty(`n`)){
      support_string += `, unavailable up to v. ${response[key].n}`;
    }
    
    retval.push(support_string);
  }
  return retval;
}
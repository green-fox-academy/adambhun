'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

//missing : before // and / @ end
//*FIRST IDEA* substring before ':',  substring before bots, finally concat all + '/'
//*SECOND IDEA* substring counting=problem => split then rejoin like previous exercise
//start from the end of string

let first=url.split('/',1).join('');
let second=url.replace(first,'').split('bots',1).join('');

/* console.log(first);
console.log(second);
 */

url = first.concat(':', second, 'odds/')

console.log(url);
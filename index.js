const readLineSync = require('readline-sync');
const crypto = require('crypto');

const apps = 
[
{
  name: "URL Encoder decoder",
  id: 1
 
},
{
  name: "RGB/Hex Converter",
  id: 2
},
{
  name: "String Hashing",
  id:3
},
{
  name: "Base64 Encoding/Decoding",
  id:4
}

]

function getListofApps()
{ app =[];
  for (const i of apps)
  {
    app.push(i.id + ". " + i.name + "\n");
  }
  return app.join(" ");
}

function urlEncoderDecoder(){
  const choice = parseInt(readLineSync.question(`\nSelect what app you want to use \n1.Encode \n2.Decode `));
  switch(choice)
  {
    case 1:
      const urlToEncode = readLineSync.question('Enter URL\n');
      const encodedUrl = encodeURIComponent(urlToEncode);
      console.log("Encoded URL: "+encodedUrl);
      break;
    case 2:
      const urlToDecode = readLineSync.question('Enter URL\n');
      const decodedUrl = decodeURIComponent(urlToDecode);
      console.log("Decoded URL: "+decodedUrl);
      break;
    
  }
}

function base64encode(stringToEncode)
{
  const base64 = Buffer.from(stringToEncode).toString('base64');
  return base64;
}

function base64decode(stringToDecode)
{
  const base64 = Buffer.from(stringToDecode, 'base64').toString('ascii');
  return base64;
}

function base64EncoderDecoder(){
  const choice = parseInt(readLineSync.question(`\nSelect what app you want to use \n1.Encode \n2.Decode \n`));
  switch(choice)
  {
    case 1:
      const stringToEncode = readLineSync.question('Enter string\n');
      console.log("Encoded string: "+ base64encode(stringToEncode));
      break;
    case 2:
      const stringToDecode = readLineSync.question('Enter string\n');
      console.log("Decoded string: "+ base64decode(stringToDecode));
      break;
    
  }
}

function codeToHex(color)
{
  const firstLetter = parseInt(color/16).toString(16);
  const secondLetter = (((color/16).toFixed(2)-parseInt(color/16))*16).toString(16);
  return firstLetter+secondLetter;
}

function hexToColor(code)
{ const num1 = parseInt(code[0],16)*16;

  const num2 = parseInt(code[1],16);
  return num1+num2;
}
 
function md5(inputString)
{
  const algo = 'md5'; 
  const hash = crypto.createHash(algo).update(inputString).digest('hex'); 
  return hash;
}
function sha1(inputString)
{
  const algo = 'sha1'; 
  const hash = crypto.createHash(algo).update(inputString).digest('hex'); 
  return hash;
}
function sha256(inputString)
{
  const algo = 'sha256'; 
  const hash = crypto.createHash(algo).update(inputString).digest('hex'); 
  return hash;
}
function sha5121(inputString)
{
  const algo = 'sha512'; 
  const hash = crypto.createHash(algo).update(inputString).digest('hex'); 
  return hash;
}

function rgbConverter()
{
  const choice = parseInt(readLineSync.question(`\nSelect what app you want to use \n1.RGB to Hex \n2.Hex to RGB\n`));

  switch(choice)
  {
    case 1:
      const red = readLineSync.question('Enter RGB\nRed: ');
      const green = readLineSync.question('Green: ');
      const blue = readLineSync.question('Blue: ');
      const hex = codeToHex(red)+codeToHex(green)+codeToHex(blue);
      console.log(`Hex code of RGB entered is: #`+hex);
      break;

    case 2:
      const hexString = readLineSync.question('Enter hex code: ');
      const hexCode = hexString.replace("#","");
      const redNum = hexToColor(hexCode.substr(0,2));
      const greenNum = hexToColor(hexCode.substr(2,2));
      const blueNum = hexToColor(hexCode.substr(4,2));
      console.log(`RGB Color Codes \nRed:`+ redNum+`\nGreen: `+greenNum+`\nBlue: `+blueNum);
      break;
    
    
  }
}

function stringHashing()
  {
    const choice = parseInt(readLineSync.question(`\nSelect what app you want to use \n1.md5 \n2.sha-1\n3.sha-256\n4.sha512\n`));

    switch(choice)
      {
        case 1:
        {
          const inputString = readLineSync.question('Enter string: ');
          console.log(md5(inputString));
          break;
        }
        case 2:
        {
          const inputString = readLineSync.question('Enter string: ');
          console.log(sha1(inputString));
           break;
        }
        case 3:
        {
          const inputString = readLineSync.question('Enter string: ');
          console.log(sha256(inputString));
           break;
        }
        case 4:
        {
          const inputString = readLineSync.question('Enter string: ');
          console.log(sha5121(inputString));
           break;
        }
        default:
        { console.log("invalid input");}

    }
  }




const list = getListofApps();

const selectedUtilityOption = parseInt(readLineSync.question(`Welcome to utility apps. Which utility function would you like to use? \n ${list}`));

console.log("----------------------------------")
console.log("You have chosen to use the app -> "+ apps[selectedUtilityOption-1].name)

switch(selectedUtilityOption)
{
  case 1:
    urlEncoderDecoder();
    break;
  case 2:
    rgbConverter();
    break;
  case 3:
    stringHashing();
    break;
  case 4:
    base64EncoderDecoder();
    break;
  

  default:
    console.log("invalid input");
}
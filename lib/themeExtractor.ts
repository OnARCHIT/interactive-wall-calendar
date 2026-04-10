export interface ThemeColors{

  primary:string;

  secondary:string;

}


export function extractThemeColor(

  imageUrl:string

):Promise<ThemeColors>{

  return new Promise((resolve)=>{

    const img = new Image();

    img.crossOrigin = "anonymous";

    img.src = imageUrl;

    img.onload = ()=>{

      const canvas = document.createElement("canvas");

      const ctx = canvas.getContext("2d");

      if(!ctx){

        resolve(defaultTheme);

        return;

      }

      canvas.width = img.width;

      canvas.height = img.height;

      ctx.drawImage(img,0,0);


      const data = ctx.getImageData(

        0,
        0,
        canvas.width,
        canvas.height

      ).data;


      let r=0,g=0,b=0;

      let count=0;


      for(let i=0;i<data.length;i+=40){

        r += data[i];

        g += data[i+1];

        b += data[i+2];

        count++;

      }


      r = Math.round(r/count);

      g = Math.round(g/count);

      b = Math.round(b/count);


      const primary = `rgb(${r},${g},${b})`;

      const secondary = lighten(primary,40);


      resolve({

        primary,

        secondary

      });

    };

  });

}


function lighten(

  rgb:string,

  percent:number

){

  const nums = rgb.match(/\d+/g);

  if(!nums) return rgb;

  const [r,g,b] = nums.map(Number);

  return `rgb(

    ${Math.min(255,r+percent)},

    ${Math.min(255,g+percent)},

    ${Math.min(255,b+percent)}

  )`;

}


const defaultTheme = {

  primary:"#6366f1",

  secondary:"#e0e7ff"

};
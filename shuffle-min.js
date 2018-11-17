const shuffle=m=>{const f=Math.random;let i=m.length;while(i!==0){const a=m[--i],b=(f()*i)<<0;m[b]=m[i];m[i]=a};return m};

const rand=Math.random,shuffled=m=>{
	for(let x,e,i=m.length,r=rand;i!==0;x=(r()*i)|0,e=m[--i],m[i]=m[x],m[x]=e);
	return m
};

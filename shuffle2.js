const shuffled=m=>{
	const r=Math.random;
	for(let x,e,i=m.length;i!==0;x=(r()*i)|0,e=m[--i],m[i]=m[x],m[x]=e);
	return m
};

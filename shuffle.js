const shuffle=m=>{
	const f=Math.random;
	let i=m.length;
	while(i!==0){
		const a=m[--i],b=(f()*i)<<0;
		m[b]=m[i];
		m[i]=a
	};
	return m;
};

//console.log(shuffle([1,2,3,4,5,6,7,8,9,10,11,12]));

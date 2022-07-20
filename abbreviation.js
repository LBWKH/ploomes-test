function abbreviation(a, b) {
  let j=0;
  let str="";
  for(let i=0; i<a.length; i++){
      if(a[i].toUpperCase()===b[j] && j<=b.length){
          str += a[i].toUpperCase();
          j++;
          continue;
      }else if(a[i]===a[i].toUpperCase() && a[i] !== str[str.length-1]){
          return 'NO'};
  }
  return (str===b) ? 'YES': 'NO';
}
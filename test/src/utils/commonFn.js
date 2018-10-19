export function offset(curEle) {
  if (!curEle) return {}
  let totalLeft = null,totalTop = null,par = curEle.offsetParent;
  //首先加自己本身的左偏移和上偏移
  totalLeft+=curEle.offsetLeft;
  totalTop+=curEle.offsetTop
  //只要没有找到body，我们就把父级参照物的边框和偏移也进行累加
  while(par){
    if(navigator.userAgent.indexOf("MSIE 8.0")===-1){
      //累加父级参照物的边框
      totalLeft+=par.clientLeft;
      totalTop+=par.clientTop
    }
     
    //累加父级参照物本身的偏移
    totalLeft+=par.offsetLeft;
    totalTop+=par.offsetTop
    par = par.offsetParent;
  }

  return{
    left:totalLeft,
    top:totalTop
  }
}

export function formatMoney(num) {
  return String(Math.floor(Number(num) * 100) / 100 )
       .replace(/\d(?=(\d{3})+\.)/g, '$&,')
    // .toFixed(2)
    // .replace(/\d(?=(\d{3})+\.)/g, '$&,')
  // return Number(num).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}



import '@/asset/style.less'
import api from '@/asset/api'

console.warn('process.env.NODE_ENV:', process.env.NODE_ENV)

function Reply (){
  // api.getWX().then(res=>{
  //   let {wxCode: code, msg} = res
  //   console.log(res)
  //   if(code){
  //     amountNode.innerText = (amountNode.innerText- 0) +1
  //     setTimeout(()=>{
  //       Reply ()
  //     }, 1000)
  //   }
  // })
  api.getVisitingInfo().then(res=>{
    let { visitCounts } = res
      console.log(res)
    if(visitCounts){
      amountNode.innerText = (amountNode.innerText- 0) +1
      setTimeout(()=>{
        Reply ()
      }, 1000)
    }
  })
}

let mockWX = document.getElementById('mockWX')
let amountNode = document.getElementById('amount')

mockWX.onclick = ()=>{
  Reply()
}



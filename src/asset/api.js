import axios from 'axios';

class Api {

  constructor(){
    this.prePath = process.env.NODE_ENV === 'production' ? '' : '/api'
  }
  getHome(){
    let path = this.prePath + '/home'
    axios.get(path).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  
  getDefault(){
    let path = this.prePath + ''
    axios.get(path).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }

  async serch(name){
    let path = this.prePath + `/serch`
    const res = await axios.post(path, { name });
    console.log(res);
    let list = res.data.data;
    return list;
  }

  async getWX(){
    let path = this.prePath + `/wx`
    const res = await axios.get(path);
    // console.log(res);
    let list = res.data.data;
    return list;
  }

  async getVisitingInfo(){
    let path = this.prePath + `/getVisitingInfo`
    const res = await axios.get(path);
    // console.log(res);
    let data = res.data.data;
    return data;
  }
}

export default new Api()
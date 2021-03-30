let e=0;self.onmessage=e=>{console.log("worker:收到主线程的消息"+e.data)},setInterval((()=>{console.log(e),e%5==0&&self.postMessage("每过五秒发送一次"),e++}),1e3);

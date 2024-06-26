async function runExample() {

    var x = new Float32Array( 1, 8 )

    var x = [];

     x[0] = document.getElementById('box1').value;
     x[1] = document.getElementById('box2').value;
     x[2] = document.getElementById('box3').value;
     x[3] = document.getElementById('box4').value;
     x[4] = document.getElementById('box5').value;
     x[5] = document.getElementById('box6').value;
     x[6] = document.getElementById('box7').value;
     x[7] = document.getElementById('box8').value;

    let tensorX = new onnx.Tensor(x, 'float32', [1, 8]);

    let session = new onnx.InferenceSession();

    await session.loadModel("./DLnet_ConcreteData.onnx");
    let outputMap = await session.run([tensorX]);
    let outputData = outputMap.get('output1');

   let predictions = document.getElementById('predictions');

  predictions.innerHTML = ` <hr> Got an output tensor with values: <br/>
   <table>
     <tr>
       <td>  Concrete Compressive Strength  </td>
       <td id="td0">  ${outputData.data[0].toFixed(2)}  </td>
     </tr>
  </table>`;
    


}

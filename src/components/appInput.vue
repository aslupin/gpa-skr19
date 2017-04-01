
<template>
  <div class="appInput">
        <div class="container">
            <div class="row">


                <form class="form-inline">
                    <div class="form-group">

                        <label for="inputFistName">ห้อง</label>
                        <select class="form-control" id="room-select">
                                 <option value="607">ม.607 | sci-math (engineer)</option>
                                <option value="605">ม.605 | sci-math (health-sci)</option>
                               
                            </select>
                    </div>
                    </form>
                  

  <div class="col-xs-12 col-sm-12 col-md-6 ">
                    <table class="table table-condensed" style="color:#000;font-size:17.3px;">
                        <thead>
                            <tr>
                                <th>วิชา</th>
                                <th>เกรด</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>ภาษาไทย</td>
                                    <td >
                                   <input type="number" step="0.01" size="1"  maxlength="4" class="form-control" id="s1" placeholder="4.00">
                                    </td>
                            </tr>
                             <tr>
                                <td>คณิตศาสตร์</td>
                                    <td >
                                   <input type="number" step="0.01" size="1"  maxlength="4" class="form-control" id="s2" placeholder="4.00">
                                    </td>
                            </tr>
                             <tr>
                                <td>คณิตศาสตร์-เพิ่มเติม</td>
                                    <td >
                                   <input type="number" step="0.01" size="1"  maxlength="4" class="form-control" id="s3" placeholder="4.00">
                                    </td>
                            </tr>
                              <tr>
                                <td>ฟิสิกส์-เพิ่มเติม</td>
                                    <td >
                                   <input type="number" step="0.01" size="1"  maxlength="4" class="form-control" id="s4" placeholder="4.00">
                                    </td>
                            </tr>
                             <tr>
                                <td>เคมี-เพิ่มเติม</td>
                                    <td >
                                   <input type="number" step="0.01" size="1"  maxlength="4" class="form-control" id="s5" placeholder="4.00">
                                    </td>
                            </tr>
                             <tr>
                                <td>ชีววิทยา-เพิ่มเติม</td>
                                    <td >
                                   <input type="number" step="0.01" size="1"  maxlength="4" class="form-control" id="s6" placeholder="4.00">
                                    </td>
                            </tr>
                         
                            
                        </tbody>
                    </table>
</div>
<div class="col-xs-12 col-sm-12 col-md-6 ">
                    <table class="table table-condensed" style="color:#000;font-size:17.3px;">
                        <thead>
                            <tr>
                                <th>วิชา</th>
                                <th>เกรด</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>สังคมศึกษา</td>
                                    <td >
                                   <input type="number" step="0.01" size="1"  maxlength="4" class="form-control" id="s7" placeholder="4.00">
                                    </td>
                            </tr>
                             <tr>
                                <td>สุขศึกษาเเละพลศึกษา</td>
                                    <td >
                                   <input type="number" step="0.01" size="1"  maxlength="4" class="form-control" id="s8" placeholder="4.00">
                                    </td>
                            </tr>
                             <tr>
                                <td>ทัศนศิลป์</td>
                                    <td >
                                   <input type="number" step="0.01" size="1"  maxlength="4" class="form-control" id="s9" placeholder="4.00">
                                    </td>
                            </tr>
                             <tr>
                                <td>การงานอาชีพ</td>
                                    <td >
                                   <input type="number" step="0.01" size="1"  maxlength="4" class="form-control" id="s10" placeholder="4.00">
                                    </td>
                            </tr>
                             <tr>
                                <td>คอมพิวเตอร์</td>
                                    <td >
                                   <input type="number" step="0.01" size="1"  maxlength="4" class="form-control" id="s11" placeholder="4.00">
                                    </td>
                            </tr>
                             <tr>
                                <td>Eng</td>
                                    <td >
                                   <input type="number" step="0.01" size="1"  maxlength="4" class="form-control" id="s12" placeholder="4.00">
                                    </td>
                            </tr>
                              <tr>
                                <td>Eng-T</td>
                                    <td >
                                   <input type="number" step="0.01" size="1"  maxlength="4" class="form-control" id="s13" placeholder="4.00">
                                    </td>
                            </tr>
                            
                        </tbody>
                    </table>

                    
</div>


 
 
 <button  v-on:click="greet" class="btn btn-success">Success</button>
 

<div style="padding-top:200px;"></div>
            </div>

            <!-- /.Row-->
        </div>
        <!-- /.Container-->
   </div>

    
</template>

<script>
/* eslint-disable */
export default {
  name: 'appInput',
  data () {
    return {
        
          rm605:[1.0,1.0,2.0,1.5,1.5,1.5,1.0,1.0,1.0,1.0,1.0,1.0,1.0],
          rm607:[1.0,1.0,2.0,1.5,1.5,1.5,1.0,1.0,1.0,1.0,1.0,1.0,1.0]
    }
  },
  methods:{
    greet: function(){
        var e = document.getElementById("ddlViewBy");


     var selectRoom = document.getElementById("room-select");
     var dataUnit = selectRoom.options[selectRoom.selectedIndex].value;
     //alert(dataUnit);
      var sumUnit = 15.5;
      var sumScUnit = 0.0;
     for(var i =0;i<=12;i++){
         if(dataUnit == 607)
         sumScUnit += (this.rm607[i] * document.getElementById("s" + (i+1)).value);
         else if(dataUnit == 605) 
         sumScUnit += (this.rm605[i] * document.getElementById("s" + (i+1)).value);
      }
      var gpa = sumScUnit/sumUnit;
      if(gpa != 0)
      alert('gpa = ' + gpa);
      else
      alert("ใส่ข้อมูลให้ครบด้วยครับ :D");
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.appInput{
   font-family: 'Kanit', sans-serif;
}
h1, h2 {
  font-weight: normal;
}

ul { 
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

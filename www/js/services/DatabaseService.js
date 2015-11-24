IonicCheckIn.factory('DatabaseService', function($cordovaSQLite, $ionicPlatform, $timeout) {
  var db = null;
  var list = [{"std_id":"5510110011","firstname":"กฤตมุข","lastname":"ปาปี","gender":"ชาย"},
              {"std_id":"5510110036","firstname":"จตุพล","lastname":"ลิ้มจู","gender":"ชาย"},
              {"std_id":"5510110041","firstname":"จักริน","lastname":"แซ่ปึ่ง","gender":"ชาย"},
              {"std_id":"5510110049","firstname":"จิรัฐติ","lastname":"วิชาธิคุณ","gender":"ชาย"},
              {"std_id":"5510110069","firstname":"ชิตพล","lastname":"ทองฉิม","gender":"ชาย"},
              {"std_id":"5510110073","firstname":"ชุติมา","lastname":"เสนสิงห์","gender":"หญิง"},
              {"std_id":"5510110082","firstname":"ณฐพร","lastname":"เลิศวิทยาวิวัฒน์","gender":"ชาย"},
              {"std_id":"5510110084","firstname":"ณวพล","lastname":"หอประยูร","gender":"ชาย"},
              {"std_id":"5510110086","firstname":"ณัฐชนน","lastname":"ปิ่นทอง","gender":"ชาย"},
              {"std_id":"5510110087","firstname":"ณัฐณิชา","lastname":"ธรรมโชติ","gender":"หญิง"},
              {"std_id":"5510110132","firstname":"ธนาพล","lastname":"อนันตชัยวณิช","gender":"ชาย"},
              {"std_id":"5510110135","firstname":"ธวัชชัย","lastname":"กลิ่นหอม","gender":"ชาย"},
              {"std_id":"5510110138","firstname":"ธัญชนก","lastname":"เนาว์สุวรรณ","gender":"หญิง"},
              {"std_id":"5510110141","firstname":"ธันวา","lastname":"หนูพลอย","gender":"ชาย"},
              {"std_id":"5510110147","firstname":"ธีรัช","lastname":"แก้วประดับ","gender":"ชาย"},
              {"std_id":"5510110168","firstname":"นันทนัช","lastname":"กสิพงศ์ไพศาล","gender":"หญิง"},
              {"std_id":"5510110178","firstname":"บุษบา","lastname":"สระรักษ์","gender":"หญิง"},
              {"std_id":"5510110183","firstname":"ปฐมาภรณ์","lastname":"สุขการณ์","gender":"หญิง"},
              {"std_id":"5510110230","firstname":"สุภัคชญา","lastname":"เจริญสุข","gender":"หญิง"},
              {"std_id":"5510110240","firstname":"ฟาตีเม๊าะ","lastname":"ยูโซะ","gender":"หญิง"},
              {"std_id":"5510110245","firstname":"ภัทรานิษฐ์","lastname":"มุสิกะประยูร","gender":"หญิง"},
              {"std_id":"5510110246","firstname":"ภัทราวุธ","lastname":"รักปลอด","gender":"ชาย"},
              {"std_id":"5510110248","firstname":"ภาณุ","lastname":"แจ่มใส","gender":"ชาย"},
              {"std_id":"5510110266","firstname":"รณกฤต","lastname":"ทองซ้อนกลีบ","gender":"ชาย"},
              {"std_id":"5510110274","firstname":"ฤชากร","lastname":"ทองฤทธิ์","gender":"ชาย"},
              {"std_id":"5510110302","firstname":"วิศิษฎ์","lastname":"พรหมณะ","gender":"ชาย"},
              {"std_id":"5510110329","firstname":"ศิริกุล","lastname":"อรุณรุ่งเรื่อง","gender":"หญิง"},
              {"std_id":"5510110331","firstname":"ศิริพล","lastname":"ปัญญาธิโป","gender":"ชาย"},
              {"std_id":"5510110350","firstname":"สถิตคุณ","lastname":"สิริกุลสัมพันธ์","gender":"ชาย"},
              {"std_id":"5510110355","firstname":"สรศักดิ์","lastname":"ยังสถิตย์","gender":"ชาย"},
              {"std_id":"5510110361","firstname":"สหรัฐ","lastname":"ชูแสวง","gender":"ชาย"},
              {"std_id":"5510110364","firstname":"สาธิต","lastname":"รูปประดิษฐ์","gender":"ชาย"},
              {"std_id":"5510110366","firstname":"สิทธินนท์","lastname":"สิลมัฐ","gender":"ชาย"},
              {"std_id":"5510110369","firstname":"สุกัญญา","lastname":"บิลสัน","gender":"หญิง"},
              {"std_id":"5510110387","firstname":"สุรางคณางค์","lastname":"จิตต์วรจินดา","gender":"หญิง"},
              {"std_id":"5510110402","firstname":"อภิวัฒน์","lastname":"ช้างรบ","gender":"ชาย"},
              {"std_id":"5510110405","firstname":"อภิสิทธิ์","lastname":"ดาวเวียง","gender":"ชาย"},
              {"std_id":"5510110422","firstname":"อับดุลฮากีม","lastname":"มะยี","gender":"ชาย"},
              {"std_id":"5510110424","firstname":"อับดุลเราะห์มาน","lastname":"หลีดีใจ","gender":"ชาย"},
              {"std_id":"5510110430","firstname":"อารีฟ","lastname":"วารัม","gender":"ชาย"},
              {"std_id":"5510110438","firstname":"เกริกบุรี","lastname":"จันทร์พริ้ม","gender":"ชาย"},
              {"std_id":"5510110467","firstname":"กฤตนัย","lastname":"จันทนลักษณ์","gender":"ชาย"},
              {"std_id":"5510110468","firstname":"กฤติชาติ","lastname":"พระภายไชย","gender":"ชาย"},
              {"std_id":"5510110500","firstname":"ธนมาศ","lastname":"อ่อนสนิท","gender":"หญิง"},
              {"std_id":"5510110504","firstname":"ณพิศุทธิ์","lastname":"ไชยแค","gender":"ชาย"},
              {"std_id":"5510110505","firstname":"ณภัทร","lastname":"ว่องพรรณงาม","gender":"ชาย"},
              {"std_id":"5510110514","firstname":"ณัฐปภัสร์","lastname":"จูตะกานนท์","gender":"หญิง"},
              {"std_id":"5510110524","firstname":"ทวีพงษ์","lastname":"พิสุทธิ์เธียร","gender":"ชาย"},
              {"std_id":"5510110551","firstname":"บัยยีนะห์","lastname":"ประเสริญดำ","gender":"หญิง"},
              {"std_id":"5510110577","firstname":"พีรยุทธ","lastname":"สุทธิปาโล","gender":"ชาย"},
              {"std_id":"5510110580","firstname":"ภาณุพงศ์","lastname":"อิสระลักษณ์","gender":"ชาย"},
              {"std_id":"5510110588","firstname":"มนตรี","lastname":"วงศ์รัศมีโชติ","gender":"ชาย"},
              {"std_id":"5510110604","firstname":"วรกฤช","lastname":"สุนทรธรรมนิติ","gender":"ชาย"},
              {"std_id":"5510110637","firstname":"สฤษฎ์","lastname":"สุญาสิทธิ์","gender":"ชาย"},
              {"std_id":"5510110639","firstname":"สิรวิชญ์","lastname":"ดรุณพันธ์","gender":"ชาย"},
              {"std_id":"5510110650","firstname":"สุไลมาน","lastname":"วงศ์สอนธรรม","gender":"ชาย"},
              {"std_id":"5510110654","firstname":"อภิชาต","lastname":"และดัม","gender":"ชาย"},
              {"std_id":"5510110661","firstname":"อรรถพล","lastname":"ชูชื่น","gender":"ชาย"},
              {"std_id":"5510110663","firstname":"อรรถพล","lastname":"เพชรมุณี","gender":"ชาย"},
              {"std_id":"5510110688","firstname":"ไพโรจน์","lastname":"พงศ์ศิริภักดี","gender":"ชาย"},
              {"std_id":"5510110730","firstname":"ศศิภา","lastname":"ทุ่มขนอน","gender":"หญิง"},
              {"std_id":"5510110744","firstname":"อัฟนาน","lastname":"อุเซ็ง","gender":"ชาย"},
              {"std_id":"5535512010","firstname":"ชญานิน","lastname":"ยวงใย","gender":"ชาย"},
              {"std_id":"5535512036","firstname":"ปิยะเทพ","lastname":"พรหมฤทธิ์","gender":"ชาย"}];

  function insertAllStudent(){
    for(var i = 0 ; i < list.length ; i++){
      var query = "INSERT INTO student (std_id, firstname, lastname, gender) VALUES (?, ?, ?, ?)";
      $cordovaSQLite.execute(db, query, [list[i].std_id, list[i].firstname, list[i].lastname, list[i].gender]).then(function(result){
        //console.log(result);
      }, function(error){
        console.log(error);
      })
    }
  }

  // $ionicPlatform.ready(function() {
  //   $timeout(function(){
  //     //insertAllStudent();
  //   }, 100);
  // });


  return {
    get: function(){
      return db;
    },
    set: function(dbObject){
      db = dbObject;
    },
    init: function(){
      console.log("initializing...");
      insertAllStudent();
      console.log("done.");
    }
  };
});
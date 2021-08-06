//엘리먼트들에 대한 데이터를 테이블 형식으로 화면에 표현하기

function makeTable(elem){         // elem: [Row, Row, ...]
   $table = $("<table border=1>");      // var를 생략하면 window 객체가 된다. 자바 스크립트에서 사용 할 수 있다.  
   // JS 더 공부하고 싶으면 'js 변수 호이스팅' 공부해보기
   
   //컬럼 정의하기
   for(var i =0; i<1;i++){
      $tr=$("<tr>");
      for(var j=0; j<elem.eq(0).children().length;j++){
         $td=$("<td>").append(elem.eq(0).children().eq(j).prop("tagName"));
         $tr.append($td);
      }
      $table.append($tr);
   }
   
   //데이터 넣기
   for(var i =0; i<elem.length;i++){
      $tr=$("<tr>");
      for(var j=0; j<elem.eq(i).children().length;j++){
         $td=$("<td>").append(elem.eq(i).children().eq(j).text());
         $tr.append($td);
      }
      $table.append($tr);
   }
   
   //만들어진 테이블 반환
   return $table;
}



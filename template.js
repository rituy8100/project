module.exports={
    list:function(topics){
        var list='';
        var i=topics.length-1;
        while(0<=i){
            list=list+`<tr class="table_content">
            <td>${i+1}</td>
            <td class="table_title"><a href="/note/page/${topics[i].id}">${topics[i].title}</a></td>
            <td>익명</td>
            <td>${topics[i].date.getHours()}:${topics[i].date.getMinutes()}</td>
            <td>${topics[i].visit}</td>
          </tr>`;
          i=i-1;
        }
        return list;
    }
}
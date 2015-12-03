var nameList = [];
function deSelect(obj){
  if($( obj ).hasClass( "active" )){
    $(obj).removeClass('active');
    var index = nameList.indexOf($(obj).attr('name'));
    if(index === -1){
      nameList.push($(obj).attr('name'));
    }else{
      nameList.splice(index, 1);
    }
  }else{
    $(obj).addClass('active');
    var index = nameList.indexOf($(obj).attr('name'));
    nameList.splice(index, 1);
  }
  var output = "";
  nameList.forEach(function(name, key){
    name = '.' + name;
    console.log(key);
    if(nameList.length >1 && key+1 < nameList.length){
      name = name + ', ';
    }
    output += name;
  });
  $("#code").html(output + '&#123;' + '\n' + 'display: none;' + '\n' + '&#125;');
}
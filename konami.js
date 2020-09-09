<script>
    var keyList = '';
    const final = "38384040373937396665"
    var acceptableCodeList = [38,40,37,39,65,66];
    document.onkeydown = checkKey;
    function checkKey(e) {
      if(acceptableCodeList.includes(e.keyCode)){
        keyList += e.keyCode + '';
      }
      else{
        keyList = '';
      };
      if(keyList.endsWith(final))
      {
        alert("❤️x30")
        keyList = '';
      }
    }
</script>
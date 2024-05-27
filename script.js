function submitForm() {
    
    let resultFlag = false;

    // var inputValue1 = document.getElementById("00NIR000009MUiq").value;
    var inputValue2 = document.getElementById("00NIR000009MQGr").value;
    var inputValue3 = document.getElementById("00NIR000009MQGw").value;
    var inputValue4 = document.getElementById("00NIR000009MV50").value;
    var inputValue5 = document.getElementById("00NIR000009MQHz").value;
    var inputValue6 = document.getElementById("email").value;
    var inputValue7 = document.getElementById("00NIR000009MQHu").value;
    var inputValue8 = document.getElementById("00NIR000009MQIT").value;
//    var inputValue9 = document.getElementById("00NIR000009MQId").value;
    
    if (!inputValue2 || !inputValue3 || !inputValue4 || !inputValue5 || 
    !inputValue6 || !inputValue7 || !inputValue8 || !inputValue9) {
      alert("필수 입력 값이 비어 있습니다. 입력 값을 확인해주세요.");
      return resultFlag;
    } else {
      document.getElementById("myForm").submit();
    }
  }
var qwertyLayout = [
  '1234567890-' + $.keypad.CLEAR, 
  $.keypad.HALF_SPACE + 'QWERTYUIOP' + $.keypad.SPACE + $.keypad.BACK, 
  $.keypad.SPACE + 'ASDFGHJKL',
  $.keypad.HALF_SPACE + $.keypad.SPACE +  $.keypad.SPACE  + 'ZXCVBNM' + $.keypad.HALF_SPACE + $.keypad.SPACE + $.keypad.SPACE + $.keypad.SPACE + $.keypad.ENTER,
];

$('#inlineKeypadChar').keypad({ target: $('#defaultKeypadChar'),
  layout:qwertyLayout,
  onKeypress: function(key, value, inst) {
    if (key == '\r') { // Enter key
      alert($(this).val());
    }
  }
});

var customNumberKeys = [
  ['ZERO', 'zero', 0],
  ['ONE', 'one', 1],
  ['TWO', 'two', 2],
  ['THREE', 'three', 3],
  ['FOUR', 'four', 4],
  ['FIVE', 'five', 5],
  ['SIX', 'six', 6],
  ['SEVEN', 'seven', 7],
  ['EIGHT', 'eight', 8],
  ['NINE', 'nine', 9]
];

customNumberKeys.forEach(customNumberKey => {
  $.keypad.addKeyDef(customNumberKey[0], customNumberKey[1], function (inst) {
    this.val(this.val() + String(customNumberKey[2])).focus();
  });
});

$.keypad.addKeyDef('MINUS', 'minus', function (inst) {
  let val = Number(this.val())
  if (val != 0 && !isNaN(val))
    this.val(val * -1).focus();
  else if (this.val().length == 0)
    this.val('-').focus();
});

$('#inlineKeypadNum').keypad({target: $('#defaultKeypadNum'),
  keypadOnly: false,
  zeroText: '0',
  zeroStatus: '',
  oneText: '1',
  oneStatus: '',
  twoText: '2',
  twoStatus: '',
  threeText: '3',
  threeStatus: '',
  fourText: '4',
  fourStatus: '',
  fiveText: '5',
  fiveStatus: '',
  sixText: '6',
  sixStatus: '',
  sevenText: '7',
  sevenStatus: '',
  eightText: '8',
  eightStatus: '',
  nineText: '9',
  nineStatus: '',
  minusText: '+ / -',
  minusStatus: '',
  plusText: '+',
  plusStatus: '',
  layout: [
      $.keypad.SEVEN + $.keypad.EIGHT + $.keypad.NINE + $.keypad.CLEAR,
      $.keypad.FOUR + $.keypad.FIVE + $.keypad.SIX + $.keypad.BACK,
      $.keypad.ONE + $.keypad.TWO + $.keypad.THREE,
      '.' + $.keypad.ZERO + $.keypad.MINUS + $.keypad.ENTER,
  ],
  onKeypress: function(key, value, inst) {
    if (key == '\r') { // Enter key
      // alert($(this).val());

      var apiUrl = 'http://10.40.25.132/CallFloor?params='+ $(this).val();
      fetch(apiUrl).then(response => {
        return response.json();
      }).then(data => {
        // Work with JSON data here
        console.log(data);
      }).catch(err => {
        // Do something for an error here
      });




    }
  }});
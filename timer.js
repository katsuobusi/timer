(function(){
    window.onload = function(){
        var nowTime = document.getElementById('nowTime'),
            setTime = document.getElementById('setTime'),
            setTime2 = [],
            setTime2Index,
            nowNumber,
            setNumber,
            timeIndex = [],
            stopButton,
            pushButton = document.getElementById('push'),
            deleteButton = document.getElementById('delete'),
            hoursValue = document.getElementById('hoursValue'),
            minutesValue = document.getElementById('minutesValue'),
            dateSeconds = 0,
            dateHours = 0,
            dateMinutes = 0,
            i = 0,
            i2 = 0,
            flag = true,
            flag2 = false;

        document.getElementById('oooo').onclick = function(){
          hantei();
        }//テストに使ってる〜

        document.getElementById('hoursPlus').onclick = function(){
            plusCounter(hoursValue);
        };
        document.getElementById('hoursMinus').onclick = function(){
            minusCounter(hoursValue);
        }//hoursの+-の処理

        document.getElementById('minutesPlus').onclick = function(){
            plusCounter(minutesValue);
        };
        document.getElementById('minutesMinus').onclick = function(){
            minusCounter(minutesValue);
        };//minutesの+-の処理

        function minusCounter(minusTime){
            if(minusTime.value >= 1){
                minusTime.value--;
            }
        }//0以下にはしないためのやつ

        function plusCounter(plusTime){
            if(plusTime.value <= 59 && plusTime === minutesValue){
                plusTime.value++;
            }else if(plusTime.value <= 22 && plusTime === hoursValue){
                plusTime.value++;
            }
        }//61以上と23以上にしないためのやつ

        function hantei(){
          if (timeIndex[setTime2Index] == nowNumber) {
            console.log(timeIndex, setTime2Index);
            return setTime2Index;
          }else{
            console.log('ok');
            setTime2Index++;
            return setTime2Index;
          }
        }

        function ring() {
            document.getElementById('alarm').play();
        }//setTimeとnowTimeが同じだったときの処理

        pushButton.onclick = function(){
            if(hoursValue.value <= 9){
                var setHours = '0' + hoursValue.value;
            }else{
               setHours = hoursValue.value;
            }
            if(minutesValue.value <= 9){
                var setMinutes = '0' + minutesValue.value;
            }else{
                setMinutes = minutesValue.value;
            }

            setNumber = setHours + ':' + setMinutes;
            timeIndex.push(setNumber);
            setTime = document.createElement('h2');
            setTime.id = i;
            setTime.value = flag;
            setTime2.push(setTime.value);

            document.getElementById('oue').appendChild(setTime);
            setTime.innerText = timeIndex[i];


            setTime2Index = setTime2.indexOf(true);
            console.log(hantei());

            // setTime.onclick = function(){
            //   console.log('ok')
            // }
            stopButton = document.createElement('button');
            stopButton.innerText = 'とぅるえ';
            stopButton.id = stop;
            document.getElementById(i).appendChild(stopButton);
            // function oopo(stopButton){
            //   console.log(stopButton.target.parentNode)
            // }
            // stopButton.addEventListener('click', oopo, false);
            // stopButton.onclick = function(){
            //   //console.log(stopButton.parentNode);
            //     if(stopButton.parentNode.value === true){
            //       stopButton.parentNode.value = false;
            //       stopButton.innerText = 'ふぁるせ';
            //       //console.log(stopButton.parentNode.value)
            //     }else if(stopButton.parentNode.value === false){
            //       stopButton.parentNode.value = true;
            //       stopButton.innerText = 'とぅるえ';
            //       //console.log(stopButton.parentNode.value);
            //     }
            // }
            stopButton.onclick = function(setTime){
              //console.log(stopButton.parentNode);
                if(setTime2[setTime.target.parentNode.id] === true){
                  setTime2[setTime.target.parentNode.id] = false;
                  setTime.target.innerText = 'ふぁるせ';
                  //console.log(setTime.target.parentNode.value)
                }else if(setTime2[setTime.target.parentNode.id] === false){
                  setTime2[setTime.target.parentNode.id] = true;
                  setTime.target.innerText = 'とぅるえ';
                  //console.log(setTime.target.parentNode.value);
                }
            }
            i++;
        }//設定する時間の処理

        deleteButton.onclick = function(){
          if(flag2 === false){
            flag2 = true;
            //setTime.children = '削除';
          }else if(flag === true){
            flag2 = false;
          }
        }

        setInterval(function(){
            dateSeconds = new Date().getSeconds();
            dateMinutes = new Date().getMinutes();
            dateHours = new Date().getHours();
            if(dateSeconds <= 9){
                var seconds = '0' + dateSeconds;
            }else{
                seconds = dateSeconds;
            };

            if(dateMinutes <= 9){
                var minutes = '0' + dateMinutes;
            }else{
                minutes = dateMinutes;
            };

            if(dateHours >= 1 && dateHours <= 9){
                var hours = '0' + dateHours;
            }else{
                hours = dateHours;
            };

            if(timeIndex[setTime2Index] == nowNumber){
                ring();
            }//毎秒今の時間を更新して、setTimeと同じか判断する

            nowNumber = hours + ':' + minutes;
//            Number(nowNumber)
            nowTime.innerText = nowNumber + ':' + seconds;
        }, 1000);
    }
})();

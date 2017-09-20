(function(){
    window.onload = function(){
        var nowTime = document.getElementById('nowTime'),
            setTime = document.getElementById('setTime'),
            setBox,
            setTime2 = [],
            setTime2Index,
            nowNumber,
            setNumber,
            timeIndex = [],
            text = document.getElementById('memo'),
            stopButton,
            pushButton = document.getElementById('push'),
            hoursValue = document.getElementById('hoursValue'),
            minutesValue = document.getElementById('minutesValue'),
            deleteButton = document.getElementById('delete'),
            dateSeconds = 0,
            dateHours = 0,
            dateMinutes = 0,
            request,
            i = 0,
            i2 = 0,
            edit,
            a = document.getElementsByTagName('div'),
            flag = true,
            flag2 = false;

        document.getElementById('oooo').onclick = function(){
          // var a = document.getElementsByTagName('div');
          console.log(request);
          console.log(dateSeconds);

          // var ko = document.createElement('button');
          // document.getElementById('oooo').appendChild(ko);
          // ko.addEventListener('click', function(){
          //   ko.textContent = null;
          // }, false)
        }//テストに使ってる〜

        Notification.requestPermission(function(result){
          request = result;
        });

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

        function ring() {
            document.getElementById('alarm').play();
        }//setTimeとnowTimeが同じだったときの処理

        function ringNotification(zikan){
          if (request === 'granted' || zikan.value === true) {
            new Notification("アラーム", {body: zikan.firstChild.value});
            zikan.value = false;
          }
        }

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

            setBox = document.createElement('div');
            setBox.id = i;
            setBox.value = flag;
            setBox.classList.add('time');
            document.getElementById('oue').appendChild(setBox);

            setBox.addEventListener('click', function(event){
              if (event.target.tagName === 'H2') {
                console.log(event.target.parentNode.childNodes[1]);
                if (event.target.parentNode.childNodes[1].value === 'false') {
                    event.target.parentNode.childNodes[1].value = true;
                    event.target.parentNode.childNodes[1].innerText = '削除';
                }else if (event.target.parentNode.childNodes[1].value === 'true') {
                    event.target.parentNode.childNodes[1].value = false;
                    if (event.target.parentNode.value === true) {
                      event.target.parentNode.childNodes[1].innerText = 'とぅるえ';
                    }else if(event.target.parentNode.value === false){
                      event.target.parentNode.childNodes[1].innerText = 'ふぁるせ';
                    }
                }
                return false;
              }
              if(event.target.childNodes[1].value === 'false') {
                event.target.childNodes[1].value = true;
                event.target.childNodes[1].innerText = '削除';
                console.log(event.target.className);
              }else if (event.target.childNodes[1].value === 'true') {
                event.target.childNodes[1].value = false;
                console.log(flag2 + '2');
                if (event.target.value === true) {
                  event.target.childNodes[1].innerText = 'とぅるえ';
                }else if(event.target.value === false){
                  event.target.childNodes[1].innerText = 'ふぁるせ';
                }
              }
            }, false)

            setTime = document.createElement('h2');
            setTime.value = setNumber;

            document.getElementById(i).appendChild(setTime);
            setTime.innerText = setNumber;

            setTime2Index = setTime2.indexOf(true);

            // memo = document.createElement('strong');
            // memo.innerText = text.value;
            // document.getElementById(i).appendChild(memo);
            // document.createElement('p')

            stopButton = document.createElement('button');
            stopButton.innerText = 'とぅるえ';
            stopButton.id = 'stop';
            stopButton.value = flag2;
            stopButton.classList.add('stop2')
            document.getElementById(i).appendChild(stopButton);

              stopButton.addEventListener('click', function (event){
                event.stopPropagation();
                  if(event.target.value === 'true') {
                    edit = confirm('お？');
                    if(edit === true){
                      document.getElementById('oue').removeChild(event.target.parentNode);
                    }
                  }else if(event.target.parentNode.value === true) {
                    event.target.parentNode.style.color = 'red';
                    event.target.parentNode.value = false;
                    event.target.innerText = 'ふぁるせ';
                    console.log(flag2);
                    // console.log(event.target.parentNode.value);
                  }else if(event.target.parentNode.value === false){
                    event.target.parentNode.style.color = '#000';
                    event.target.parentNode.value = true;
                    event.target.innerText = 'とぅるえ';
                    console.log(flag2);
                    // console.log(event.target.parentNode.value);
                  }
              },false);

            deleteButton.onclick = function(){
                document.getElementById('oue').textContent = null;
              }

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

            // stopButton.onclick = function(){
            //   //console.log(stopButton.parentNode);
            //     if(stopButton.parentNode.value === true){
            //       stopButton.parentNode.value = false;
            //       stopButton.innerText = 'ふぁるせ';
            //       console.log(stopButton)
            //     }else if(stopButton.parentNode.value === false){
            //       stopButton.parentNode.value = true;
            //       stopButton.innerText = 'とぅるえ';
            //       //console.log(setTime.target.parentNode.value);
            //     }
            // }
            i++;
        }//設定する時間の処理

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

            for (var i2 = 1; i2 < a.length - 3; i2++) {
              if (a[i2].value === true && a[i2].firstChild.value === nowNumber) {
                ring();
                ringNotification(a[i2]);
              }
            }//div要素がtrueかつh2が今の時間と同じ数字なら音がなる

            nowNumber = hours + ':' + minutes;
//            Number(nowNumber)
            nowTime.innerText = nowNumber + ':' + seconds;
        }, 1000);
    }
})();

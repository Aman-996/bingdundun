const string = `<style>
/* 让我给你画一个可爱的冰墩墩儿吧 */
article * {margin: 0;padding: 0;box-sizing: border-box;vertical-align:top;}

.logo img{width: 100px;height: auto;position: absolute;bottom: 55px;left: 185px;}

article{position: relative;width: 477px;height: 555px;margin: 300px auto;}

/* 让我们先画出它圆圆的身体 */
.body {width: 100%;height: 100%;border: 3px solid;border-radius: 46% 46% 49% 49%;background: #fff}

/* 没错，这是它的耳朵 */
.ear {position: absolute;top: 107px;border: 3px solid transparent;width: 350px;height: 96px;border-radius: 75px;background-color: #333;z-index: -1;}

.ear_left {left: 0;transform: rotate(53deg);}

.ear_right {right: 0;transform: rotate(-53deg);}

/* 接下来是它的手臂 */
.hand {position: absolute;width: 300px;height: 100px;background-color: #333;z-index: -1;}

.hand_left {top: 300px;left: -117px;border-radius: 55% 37% 0% 35%;transform: rotate(-40deg);animation-name: move_handL;animation-duration: 2000ms;animation-direction: alternate-reverse;animation-delay: 1.1s;animation-timing-function: ease-in-out;animation-iteration-count: infinite;}

.hand_right {top: 165px;right: -145px;border-radius: 76% 60% 85% 77%;transform: rotate(-50deg);animation-name: move_handR;animation-duration: 2000ms;animation-direction: alternate-reverse;animation-delay: 1.1s;animation-timing-function: ease-in-out;animation-iteration-count: infinite;}

.hand > .heart {position: absolute;top: 30px;right: 60px;transform: rotate(-8deg);}
  
.heart_left {position: absolute;top: 0;left: 0;width: 45px;height: 35px;background-color: red;border-radius: 0% 50% 50% 0%;}
  
.heart_right {position: absolute;top: -8px;left: -8px;width: 45px;height: 35px;background-color: red;border-radius: 0% 50% 50% 0%;transform: rotate(-97deg);}

/* 然后是它的jiojio */
.footer {border: 1px solid;position: absolute;bottom: -72px;width: 100px;height: 150px;background-color: #333;border-radius: 15% 0 43% 44%;z-index: -1;}
  
.footer_left {left: 90px;}
  
.footer_right {right: 100px;}

/* 这个部分可难了，接着看吧 */
.face {position: absolute;top: 25px;left: 29px;width: 421px;height: 353px;}

.line {width: 100%;height: 100%;border-radius: 93% 90% 75% 74%;padding: 15px;background: linear-gradient(to bottom right, #f0ff00, #58cffb);}

.line1 {width: 100%;height: 100%;background-color: #fff;border-radius: 93% 90% 75% 74%;}

/* 圆溜溜的眼睛 */
.eye {position: absolute;top: 55px;width: 100px;height: 150px;background: #333;border-radius: 45%;}

.eye_left {left: 60px;transform: rotate(45deg);}

.eye_right {right: 60px;transform: rotate(-45deg);}
  
.socket1 {overflow: hidden;position: relative;width: 65px;height: 65px;border-radius: 50%;background-color: #fff;transform: translate(18px, 12px)}

.animation {position: absolute;width: 100%;height: 100%;background-color: #333;border-radius: 50% 50% 0 0;z-index: 10;animation-duration: 1000ms;animation-direction: alternate-reverse;animation-timing-function: ease-in;animation-iteration-count: infinite}

.mask3 {top: -50px;left: -50px;transform: rotate(-46deg);animation-name: eye-blink;animation-delay: 2.4s}
  
.mask5 {top: -50px;left: 50px;transform: rotate(45deg);animation-name: eye-blink3}

.socket2 {width: 55px;height: 55px;border-radius: 50%;background-color: #423e37;transform: translate(5px, 5px);}

.socket3 {width: 20px;height: 20px;border-radius: 50%;background-color: #fff;transform: translate(8px, 0px)}

.eye_right .socket3 {transform: translate(27px, 0px);}

.nose {position: absolute;left: 193px;top: 140px;width: 40px;height: 30px;background: #0f0f10;border-radius: 50%;}

.mask {margin-top: 4px;margin-left: 9px;width: 25px;height: 17px;background: linear-gradient(to bottom,rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0));border-radius: 50%;}
  
.mouth {position: absolute;left: 155px;top: 195px;width: 105px;height: 30px;border-bottom: 3px solid #333;border-radius: 100%;z-index: 100}
  
.lips {position: absolute;left: 155px;top: 220px;width: 100px;height: 55px;border-radius: 100%;border: 2px solid #8b3a3a;background-color: #cd5555}
  
.mask1 {width: 80px;height: 48px;background: linear-gradient(to bottom,rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0));transform: translate(-8px, 14px);border-radius: 100%}

/* 让它动起来吧！！！ */
@keyframes move_handL {0% {  transform: rotate(-40deg);}10% {  transform: rotate(-50deg);}20% {  transform: rotate(-40deg);  box-shadow: 0 10px 10px rgba(15, 15, 16, 0.3);}30% {  transform: rotate(-55deg);}40%,50%,60%,70%,80%,90%,100% {  transform: rotate(-40deg);}}

@keyframes move_handR {0% {  transform: rotate(-50deg);}10% {  transform: rotate(-60deg);  box-shadow: 0 10px 10px rgba(15, 15, 16, 0.3);}20% {  transform: rotate(-50deg);  box-shadow: 0 10px 10px rgba(15, 15, 16, 0.3);}30% {  transform: rotate(-55deg);  box-shadow: 0 10px 10px rgba(15, 15, 16, 0.3);}40%,50%,60%,70%,80%,90%,100% {  transform: rotate(-50deg);}}

@keyframes eye-blink {75% {  top: -50px;  left: -50px;}100% {  top: -20px;  left: -20px;}}

@keyframes eye-blink3 {75% {  top: -50px;  left: 50px;}100% {  top: -20px;  left: 20px;}}

/* 一个可爱的冰墩墩儿就画好了 */
</style>`;

let n = 1;

demo1.innerHTML = string.substring(0, n);
demo2.innerText = string.substring(0, n);

// 封装定时器
const time = () => {
  n += 1;
  if (n > string.length) {
    clearInterval(id);
    return;
  }
  demo1.innerHTML = string.substring(0, n);
  demo2.innerText = string.substring(0, n);
  demo2.scrollTop = demo2.scrollHeight
}

let id = setInterval(() => {
  // 调用定时器
  time()
},100)

// 暂停
btn_stop.onclick = () => {
  console.log('123');
  clearInterval(id)
}

// 开始
btn_action.onclick = () => {
  id = setInterval(() => {
    // 调用定时器
    time()
  },100)
}

// 慢速
btn_slow.onclick = () => {
  id = setInterval(() => {
    // 调用定时器
    time()
  },300)
}

// 中速
btn_speed.onclick = () => {
  id = setInterval(() => {
    // 调用定时器
    time()
  },100)
}

// 快速
btn_quick.onclick = () => {
  id = setInterval(() => {
    // 调用定时器
    time()
  },0)
}

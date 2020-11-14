
const txtAnim = document.getElementById("writeText");


new Typewriter(txtAnim, {
    loop: true, 
    deleteSpeed: 20
})
.changeDelay(40)
.typeString('<strong><span style="font-size:30px;color:rgb(2555,255,255)"> Développeur Full-Stack junior</span></strong>')
.pauseFor(1000)
.deleteChars(17)
.typeString('<strong><span style="font-size:30px;color:#27ae60;"> HTML</span></strong>')
.pauseFor(1000)
.deleteChars(5)
.typeString('<strong><span style="font-size:30px;color: #27ae60"> CSS</span></strong>')
.pauseFor(1000)
.deleteChars(5)
.typeString('<strong><span style="font-size:30px;color: #ea39ff;"> PHP</span></strong>')
.pauseFor(1000)
.deleteChars(5)
.typeString('<strong><span style="font-size:30px;color: #ea39ff"> MYSQL:SQL</span></strong>')
.pauseFor(1000)
.deleteChars(9)
.typeString('<strong><span style="font-size:30px;color: #ff6910;"> Javascript</span></strong>')
.pauseFor(1000)
.deleteChars(5)
.start()






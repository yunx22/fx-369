const colors = [
    "#a287d5",
    "#bcb2d5",
    "#2b71aa",
    "#f1b04c",

]; //用来设置的颜色
var canvas = document.getElementById("floating-words");
var ctx = canvas.getContext("2d");
let count = 1;

var ww = window.innerWidth;
var wh = window.innerHeight;

var labels = [];

function init() {
    requestAnimationFrame(render);
    canvas.width = ww;
    canvas.height = wh;
    for (var i = 0; i < 100; i++) {
        labels.push(new Label());
    }
}

function Label() {
    this.x = Math.random() * ww;
    this.y = Math.random() * wh;
    this.opacity = Math.random() * 0.5 + 0.5;
    this.vel = {
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 4,
    };
    this.targetScale = Math.random() * 0.15 + 0.02;
    this.scale = this.targetScale * Math.random();
}

Label.prototype.update = function (i) {
    this.x += this.vel.x;
    this.y += this.vel.y;

    this.scale += (this.targetScale - this.scale) * 0.01;
    if (this.x - this.width > ww || this.x + this.width < 0) {
        this.scale = 0;
        this.x = Math.random() * ww;
    }
    if (this.y - this.height > wh || this.y + this.height < 0) {
        this.scale = 0;
        this.y = Math.random() * wh;
    }
    this.width = 473.8;
    this.height = 408.6;
};
Label.prototype.draw = function (i) {
    ctx.globalAlpha = this.opacity;
    ctx.font = `${180 * this.scale}px "微软雅黑"`;
    // ctx.font="20px";
    ctx.fillStyle = colors[i % 4];
    ctx.fillText(
        "369⚡️",
        this.x - this.width * 0.5,
        this.y - this.height * 0.5,
        this.width,
        this.height
    );
};

function render() {
    ctx.clearRect(0, 0, ww, wh);
    for (var i = 0; i < 100; i++) {
        labels[i].update(i);
        labels[i].draw(i);
    }
    requestAnimationFrame(render);
}

init();

window.addEventListener("resize", function () {
    ww = window.innerWidth;
    wh = window.innerHeight;
});
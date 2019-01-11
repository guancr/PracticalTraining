<template>
    <div class="canvas">
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
import Bg from '../assets/can.jpg'
// https://avatars0.githubusercontent.com/u/42825647?s=460&v=4
export default {
    computed:{
        canvas(){
            return this.$refs.canvas;
        },
        context(){
            return this.$refs.canvas.getContext('2d');
        }
    },
    mounted(){
        let img = new Image();
        img.src = Bg;
        img.onload = ()=>{
            this.canvas.width = img.width;
            this.canvas.height = img.height;
            this.context.drawImage(img,0,0,img.width,img.height,0,0,img.width,img.height)
            let letImg = new Image();
                letImg.src = 'https://avatars1.githubusercontent.com/u/8192412?s=460&v=4';
                letImg.onload = ()=>{
                // this.context.drawImage(letImg,0,0,86,86) 
                this.circleImg(this.context,letImg,0,0,41);
            }
            this.context.font="24px Georgia";
            this.context.textAlign="center";
            this.context.fillText("迪丽热巴",145,864);
        }
    },
    methods:{
        circleImg(ctx, img, x, y, r) {
            ctx.save();
            var d =2 * r;
            var cx = 100+ r;
            var cy = 750 + r;
            ctx.arc(cx, cy, r, 0, 2 * Math.PI);
            ctx.clip();
            ctx.drawImage(img, 100, 750, d, d);
            ctx.restore();
        }
    }
}
</script>

<style>
    canvas{
        width: 100%;
    }
</style>


import { Component, OnInit, OnDestroy, ViewChild  } from '@angular/core';
import { MySpecialLoggerService } from "../service/my-special-logger.service";


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  // host: {'class': 'col-12 col-sm-6 col-md-4 col-lg-3 '}
  
})
export class BodyComponent implements OnInit {

  /**
   * 공튀기기.. 나중에 따로 서비스로 빼던지 컴포넌트로 빼던지...
   */
  canvas:any;
  context:CanvasRenderingContext2D;
  ballRadius:number;
  x:number;
  y:number;
  dx:number;
  dy:number;
  paddleHeight:number;
  paddleWidth:number;
  paddleX:number;
  rightPressed:boolean;
  leftPressed:boolean;

  brickRowCount:number = 3;
  brickColumnCount:number = 5;
  brickWidth:number = 75;
  brickHeight:number = 20;
  brickPadding:number = 10;
  brickOffsetTop:number = 30;
  brickOffsetLeft:number = 30;

  bricks:any[][];
  
  
  @ViewChild("myCanvas") myCanvas;

  constructor(private logger: MySpecialLoggerService) { }

  ngOnInit() {
    this.canvas = this.myCanvas.nativeElement;
    this.context = this.canvas.getContext("2d");

    this.ballRadius = 10;
    this.x = this.canvas.width/2;
    this.y = this.canvas.height-30;
    this.dx = 2;
    this.dy = -2;

    this.paddleHeight = 10;
    this.paddleWidth = 75;
    this.paddleX = (this.canvas.width-this.paddleWidth)/2;
    this.rightPressed = false;
    this.leftPressed =false;

    for(var c:number=0; c<this.brickColumnCount; c++) {
      console.log(c);
      // this.bricks[c] = c;
      for(var r:number=0; r<this.brickRowCount; r++) {
          this.bricks[c][r] = { x: 0, y: 0 };
      }

    }

    // console.log(this.bricks);
    

    this.draw();
    
   }

  // TODO : 앞으로는 어디로 갈지 정해야 함.
  startManjoo(){
    alert("잠시만요.. 열심히 만들고 있어요!! ^_^/");
  }

  keyDown($event) {
    console.log("ddd");
  }

  keyUp($event: KeyboardEvent) {
  }
  
  mouseMove(){
    console.log("ddd");
    // var relativeX = e.clientX - canvas.offsetLeft;
    // if(relativeX > 0 && relativeX < canvas.width) {
    //     paddleX = relativeX - paddleWidth/2;
    // }
  }

  drawBall() {

    var ctx = this.context;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  drawPaddle() {

    var ctx = this.context;
    ctx.beginPath();
    ctx.rect(this.paddleX, this.canvas.height-this.paddleHeight, this.paddleWidth, this.paddleHeight);
    // console.log(ctx.rect );
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  drawBricks() {
    var ctx = this.context;
    for(var c:number=0; c<this.brickColumnCount; c++) {
        for(var r:number=0; r<this.brickRowCount; r++) {
            var brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
            var brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;
            this.bricks[c][r].x = brickX;
            this.bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
  }

  draw() {

    requestAnimationFrame(()=> {
      this.draw();
      
    });

    var ctx = this.context;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // this.drawBricks();
    this.drawBall();
    this.drawPaddle();

    if(this.x + this.dx > this.canvas.width-this.ballRadius || this.x + this.dx < this.ballRadius) {
      this.dx = -(this.dx);
    }
    if(this.y + this.dy > this.canvas.height-this.ballRadius || this.y + this.dy < this.ballRadius) {
      this.dy = -(this.dy);
    }

    if(this.rightPressed && this.paddleX < this.canvas.width-this.paddleWidth) {
      this.paddleX += 7;
    }
    else if(this.leftPressed && this.paddleX > 0) {
      this.paddleX -= 7;
    }

    this.x += this.dx;
    this.y += this.dy;

    
  }

  

}

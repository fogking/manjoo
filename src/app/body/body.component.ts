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
  score:number = 0;



  bricks:any[] = [];

  // 내가 추가한거
  lives:number = 3;
  ballColor:string = "#0095DD"; 
  
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

    // 대라기 빡대가리 됬나봐 배열 문법 몰라서 해맴 ... 시발.....
    for(var c:number=0; c<this.brickColumnCount; c++) {
      this.bricks[c] = [];
      for(var r:number=0; r<this.brickRowCount; r++) {
          this.bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }

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
  
  mouseMove($event:MouseEvent){

    var relativeX = $event.clientX - this.canvas.offsetLeft;
    if(relativeX > 0 && relativeX < this.canvas.width) {
        this.paddleX = relativeX - this.paddleWidth/2;
    }
  }

  drawBall() {

    var ctx = this.context;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, Math.PI*2);
    

    ctx.fillStyle = this.ballColor;
    // ctx.fillStyle = "#"+r+g+b;
    ctx.fill();
    ctx.closePath();
  }

  drawPaddle() {

    var ctx = this.context;
    ctx.beginPath();
    ctx.rect(this.paddleX, this.canvas.height-this.paddleHeight, this.paddleWidth, this.paddleHeight);
    ctx.fillStyle = "#0095DD";
    
    ctx.fill();
    ctx.closePath();
  }

  drawBricks() {
    var ctx = this.context;
    for(var c:number=0; c<this.brickColumnCount; c++) {
        for(var r:number=0; r<this.brickRowCount; r++) {
          if(this.bricks[c][r].status == 1) {
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
  }

  collisionDetection() {
    for(var c=0; c<this.brickColumnCount; c++) {
        for(var r=0; r<this.brickRowCount; r++) {
            var b = this.bricks[c][r];
            if(b.status == 1) {
                if(this.x > b.x && this.x < b.x+this.brickWidth && this.y > b.y && this.y < b.y+this.brickHeight) {
                  this.dy = -(this.dy);
                    b.status = 0;
                    console.log('!!!!');
                    this.score++;
                    if(this.score == this.brickRowCount*this.brickColumnCount){
                      alert("YOU WIN, CONGRATS!");
                      // TODO 캔버스 리로드...
 
                    }
                }
            }
        }
    }
  }

  drawScore() {
    var ctx = this.context;
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+this.score,8,20);

  }

  drawLives() {
    var ctx = this.context;
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+this.lives, this.canvas.width-65, 20);
}



  draw() {

    requestAnimationFrame(()=> {
      this.draw();
      
    });

    var ctx = this.context;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBricks();
    this.drawBall();
    this.drawPaddle();
    this.drawScore();
    this.drawLives(); 
    this.collisionDetection();

    if(this.x + this.dx > this.canvas.width-this.ballRadius || this.x + this.dx < this.ballRadius) {
      var r = Math.floor(Math.random()*99);		// 0 ~ 255 까지의 난수 얻어오기
      var g = Math.floor(Math.random()*99);
      var b = Math.floor(Math.random()*99);
      this.ballColor = "#"+r+g+b;
      this.dx = -(this.dx);
    }
    if(this.y + this.dy < this.ballRadius) {
      this.dy = -(this.dy);
    }else if(this.y + this.dy > this.canvas.height - this.ballRadius) {
      if(this.x > this.paddleX && this.x < this.paddleX + this.paddleWidth) {
        this.dy = -(this.dy);  
      }else {
        this.lives--;
        if(!this.lives) {
          alert("GAME OVER");
        }else {
          this.x = this.canvas.width/2;
          this.y = this.canvas.height-30;
          this.dx = 3;
          this.dy = -3;
          this.paddleX = (this.canvas.width-this.paddleWidth)/2;
        }
      }
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

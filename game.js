class mainScene{
    preload(){
        //loads all assets
        this.preload.image('player', 'assets/bird.png');
        this.preload.image('coin', 'assets/coin.png');
    }
    
    create(){
        //first scene
        this.player = this.physics.add.sprite(100, 100, 'player');
        this.coin = this.physics.add.sprite(300, 300, 'coin');

        this.score = 0;

        let style = {font: '20px Arial', fill: '#fff'};

        this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style);

        this.arrow = this.input.keyboard.createCursorKeys();
    }

    // update(){
    //     //playing game
    //     if(this.arrow.right.isDown){
    //         this.player.x +=3;
    //     }
    //     else if(this.arrow.left.isDown){
    //         this.player.x -=3;
    //     }

    //     if(this.arrow.down.isDown){
    //         this.player.y +=3;
    //     }
    //     else if(this.arrow.up.isDown){
    //         this.player.y -=3;
    //     }

    //     if(this.physics.overlap(this.player, this.coin)){
    //         this.hit();
    //     }
    // }

    // hit(){
    //     this.coin.x = Phaser.Math.Between(100, 600);
    //     this.coin.y = Phaser.Math.Between(100, 300);
    
    //     this.score +=10;
    
    //     this.scoreText.setText('score: ' + this.score);
      
    // }
}



new Phaser.Game({
    width: 700,
    height: 400,
    backgroundColor: '#8b87ff',
    scene: mainScene,
    physics: {default: 'arcade'},
    parent: 'game',
});
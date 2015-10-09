var player = {
  name: 'Super Guy',
  totalCoins: 5,
  status: 'Small',
  star: false,
  setName: function(namePicked) {
    this.name = namePicked;
  },
  gotHit: function(){
    if (this.status === 'Powered Up') {
      this.status = 'Big'
    } else if (this.staus === 'Big') {
      this.status = 'Small';
    } else if (this.status === 'Small' ) {
      this.status = 'Dead';
      this.gameActive = false;
    }
  },
  gameActive: true,
  gotPowerup: function() {
    if (this.status === 'Small') {
      this.status = 'Big';
    } else if (this.status === 'Big') {
      this.status = 'Powered Up';
      this.star = true;
    }
  },
  addCoin: function () {
    this.totalCoins++;
  },
  print: function () {
    console.log('Name: ' + this.name + '\n' +
    'Total Coins: ' + this.totalCoins + '\n' +
    'Status: ' + this.status + '\n' +
    'Star: ' + this.star)
  }
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < 3; i++) {
    switch (getRandomArbitrary(1, 3)) {
      case 1:
        player.gotHit();
        break;
      case 2:
        player.gotPowerup();
        break;
      case 3:
        player.addCoin();
        break;

    }
}

player.print();

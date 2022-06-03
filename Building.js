class Building{
    constructor()
    {
      this.height=10;
      this.position=1;    
      this.yPosition=490;
      this.width=25;
      this.floors=10;
      
      //Each floor is approximately equal to 12 feet
      //If a building has 3 floors it would be 3*12=36 feet high.
      this.building_height=this.floors*12;
      
    }  
    display()
    {
     this.height=this.floors*50;
     this.yPosition=595-(this.height);
      //this.xPosition=395-(this.height);
     this.xPosition=this.position*150;
     rect(this.xPosition,this.yPosition, this.width, this.height); 
     //fill("violet");
    }  
    
  }
  
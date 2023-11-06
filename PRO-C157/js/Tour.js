AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "super man",
        title: "super man",
        url: "./assets/thumbnails/28ea02a81393afd44011f11c9cea89a7.jpg",
      },
      {
        id: "spider man",
        title: "spider man",
        url: "./assets/thumbnails/r.jpg",
      },

      {
        id: "captain aero ",
        title: "captain aero",
        url: "./assets/thumbnails/cA.jpg",
      },
      {
        id: "outer space",
        title: "",
        url: "./assets/thumbnails/download.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;


      const borderEl = this.createBorder(position,item.id);

      const thumbnail = this.createThumbnail(item);
      borderEl.appendChild(thumbnail);

      const titleEl =this.createTitleEl( position , item );
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);


    }},
      // Border Element
      
      createBorder: function(position,id) {

      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id",id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
       primitive:"ring",
      radiusInner: 9,
      radiusOuter:10,
      });
      entityEl.setAttribute("position",position)
      entityEl.setAttribute("material",{
       color: "#0077cc",
      opacity: 1,
      });

      return entityEl;

      },

      // Thumbnail Element
  
      createThumbnail: function (item) {

        const entityEl = document.createElement("a-entity");
        
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
         primitive:"circle",
        radiusInner: 9,
       
        });
        entityEl.setAttribute("material",{
        src:item.url 

        });
  
        return entityEl;

      },

      // Title Text Element
      
      createTitleEl: function (position,item) {

   const entityEl = document.createElement("a-entity");
 
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
       font: "exo2bold",
       align : "center",
       width: 70,
      color:"#e65100",
      value:item.title
      });
      const elPosition=position;
      elPosition.y = -20;
      entityEl.setAttribute("position",elPosition)

      return entityEl;
      },

 
  });

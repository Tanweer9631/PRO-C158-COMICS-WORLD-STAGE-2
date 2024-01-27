AFRAME.registerComponent("comics", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards(); // Call the function to create cards when the component initializes
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "superman",
        title: "Superman",
        url: "./assets/thumbnails/superman.jpg",
      },
      {
        id: "spiderman",
        title: "Spiderman",
        url: "./assets/thumbnails/spiderman.jpg",
      },
      {
        id: "captain-aero",
        title: "Captain Aero",
        url: "./assets/thumbnails/captainaero.jpg",
      },
      {
        id: "outer-space",
        title: "Outer Space",
        url: "./assets/thumbnails/OuterSpace.png",
      },
    ];

    let previousXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = previousXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      previousXPosition = posX;

      // Border Element
      var borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      var thumbnailEl = this.createThumbnail(position, item.url);
      borderEl.appendChild(thumbnailEl);

      // Title Text Element (you can add it if needed)

      this.placesContainer.appendChild(borderEl);
    }
  },

  createBorder: function (position, id) {
    var entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", { primitive: "rectangle", radiusInner: 9, radiusOuter: 10 });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", { color: "#000", opacity: 1 }); 
    entityEl.setAttribute("cursor-listener", {});

    return entityEl;
  },

  createThumbnail: function (position, url) {
    var entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", { primitive: "plane", width: 18, height: 18 }); 
    entityEl.setAttribute("position", {x: 0, y:5, z:0.1});
    entityEl.setAttribute("material", { src: url });

    return entityEl;
  },
  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    
    return entityEl;
  },
});
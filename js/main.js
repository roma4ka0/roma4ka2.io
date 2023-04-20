var Application = new Vue({
    el: "#app",
    data: {
    products: [
        {
          id: 1,
          title: "Managing Director: Mr. Udi Hess",
          text: "B.Sc. Agriculture – faculty of Agriculture, Hebrew University, Israel MBA – university of Tel Aviv, Israel Experienced managements skills in various agriculture farming and seed business",
          image: "pipols.jfif",
          desc: "Full desc1",
        },
  
        {
          id: 2,
          title: "Production manager: Mr.Danny Voloch",
          text: "B.Sc. Agriculture – faculty of Agriculture, Hebrew University, Israel",
          image: "pipols2.jfif",
          desc: "Full desc2",
        },
       
        {
          id: 3,
          title: "Finance Manager: Miss Shelly Milberg",
          text: "BA in Economics from Ben Gurion University MBA from the College of Management Experience of 18 years in finance",
          image: "pipols3.jfif",
          desc: "Full desc3",
        },
       
        {
          id: 4,
          title: " R&D Manager and Tomato Breeder: Dr.Raviv Azari ",
          text: "Faculty of plant genetic, Hebrew University, Israel",
          image: "pipols4.jfif",
          desc: "Full desc4",
        },
  
        {
          id: 5,
          title: "Vegetables Product & Marketing Manager: Mr. Ayham Azaiza",
          text: "M.Sc. Economics, Marketing and Management in Agriculture, Hebrew University, Faculty of Agriculture.",
          image: "pipols5.jfif",
          desc: "Full desc5",
        },

        {
            id: 6,
            title: "Plant Manager: Mr. Yonadav Breitman",
            text: "Experience of 14 years in seed processing treatments",
            image: "pipols6.jfif",
            desc: "Full desc5",
        },
        
        {
            id: 7,
            title: "Farm Manager: Mr. Nimrod Tzur",
            text: "Experience of 30 Years in farming practices , open field crop and vegetables",
            image: "pipols7.jfif",
            desc: "Full desc5",
        },
    ],

      product: [],
      ludi:[],
      contactFields: [],
      btnVisible: 0,
      order: 0,
      default: 0,
    },
  });

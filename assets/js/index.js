var splide = new Splide("#mainSlider", {
  type: "loop",
  perPage: 3,
  focus: "center",
  pagination: false,
  gap: "6rem",
  breakpoints: {
    991: {
      perPage: 2,
      gap: "4rem",
      pagination: false,
    },
    580: {
      perPage: 1,
      gap: "2rem",
      pagination: false,
    },
  },
});

splide.on("overflow", function (isOverflow) {
  splide.options = {
    arrows: isOverflow,
    pagination: isOverflow,
    drag: isOverflow,
  };
});

splide.mount();

var splide2 = new Splide("#achievementSlider", {
  pagination: false,
  type: "loop",
  perPage: 3,
  perMove: 1,
  gap: "3.5rem",
  breakpoints: {
    1300: {
      perPage: 2,
      gap: "2rem",
      pagination: false,
    },
    991: {
      perPage: 3,
      gap: "2rem",
      pagination: false,
      focus: "center",
    },
    750: {
      perPage: 2,
      gap: "2rem",
      pagination: false,
      focus: "center",
    },
    540: {
      perPage: 1,
      gap: "2rem",
      pagination: false,
      focus: "center",
    },
  },
});

splide2.on("overflow", function (isOverflow) {
  splide2.options = {
    arrows: isOverflow,
    pagination: isOverflow,
    drag: isOverflow,
  };
});

splide2.mount();

var splide3 = new Splide("#teamSlider", {
  type: "loop",
  perPage: 4,

  gap: "3rem",
  pagination: false,
  breakpoints: {
    1218: {
      perPage: 3,
      focus: "center",
      pagination: false,
    },
    781: {
      perPage: 2,
      gap: "4rem",
      focus: "center",
      pagination: false,
    },
    550: {
      perPage: 1,
      gap: "4rem",
      focus: "center",
      pagination: false,
    },
  },
});

splide3.on("overflow", function (isOverflow) {
  splide3.options = {
    arrows: isOverflow,
    pagination: isOverflow,
    drag: isOverflow,
  };
});

splide3.mount();

AOS.init();

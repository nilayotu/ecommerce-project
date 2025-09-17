const initialState = {
  items: [
    {
      id: 1,
      title: "GROCERIES DELIVERY",
      desc: "We know how large objects will act, but things on a small scale.",
      img: "/assets/first-slider.jpg",
      btnText: "Start Now",
    },
    {
      id: 2,
      title: "GROCERIES DELIVERY",
      desc: "We know how large objects will act, but things on a small scale.",
      img: "/assets/first-slider.jpg", // aynı görsel olabilir
      btnText: "Start Now",
    },
  ],
};

export default function sliderReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
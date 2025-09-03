const initialState = {
  items: [
    {
      id: 1,
      title: "GROCERIES DELIVERY",
      desc: "We know how large objects will act, but things on a small scale just do not act that way.",
      img: "/assets/first-slider.jpg",
      btnText: "Start Now",
    },
    // ileride buraya başka slider item'ları da eklenebilir
  ],
};

export default function sliderReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
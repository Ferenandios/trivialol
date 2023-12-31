import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  indexActive: 0,
  showCopy: false,
  persons: [
    {
      title: "Создать приложение",
      text: "Создать игру нужно просто и элегантно, используя все современные инструменты разработки для быстрой работы приложения. Если исполнить это со связкой с потрясающим дизайном и отличной поддержкой всех браузеров, то из всего этого выйдет очень хороший продукт, который будет уверенно захватывать мир браузерных игр.",
      isActive: true,
    },
    {
      title: "Раскрутить сайт",
      text: "Большая часть пиара будет основана на сарафанном радио. Также отличным продвижением для онлайн-игры будут покупка баннеров у поисковых сайтов, размещение на новостных сайтах постов о создании новой игры, написание статей и просьба о помощи в раскрутке сайта у ранее игравших в игру популярных стримеров и блогеров.",
      isActive: false,
    },
    {
      title: "Внедрение игры в школах",
      text: "После раскрутки сайта мы договоримся со всеми школами Москвы о внедрении этого приложения в рамках турнира среди учащихся. Специально для этого будет создан отдельный режим и торговая площадка, где игроки будут создавать и продавать свой контент. Дальше мы выйдем на федеральный уровень и будем уже проводить турниры по всей России.",
      isActive: false,
    },
    {
      title: "Создать версии по всем странам мира",
      text: "Создав карту России. Дальше в целях развивать продукт, разрабатывая карты других стран со всего мира. Будет создан раздел с выбором на сайте, где изначально выбрана страна, в которой проживает посетитель сайта.",
      isActive: false,
    },
    {
      title: "Создавать другие приложения",
      text: "На этом приложении мы не остановимся и будем развивать компанию на основе проблем рынка.",
      isActive: false,
    },
  ],
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    changeActive: (state, action: PayloadAction<number>) => {
      const item = state.persons;
      if (item[action.payload] !== item[state.indexActive]) {
        item[action.payload].isActive = !item[action.payload].isActive;
        item[state.indexActive].isActive = !item[state.indexActive].isActive;
        state.indexActive = action.payload;
      }
    },
    displayCopyWindow: (state) => {
      state.showCopy = !state.showCopy;
    },
  },
});

export default personSlice.reducer;
export const { changeActive, displayCopyWindow } = personSlice.actions;

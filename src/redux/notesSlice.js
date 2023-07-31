import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { NoteType } from "../types/NoteType";
const initialState = [
  {
    id: "1",
    name: "Shopping list",
    created: "April 20, 2023",
    category: "Task",
    content: "Tomatoes, bread.",
    date: " ",
    arhived: true,
  },
  {
    id: "2",

    name: "The theory of evolution",
    created: "April 27, 2023",
    category: "Random thought",
    content: "The theory of evolution read.",
    date: "",
    arhived: true,
  },
  {
    id: "3",
    name: "New Feature",
    created: "May 20, 2023",
    category: "Idea",
    content: "Implement new plant",
    date: "20/3/2023, 5/5/2023",
    arhived: false,
  },
  {
    id: "4",
    name: "Shopping list",
    created: "April 20, 2023",
    category: "Task",
    content: "Tomatoes, bread.",
    date: "",
    arhived: true,
  },
  {
    id: "5",
    name: "The theory of evolution",
    created: "April 27, 2023",
    category: "Random thought",
    content: "The theory of evolution read.",
    date: "",
    arhived: false,
  },
  {
    id: "6",
    name: "New Feature",
    created: "May 20, 2023",
    category: "Idea",
    content: "Implement new plant",
    date: "20/3/2023, 5/5/2023",
    arhived: true,
  },
  {
    id: "7",
    name: "Shopping list",
    created: "April 20, 2023",
    category: "Task",
    content: "Tomatoes, bread.",
    date: "",
    arhived: true,
  },
  {
    id: "8",
    name: "The theory of evolution",
    created: "April 27, 2023",
    category: "Random thought",
    content: "The theory of evolution read.",
    date: "",
    arhived: false,
  },
  {
    id: "9",
    name: "New Feature",
    created: "May 20, 2023",
    category: "Idea",
    content: "Implement new plant",
    date: "20/3/2023, 5/5/2023",
    arhived: true,
  },
  {
    id: "10",
    name: "Shopping list",
    created: "April 20, 2023",
    category: "Task",
    content: "Tomatoes, bread.",
    date: "",
    arhived: false,
  },
  {
    id: "11",
    name: "The theory of evolution",
    created: "April 27, 2023",
    category: "Random thought",
    content: "The theory of evolution read.",
    date: "",
    arhived: false,
  },
  {
    id: "12",
    name: "New Feature",
    created: "May 20, 2023",
    category: "Idea",
    content: "Implement new plant",
    date: "20/3/2023, 5/5/2023",
    arhived: false,
  },
];
const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      // prepare(newNote) {
      //   return {
      //     payload: {
      //       id: nanoid(),
      //       arhived: false,
      //       ...newNote,
      //     },
      //   };
      // },
    },
    toggleArhivedNote: (state, action) => {
      return state.map((note) => {
        if (note.id !== action.payload) {
          return note;
        }
        return { ...note, arhived: !note.arhived };
      });
    },
    editNote: (state, action) => {
      const noteIdx = state.findIndex(({ id }) => id === action.payload.id);
      // const newDate = new Date(newNote.date).toLocaleDateString("en-US", {
      //   month: "numeric",
      //   day: "numeric",
      //   year: "numeric",
      // });

      // let allDate = "";

      // if (newDate !== notes[noteIdx].date && newDate !== "Invalid Date") {
      //   allDate = notes[noteIdx].date
      //     ? `${notes[noteIdx].date}, ${newDate}`
      //     : newDate;
      // }

      state[noteIdx] = { ...state[noteIdx], ...action.payload };
    },
    removeNote: (state, action) => {
      return state.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote } = notesSlice.actions;
export const notesReducer = notesSlice.reducer;

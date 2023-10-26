import { useState } from "react";
import "./App.css";
import Card from "./Card";

const INITIAL_STATE = [
  { val: "1", chosen: false },
  { val: "2", chosen: false },
  { val: "3", chosen: true },
  { val: "4", chosen: false },
];

type Row = {
  val: string;
  chosen: boolean;
};
export type ListObject = Row[];

const App = () => {
  const [listLeft, setListLeft] = useState<ListObject>(INITIAL_STATE);
  const [listRight, setListRight] = useState<ListObject>([]);

  //TODO refactor 2 button click fns to one
  const handleRightButtonClick = () => {
    const filteredItems = listLeft.filter((item) => !item.chosen);
    const chosenItems = listLeft.filter((item) => {
      if (item.chosen) {
        return true;
      }
    });
    const updatedChosenItems = chosenItems.map((item) => ({
      ...item,
      chosen: false,
    }));
    setListLeft(filteredItems);
    setListRight((prevListRight) => [...prevListRight, ...updatedChosenItems]);
  };

  const handleLeftButtonClick = () => {
    const filteredItems = listRight.filter((item) => !item.chosen);
    const chosenItems = listRight.filter((item) => {
      if (item.chosen) {
        return true;
      }
    });
    const updatedChosenItems = chosenItems.map((item) => ({
      ...item,
      chosen: false,
    }));
    setListRight(filteredItems);
    setListLeft((prevListLeft) => [...prevListLeft, ...updatedChosenItems]);
  };

  //TODO refactor checkbox click fns to one fn
  const handleLeftCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clickedValue = e.target.value;
    const updatedList = listLeft.map((item) =>
      item.val === clickedValue ? { ...item, chosen: !item.chosen } : item
    );
    setListLeft(updatedList);
  };

  const handleRightCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clickedValue = e.target.value;
    const updatedList = listRight.map((item) =>
      item.val === clickedValue ? { ...item, chosen: !item.chosen } : item
    );
    setListRight(updatedList);
  };

  return (
    <main className="main">
      <Card list={listLeft} checkboxClick={handleLeftCheckboxClick} />
      <div className="button-container">
        <button onClick={handleRightButtonClick}>{">"}</button>
        <button onClick={handleLeftButtonClick}>{"<"}</button>
      </div>
      <Card list={listRight} checkboxClick={handleRightCheckboxClick} />
    </main>
  );
};
export default App;

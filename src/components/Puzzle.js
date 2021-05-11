import "./Puzzle.css";
import _ from "lodash";
import { useEffect, useState } from "react";

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

export default function Puzzle({ imgSrc, imageHeight, imageWidth }) {
  const [puzzleRows, setPuzzleRows] = useState(3);
  const [puzzleColumns, setPuzzleColumns] = useState(4);
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const tilesArray = [];
    let i = 0;
    for (let y = 0; y < puzzleRows; y++) {
      for (let x = 0; x < puzzleColumns; x++) {
        tilesArray.push({ id: i, x: x, y: y, positionBase: i++ });
      }
    }

    const shuffled = _.shuffle(tilesArray)
      .slice()
      .map((tile, index) => {
        return { ...tile, id: index };
      });
    setBoxes(shuffled);
  }, [puzzleColumns, puzzleRows]);

  const swapBoxes = (fromBox, toBox) => {
    let fromIndex = -1;
    let toIndex = -1;

    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].id === fromBox.id) {
        fromIndex = i;
      }
      if (boxes[i].id === toBox.id) {
        toIndex = i;
      }
    }

    if (fromIndex !== -1 && toIndex !== -1) {
      setBoxes(
        boxes
          .map((tile) =>
            tile.id === toIndex
              ? {
                  ...tile,
                  id: fromIndex,
                }
              : tile.id === fromIndex
              ? {
                  ...tile,
                  id: toIndex,
                }
              : tile
          )
          .sort((a, b) => a.id - b.id)
      );
    }
  };

  useEffect(() => {
    if (boxes.length > 0) {
      if (boxes.filter((tile) => tile.positionBase !== tile.id).length === 0) {
        sleep(300).then(() => alert("Congratulations! You win!"));
      }
    }
  }, [boxes]);

  const handleDragStart = (data) => (event) => {
    let fromBox = JSON.stringify({ id: data });
    event.dataTransfer.setData("dragContent", fromBox);
  };

  const handleDragOver = (data) => (event) => {
    event.preventDefault(); // Necessary. Allows us to drop.
    return false;
  };

  const handleDrop = (data) => (event) => {
    event.preventDefault();
    let toBox = { id: data };
    let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
    swapBoxes(fromBox, toBox);
    return false;
  };

  return (
    <div>
      <div>
        <button
          id="button-plus"
          onClick={() => {
            setPuzzleRows(puzzleRows + 1);
          }}
        >
          +
        </button>
        <span>Rows number: {puzzleRows}</span>
        <button
          id="button-minus"
          onClick={() => {
            setPuzzleRows(puzzleRows - 1);
          }}
        >
          -
        </button>

        <button
          id="button-plus"
          onClick={() => {
            setPuzzleColumns(puzzleColumns + 1);
          }}
        >
          +
        </button>
        <span>Columns number: {puzzleColumns}</span>
        <button
          id="button-minus"
          onClick={() => {
            setPuzzleColumns(puzzleColumns - 1);
          }}
        >
          -
        </button>
      </div>
      <div
        className="puzzle"
        style={{
          "--puzzle-img": `url(${imgSrc})`,
          "--puzzle-row": `${puzzleRows}`,
          "--puzzle-col": `${puzzleColumns}`,
          "--puzzle-width": `${imageWidth / 25}rem`,
          "--puzzle-height": `${imageHeight / 25}rem`,
        }}
      >
        {boxes.map((tile) => (
          <div
            className="fragment"
            key={tile.positionBase}
            style={{
              "--x": tile.x,
              "--y": tile.y,
              "--i": tile.positionBase,
            }}
            draggable={true}
            onDragStart={handleDragStart(tile.id)}
            onDragOver={handleDragOver(tile.id)}
            onDrop={handleDrop(tile.id)}
          ></div>
        ))}
      </div>
    </div>
  );
}

const { filteredAnimals, countChildren } = require("../app");

describe("filteredAnimals", () => {
  const data = require("../data/data");

  it("should return only data with matching pattern", () => {
    const pattern = "ry";
    const filteredData = filteredAnimals(data, pattern);
    expect(filteredData).toEqual([
      {
        name: "Uzuzozne",
        people: [
          {
            name: "Lillie Abbott",
            animals: [
              {
                name: "John Dory",
              },
            ],
          },
        ],
      },
      {
        name: "Satanwi",
        people: [
          {
            name: "Anthony Bruno",
            animals: [
              {
                name: "Oryx",
              },
            ],
          },
        ],
      },
    ]);
  });
  it("should not return empty array after filtering", () => {
    const pattern = "non-existent-pattern";
    const filteredData = filteredAnimals(data, pattern);
    expect(filteredData).not.toEqual([]);
  });
});

describe("countChildren", () => {
  const data = require("../data/data");

  it("should return an array with the same length as data", () => {
    const countData = countChildren(data);
    expect(countData.length).toEqual(data.length);
  });
  it("should correctly count the number of people and animals", () => {
    const countData = countChildren(data);

    expect(countData[0].name).toEqual("Uzuzozne [2]");
    expect(countData[0].people[0].name).toEqual("Lillie Abbott [1]");
    expect(countData[1].name).toEqual("Satanwi [2]");
    expect(countData[1].people[0].name).toEqual("Anthony Bruno [1]");
    expect(countData[2].name).toEqual("Dillauti [16]");
    expect(countData[2].people[0].name).toEqual("Winifred Graham [6]");
    expect(countData[2].people[1].name).toEqual("Blanche Viciani [8]");
  });
});

import ArrayService from "../../services/ArrayService";

describe("/services/ArrayService.ts", () => {
  test("a. stringToNUmberArray method should return correct array of numbers", (done) => {
    const stringToNumberArrayTest = ArrayService.stringToNumberArray("1111")
    expect(stringToNumberArrayTest).toEqual([1, 1, 1, 1])
    done()
  })
})

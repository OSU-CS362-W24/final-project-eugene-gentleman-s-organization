/**
 * @jest-environment jsdom
 */

const fs = require("fs")

require("@testing-library/jest-dom")
const domTesting = require("@testing-library/dom")
const userEvent = require("@testing-library/user-event").default

function operationDomItToHell(htmlPth, jsPth) {
    const tmi = fs.readFileSync(htmlPth, 'utf-8')
    document.open()
    document.write(tmi)
    document.close()
    document.close()
	jest.isolateModules(function() {
		require(jsPth)
	})
}

const generateChartImg = require("./lib/generateChartImg")
jest.mock("./lib/generateChartImg", () => jest.fn())

test("No Data: generateChartImg not called (Line)", async () => {

    operationDomItToHell(
        __dirname + "/line/line.html",
        __dirname + "/line/line.js"
    )

    const title = domTesting.getByLabelText(document, "Chart title")
    const x_label = domTesting.getByLabelText(document, "X label")
    const y_label = domTesting.getByLabelText(document, "Y label")

    const user = userEvent.setup()

    await user.type(title, 'Very Scientific Graph')
    await user.type(x_label, 'Independent Var')
    await user.type(y_label, 'Dependent Var')

    generateChartImg.mockImplementation(() => () =>  Promise.resolve('test'))

    const genBttn = domTesting.queryByAttribute("id", document, "generate-chart-btn")

    await user.click(genBttn)

    expect(generateChartImg).not.toHaveBeenCalled()

    generateChartImg.mockRestore()

})

test("Inputs correctly sent to generateChartImg (Line)", async () => {

    operationDomItToHell(
        __dirname + "/line/line.html",
        __dirname + "/line/line.js"
    )

    const title = domTesting.getByLabelText(document, "Chart title")
    const x_label = domTesting.getByLabelText(document, "X label")
    const y_label = domTesting.getByLabelText(document, "Y label")

    const user = userEvent.setup()

    await user.type(title, 'Very Scientific Graph')
    await user.type(x_label, 'Independent Var')
    await user.type(y_label, 'Dependent Var')

    const addBttn = domTesting.queryByAttribute("id", document, "add-values-btn")

    await user.click(addBttn)
    await user.click(addBttn)

    const xs = domTesting.getAllByLabelText(document, "X")
    const ys = domTesting.getAllByLabelText(document, "Y")

    await user.type(xs[0], '6')
    await user.type(ys[0], '6')
    await user.type(xs[1], '4')
    await user.type(ys[1], '2')

    generateChartImg.mockImplementation(() => () =>  Promise.resolve('test'))

    const genBttn = domTesting.queryByAttribute("id", document, "generate-chart-btn")

    await user.click(genBttn)

    expect(generateChartImg).toHaveBeenCalled()

    generateChartImg.mockRestore()

})
